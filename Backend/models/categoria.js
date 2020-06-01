  var mongoose = require('mongoose');
  var esquemaPaginaPost = new mongoose.Schema({
      nombreCategoria: String
  })

  module.exports = mongoose.model('categorias', esquemaPaginaPost);