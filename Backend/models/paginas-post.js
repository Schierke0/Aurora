  var mongoose = require('mongoose');
  var esquemaPaginaPost = new mongoose.Schema({
          TituloEntrada: String,
          Autor: String,
          PalabrasClave: String,
          contenido: String,
          permitirComentarios: Boolean,
          comentarios: Array,
          categoria: String,
          RutaAccesoImagen: String
      })
      //dos parametros el primero es el nombre de la coleccion, 
  module.exports = mongoose.model('pagina-post', esquemaPaginaPost);

  //al final importar el esquema en el rauter correspondiente