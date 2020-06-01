var PaginaPrincipal = require('../models/pagina-principal')
var express = require('express');
var router = express.Router();

//crear 
router.post('/', function(req, res) {
    let u = new PaginaPrincipal(req.body);
    u.save()
        .then((result) => {
            res.send(result);
            res.end();
        })
        .catch((res) => {
            res.send(err);
            res.end();
        });
    res.send({
        codigoResultado: 1,
        mensaje: "Registro guardado",
        ArchivoGuardado: u
    });
});

//NECESARIO ACTUALIZAR
router.put("/:idPagina", function(req, res) {
    PaginaPrincipal.update({ _id: req.params.idPagina }, {
            $set: {
                css: req.body.css,
                TituloPagina: req.body.TituloPagina,
                PalabrasClave: req.body.PalabrasClave,
                colorFoot: req.body.colorFoot,
                colorTextoTitulo: req.body.colorTextoTitulo,
                colorTextoFooter: req.body.colorTextoFooter,
                acessoRouteFavIcon: req.body.acessoRouteFavIcon,
                acessoRouteLogotipo: req.body.acessoRouteLogotipo,
                acessoRouteImagenfondo: req.body.acessoRouteImagenfondo
            }
        })
        .then((result) => {
            res.send(result);
            res.end();
        })
        .catch((error) => {
            res.send(error);
            res.end();
        });
});
//obtener
router.get('/', function(req, res) {
    PaginaPrincipal.find()
        .then((result) => {
            res.send(result[0]);
            res.end();
        })
        .catch((error) => {
            res.send(error);
            res.end();
        });
})



module.exports = router;