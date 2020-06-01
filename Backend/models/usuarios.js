const mongoose = require("mongoose");

const esquema = new mongoose.Schema({
    nombre: String,
    correoElectronico: String,
    contraseña: String,
    imgRoute: String
});

module.exports = mongoose.model("Archivos", esquema);