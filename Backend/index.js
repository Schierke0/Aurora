var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var session = require('express-session');

//Routers
var archivosRouter = require('./routes/archivos-router');
var PaginaPrincipalRouter = require('./routes/pagina-principal-router');
var PaginaPostRouter = require("./routes/posts-router");
var PaginaEstaticaRouter = require("./routes/pagina-estatica-router");
var categoriaRouter = require("./routes/categoria-router");
var rolRouter = require("./routes/rol-router");
var usuariosRouter = require("./routes/usuarios-router");

var app = express();

const fileUpload = require("express-fileupload");

app.use(session({
    secret: 'djhxcvxfgshjfgjhgsjhfgakjeauytsdfy',
    resave: false,
    saveUninitialized: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/archivosPublicos", express.static("archivos"));
app.use(fileUpload());
//routers
app.use('/archivos', archivosRouter);
app.use('/paginaPrincipal', PaginaPrincipalRouter);
app.use('/paginaPost', PaginaPostRouter);
app.use('/paginaEstatica', PaginaEstaticaRouter);
app.use("/categoria", categoriaRouter);
app.use("/rol", rolRouter);
app.use("/usuario", usuariosRouter);




app.listen(8888, function() {
    console.log('servidor backend levantado');
})