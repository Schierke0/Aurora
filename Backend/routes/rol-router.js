var rol = require("../models/roles");
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');

//Crear una rol
router.post("/", function(req, res) {
    let u = new rol({
        nombreRol: req.body.nombreRol,
        Descripcion: req.body.Descripcion,
        idPaginasAcceso: req.body.idPaginasAcceso,
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

//obtener Todos las rols
router.get("/", function(req, res) {
    rol.find()
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

//obtener una rol
router.get("/:id", function(req, res) {
    rol.find({ _id: req.params.id }, { nombreRol: true })
        .then((data) => {
            res.send(data[0]);
            res.end();
        })
        .catch((err) => {
            res.send(err);
            res.end();
        });
});

//actualizar una rol
router.put("/:id", function(req, res) {
    rol
        .updateOne({ _id: req.params.id }, {
            $set: {
                nombreRol: req.body.nombrerol,
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

//eliminar unarol
router.delete("/:id", function(req, res) {
    rol.deleteOne({ _id: req.params.id })
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