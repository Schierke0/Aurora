var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var User = require("../models/usuarios");
var BCRYPT_SALT_ROUNDS = 12;

/* REGISTER USER. */
router.post("/registro", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    bcrypt
        .hash(password, BCRYPT_SALT_ROUNDS)
        .then(function(hashedPassword) {
            var u = new User({ email: email, password: hashedPassword, name: req.body.name, rol: req.body.rol });
            u.save()
                .then((result) => {
                    res.send(result);
                    res.end();
                })
                .catch((err) => {
                    res.send(err);
                    res.end();
                });
            res.send({
                codigoResultado: 1,
                mensaje: "Registro guardado",
                ArchivoGuardado: u,
            });
        })
        .then(function() {
            res.send();
        })
        .catch(function(error) {
            console.log("Error saving user: ");
            console.log(error);
            next();
        });



});

/* LOGIN USER. */
router.post("/login", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    let usuario;
    User.findOne(({ "email": email })).then(function(user) {
        usuario = user
        return bcrypt.compare(password, user.password);
    }).then(function(samePassword) {
        if (!samePassword) {
            res.send("Su contraseña es incorrecta");
        } else {
            req.session.user = usuario;
            res.send("bienvenido esta logeado");
        }
    }).catch(function(error) {
        res.send("Verifica si tu correo esta correcto");
        console.log(error);
        res.end()
    });
});


/* app.post("/login", function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    usersDB

}); */
/* GET LOGOUT */
router.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            /* console.log(err); */
            res.send(err.message);
        } else {
            /* res.send('User logged out successfully!', res, {}); */
            res.send("User logged out successfully!");
        }
    });
});
/* GET DASHBOARD */
router.get("/dashboard", function(req, res) {
    if (!req.session.user) {
        res.send("You are not logged in");
    } else {
        res.send("Welcome to dashboard!");
    }
});
/* Obtener todos los usuarios */
router.get("/", function(req, res) {
    User.find().then((result) => {
            res.send(result);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });

});
/* Obtener un usuario */
router.get("/:idUser", function(req, res) {
    User.find({ _id: req.params.idUser }).then((result) => {
            res.send(result[0]);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });

});



module.exports = router;