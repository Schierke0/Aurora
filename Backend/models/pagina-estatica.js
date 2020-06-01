  var mongoose = require('mongoose');
  var esquemaPaginaEstatica = new mongoose.Schema({
      shortcuts: String,
      Titulo: String,
      TituloMenu: String,
      PaginaPadre: String,
      Url: String,
      PalabrasClave: String,
      Descripcion: String,
      shortcuts: Array,
      galeria: Array,
      posts: Array,
      opciones: Array,
  });
  //dos parametros el primero es el nombre de la coleccion, 
  module.exports = mongoose.model('pagina-estatica', esquemaPaginaEstatica);

  //al final importar el esquema en el rauter correspondiente