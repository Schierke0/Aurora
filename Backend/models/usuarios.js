const mongoose = require("mongoose");

const esquema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rol: String,
    nombreRol: String
});

module.exports = mongoose.model("usuarios", esquema);