const mongoose = require("mongoose");

const esquema = new mongoose.Schema({
    nombreRol: String,
    Descripcion: String,
    idPaginasAcceso: Array,
});

module.exports = mongoose.model("roles", esquema);