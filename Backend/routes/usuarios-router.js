var express = require('express');
var router = express.Router();
var Archivo = require('../models/archivos');
var mongoose = require('mongoose');
const fs = require("fs");
//const formidableMiddleware = require("express-formidable");
//router.use(formidableMiddleware());


//CREAR UN ARCHIVO
router.post('/', function(req, res) {
    if (req.files == null)
        return res.send({ message: "no ha seleccionado ningun archivo. Por favor seleccionar uno", err: 1, });

    let archivo = req.files.file; //mismo nombre en el form! importante
    let tipoArchivo = archivo.mimetype;
    // res.send({ 'tipo': tipoArchivo })

    let ruta = './archivos'; // ruta donde guardar
    let accesoRoute = "/archivosPublicos";
    let categoria = asignarCategoria(tipoArchivo);


    ruta = `${ruta}/${categoria}/${archivo.name}`
    accesoRoute = `${accesoRoute}/${categoria}/${archivo.name}`
        //es.send({ 'accesoRoute': accesoRoute, 'ruta': ruta })
    archivo.mv(ruta, (err) => {
        if (err) return res.send(err);
        else {
            let u = new Archivo({
                nombre: archivo.name,
                url: ruta,
                accesoRoute: accesoRoute,
                tipoArchivo: tipoArchivo,
                categoria: categoria,
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
                ArchivoGuardado: u
            });
        }
    });

})


//OBTENER UN ARCHIVO
router.get('/:id', function(req, res) {
    Archivo.find({ _id: req.params.id })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})



//OBTENER TODOS LOS ARCHIVOS
router.get('/', function(req, res) {
    Archivo.find()
        .then(data => {
            res.send(data)
            res.end()
        })
        .catch(err => {
            res.send(err)
            res.end()
        })
})




//ELIMINAR UN ARCHIVO 
router.delete('/:id', function(req, res) {
    Archivo.findOne({ _id: req.params.id }, { url: 1 })
        .then(response => {
            if (fs.existsSync(`${response.url}`)) {
                fs.unlinkSync(`${response.url}`);
            }
        })
        .catch(err => {
            res.send(err)
            res.end()
        })

    Archivo.deleteOne({ _id: req.params.id })
        .then(data => {
            res.send(data)
            res.end()
        })
        .catch(err => {
            res.send(err)
            res.end()
        })

})



//ACTUALIZAR UN ARCHIVO


module.exports = router;