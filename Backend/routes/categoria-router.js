var categoria = require("../models/categoria");
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');

//Crear una categoria
router.post("/", function(req, res) {
    let u = new categoria({
        nombreCategoria: req.body.nombreCategoria,
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
});

//obtener Todos las categorias
router.get("/", function(req, res) {
    categoria.find()
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

//obtener una categoria
router.post("/:id", function(req, res) {
    categoria.find({ _id: req.params.id })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

//actualizar una categoria
router.put("/:id", function(req, res) {
    categoria
        .updateOne({ _id: req.params.id }, {
            $set: {
                nombreCategoria: req.body.nombreCategoria,
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

//eliminar unacategoria
router.delete("/:id", function(req, res) {
    categoria.deleteOne({ _id: req.params.id })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

module.exports = router;