const mongoose = require("mongoose");

const esquemaArchivo = new mongoose.Schema({
    nombre: String,
    url: String,
    accesoRoute: String,
    fecha: { type: Date, default: Date.now() },
    tipoArchivo: String,
    categoria: String
});

module.exports = mongoose.model("Archivos", esquemaArchivo);