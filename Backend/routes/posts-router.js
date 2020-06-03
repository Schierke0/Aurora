var PaginaPost = require("../models/paginas-post");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

//Crear un Post
router.post("/", function(req, res) {
    let u = new PaginaPost({
        TituloEntrada: req.body.TituloEntrada,
        Autor: req.body.Autor,
        PalabrasClave: req.body.PalabrasClave,
        contenido: req.body.contenido,
        permitirComentarios: req.body.permitirComentarios,
        comentarios: [],
        categoria: req.body.categoria,
        RutaAccesoImagen: req.body.RutaAccesoImagen,
    });
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

//obtener Todos los posts
router.get("/", function(req, res) {
    PaginaPost.find()
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});
//obtener todos los comentarios
router.get("/comentarios", function(req, res) {
    PaginaPost.find({}, { comentarios: true, categoria: true })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});


//obtener un post
router.get("/:id", function(req, res) {
    PaginaPost.find({ _id: req.params.id })
        .then((data) => {
            res.send(data[0]);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

//actualizar un post 
router.put("/:id", function(req, res) {
    PaginaPost.updateOne({ _id: req.params.id }, {
            $set: {
                TituloEntrada: req.body.TituloEntrada,
                PalabrasClave: req.body.PalabrasClave,
                contenido: req.body.contenido,
                categoria: req.body.categoria
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

//eliminar un post
router.delete("/:id", function(req, res) {
    PaginaPost.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});
/*
estructura del comentario 
{
    comentario:
    usuario:
    urlImagen:
    fecha:
}
*/
//agregar comentario
router.put("/:idPost/comentario", function(req, res) {
    PaginaPost.update({ _id: req.params.idPost }, {
            $push: {
                comentarios: {
                    _id: mongoose.Types.ObjectId(),
                    comentario: req.body.comentario,
                    usuario: req.body.usuario,
                    urlImagen: req.body.urlImagen,
                    fecha: req.body.fecha,
                    inapropiado: false
                },
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


//actualizar un comentario
router.put("/:idPost/:idComentario/actualizar", function(req, res) {
    PaginaPost.update({
            _id: req.params.idPost,
            "comentarios._id": mongoose.Types.ObjectId(req.params.idComentario),
        }, {
            $set: {
                "comentarios.$.inapropiado": req.body.inapropiado,
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

//eliminar comentario
router.delete("/:idPost/:idComentario/eliminar", function(req, res) {
    PaginaPost.update({ _id: req.params.idPost }, {
            $pull: {
                comentarios: {
                    _id: mongoose.Types.ObjectId(req.params.idComentario),
                },
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