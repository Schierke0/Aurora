var PaginaEstatica = require('../models/pagina-estatica')
var express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

//Crear nueva pagina estatica
router.post('/', function(req, res) {
    let u = new PaginaEstatica({
        shortcuts: [],
        Titulo: req.body.Titulo,
        TituloMenu: req.body.TituloMenu,
        PaginaPadre: req.body.PaginaPadre,
        Url: req.body.Url,
        PalabrasClave: req.body.PalabrasClave,
        Descripcion: req.body.Descripcion,
        galeria: [],
        posts: [],
        opciones: req.body.opciones
    });
    u.save()
        .then(function(resultt) {
            res.send(result);
            res.end();
        })
        .catch(function(err) {
            res.send(err);
            res.end();
        });
    res.send({
        codigoResultado: 1,
        mensaje: "Registro guardado",
        ArchivoGuardado: u
    })
})

//obtener Todas las paginas estatica 
router.get("/", function(req, res) {
    PaginaEstatica.find()
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});


//obtener una pagina estatica
router.get("/:id", function(req, res) {
    PaginaEstatica.find({ _id: mongoose.Types.ObjectId(req.params.id) })
        .then((data) => {
            res.send(data[0]);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

//actualizar una pagina estatica
router.put("/:id", function(req, res) {
    PaginaEstatica.updateOne({ _id: req.params.id }, {
            $set: {
                Titulo: req.body.Titulo,
                TituloMenu: req.body.TituloMenu,
                PalabrasClave: req.body.PalabrasClave,
                Descripcion: req.body.Descripcion
            },
        })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

//eliminar una pagina estatica
router.delete("/:id", function(req, res) {
    PaginaEstatica.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

router.put('/shortcuts/:idPagina', function(req, res) {
    PaginaEstatica.update({
            _id: req.params.idPagina
        }, {
            $push: {
                shortcuts: {
                    html: req.body.html,
                    orden: req.body.orden
                }
            }
        })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(err => {
            res.send(err);
            res.end();
        });
})

router.put('/shortcuts/:idPagina/galeria', function(req, res) {
    PaginaEstatica.update({
            _id: req.params.idPagina
        }, {
            $push: {
                galeria: { "url": req.body.url }
            }
        })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(err => {
            res.send(err);
            res.end();
        });
})
router.put("/shortcuts/:idPagina/post", function(req, res) {
    PaginaEstatica.update({
            _id: req.params.idPagina,
        }, {
            $push: {
                posts: { idPost: req.body.idPost }
            },
        })
        .then((result) => {
            res.send(result);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

module.exports = router;