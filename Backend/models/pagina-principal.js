var mongoose = require('mongoose');
var esquemaPaginaPrincipal = new mongoose.Schema({
    css: String,
    TituloPagina: String,
    PalabrasClave: String,
    colorFoot: String,
    colorTextoTitulo: String,
    colorTextoFooter: String,
    acessoRouteFavIcon: String,
    acessoRouteLogotipo: String,
    acessoRouteImagenfondo: String,
});
//dos parametros el primero es el nombre de la coleccion, 
module.exports = mongoose.model('pagina-principal', esquemaPaginaPrincipal)

//al final importar el esquema en el rauter correspondiente