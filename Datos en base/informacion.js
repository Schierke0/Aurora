db.usuarios.insertMany([{
  "_id":ObjectId(),
  "email": "carlos90@gmail.com",
  "password": "$2b$12$IeBvut3aG03pdKkKSPlMjO0RhXpeQ0B1gjq.YNNUPXm5e7tA//hP.",
  "name": "Carlos Martinez",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "marta@gmail.com",
  "password": "$2b$12$1u0FaK6IdJHB9h54Z0MbjeazeDrHsFMV7uDb9wt/aMwbSSXS2mbDu",
  "name": "Marta Gomez",
  "rol": "5ed57bda29b6a53e447a1941",
  "nombreRol": "Administrador",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "jose@gmail.com",
  "password": "$2b$12$ZYmX.56VLXxNehBdFDYR8u7qA1VeAsbFRFdG4ZuUspmakwoiMZG2y",
  "name": "Jose Lopez",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "pablo@gmail.com",
  "password": "$2b$12$jPhPav3MtolBGsZZp7Lo7.8y/F3KRN9qmUhbIuNn0hSTAnCpLaUiq",
  "name": "Pablo Ruiz",
  "rol": "5ed57bda29b6a53e447a1941",
  "nombreRol": "Administrador",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "mari@gmail.com",
  "password": "$2b$12$T269Vg1O74pb7m1hwnvBluhL5xGmwnGVfpj1mMjuoHSE8qW2KBGRa",
  "name": "Mari Rosales",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "natila@gmail.com",
  "password": "$2b$12$8ZA6xH/dD6Lba.StnL46S.5GaiQgrx4YPqvUvj.vQUBg0zIEnWWPu",
  "name": "Natalia Sierra",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "pablo@gmail.com",
  "password": "$2b$12$w3LyqnNxqjfqvamFOF5J7.zOT0APN3LZxCeanx9NIwygb//6wVCcW",
  "name": "Pablo Alonso",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "ma@gmail.com",
  "password": "$2b$12$IMgMBNQLf./JS70gqTYYH.53Q1GAuiTpdAHtrUnmDVEOhYdTXkr4O",
  "name": "Maria Herrera",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "gabriel@gmail.com",
  "password": "$2b$12$7ExIBeOtZH6l0.ZhPmBapegHAV.f5HB.KIs35tDVNn3gLKLdD8FJy",
  "name": "Gabriel Sabillon",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "alison@gmail.com",
  "password": "$2b$12$83i2uXOMI2HvyE0ih.mgLefYwgKD5jfwmsJdC7ilTXWkyiMXtyJKa",
  "name": "Alison Izaguirre",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "admin@gmail.com",
  "password": "$2b$12$Zq2n2vGJQwSMWngZyixwEeC2lTmsXoeKiMr5NOBv4/Bf7K5KUEKaC",
  "name": "Admin",
  "rol": "5ed57bda29b6a53e447a1941",
  "nombreRol": "Administrador",
  "__v": 0
},{
  "_id":ObjectId(),
  "email": "carmen@gmail.com",
  "password": "$2b$12$fyv1asH6dhGkkfyBMFGabuBJO9z4zdmc55ceF2tTV8UDW65ElVo8K",
  "name": "carmen lobo",
  "rol": "5ed57bd129b6a53e447a1940",
  "nombreRol": "Registrado",
  "__v": 0
}]);

db.roles.insertMany([{
  "_id":ObjectId(),
  "idPaginasAcceso": [
    "5ed3f3a6720d3724f039b8cd"
  ],
  "nombreRol": "No registrado",
  "Descripcion": "Usuarios no autenticados",
  "id": "10152090"
},{
  "_id":ObjectId(),
  "idPaginasAcceso": [
    "todas"
  ],
  "nombreRol": "Registrado",
  "Descripcion": "Usuarios autenticados",
  "id": "4567890"
},{
  "_id":ObjectId(),
  "idPaginasAcceso": [
    "todas"
  ],
  "nombreRol": "Administrador",
  "Descripcion": "Administradores",
  "id": "9835049"
}]);

db.categorias.insertMany([{
  "_id":ObjectId(),
  "nombreCategoria": "Astronomía y astrofisica"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Musica"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Mascotas"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Economia"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Tecnologia"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Fotografia"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Ingenieria"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Ciencias"
},{
  "_id":ObjectId(),
  "nombreCategoria": "Programacion"
}]);
db.archivos.insertMany([{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T01:53:59.895Z"
  },
  "nombre": "Auditoría de dispositivos informáticos del usuario final.pptx",
  "url": "./archivos/presentaciones/Auditoría de dispositivos informáticos del usuario final.pptx",
  "accesoRoute": "/archivosPublicos/presentaciones/Auditoría de dispositivos informáticos del usuario final.pptx",
  "tipoArchivo": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "categoria": "presentaciones",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T01:53:59.895Z"
  },
  "nombre": "Auditoría de dispositivos informáticos del usuario final.docx",
  "url": "./archivos/word/Auditoría de dispositivos informáticos del usuario final.docx",
  "accesoRoute": "/archivosPublicos/word/Auditoría de dispositivos informáticos del usuario final.docx",
  "tipoArchivo": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "categoria": "word",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T01:53:59.895Z"
  },
  "nombre": "Frameworks, Standards....pptx",
  "url": "./archivos/presentaciones/Frameworks, Standards....pptx",
  "accesoRoute": "/archivosPublicos/presentaciones/Frameworks, Standards....pptx",
  "tipoArchivo": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "categoria": "presentaciones",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T01:53:59.895Z"
  },
  "nombre": "2019-06-01 22-45-28_Trim.mp4",
  "url": "./archivos/videos/2019-06-01 22-45-28_Trim.mp4",
  "accesoRoute": "/archivosPublicos/videos/2019-06-01 22-45-28_Trim.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T04:06:43.492Z"
  },
  "nombre": "Articulo de Investigacion.pdf",
  "url": "./archivos/pdf/Articulo de Investigacion.pdf",
  "accesoRoute": "/archivosPublicos/pdf/Articulo de Investigacion.pdf",
  "tipoArchivo": "application/pdf",
  "categoria": "pdf",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T04:06:43.492Z"
  },
  "nombre": "Part II -Auditing Techniques_removed_removed_removed.pdf",
  "url": "./archivos/pdf/Part II -Auditing Techniques_removed_removed_removed.pdf",
  "accesoRoute": "/archivosPublicos/pdf/Part II -Auditing Techniques_removed_removed_removed.pdf",
  "tipoArchivo": "application/pdf",
  "categoria": "pdf",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T04:06:43.492Z"
  },
  "nombre": "Part II -Auditing Techniques.pdf",
  "url": "./archivos/pdf/Part II -Auditing Techniques.pdf",
  "accesoRoute": "/archivosPublicos/pdf/Part II -Auditing Techniques.pdf",
  "tipoArchivo": "application/pdf",
  "categoria": "pdf",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T04:06:43.492Z"
  },
  "nombre": "movil.pdf",
  "url": "./archivos/pdf/movil.pdf",
  "accesoRoute": "/archivosPublicos/pdf/movil.pdf",
  "tipoArchivo": "application/pdf",
  "categoria": "pdf",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T17:25:25.312Z"
  },
  "nombre": "acceso a segunda entrega.txt",
  "url": "./archivos/texto/acceso a segunda entrega.txt",
  "accesoRoute": "/archivosPublicos/texto/acceso a segunda entrega.txt",
  "tipoArchivo": "text/plain",
  "categoria": "texto",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-20T17:25:25.312Z"
  },
  "nombre": "Afiladora de brocas.docx",
  "url": "./archivos/word/Afiladora de brocas.docx",
  "accesoRoute": "/archivosPublicos/word/Afiladora de brocas.docx",
  "tipoArchivo": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "categoria": "word",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "etica.docx",
  "url": "./archivos/word/etica.docx",
  "accesoRoute": "/archivosPublicos/word/etica.docx",
  "tipoArchivo": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "categoria": "word",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "Una tarea de tiempo real duro es aquella que debe cumplir su plazo límite.pdf",
  "url": "./archivos/pdf/Una tarea de tiempo real duro es aquella que debe cumplir su plazo límite.pdf",
  "accesoRoute": "/archivosPublicos/pdf/Una tarea de tiempo real duro es aquella que debe cumplir su plazo límite.pdf",
  "tipoArchivo": "application/pdf",
  "categoria": "pdf",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "prueba.txt",
  "url": "./archivos/texto/prueba.txt",
  "accesoRoute": "/archivosPublicos/texto/prueba.txt",
  "tipoArchivo": "text/plain",
  "categoria": "texto",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "2019-03-08 18-37-11.mp4",
  "url": "./archivos/videos/2019-03-08 18-37-11.mp4",
  "accesoRoute": "/archivosPublicos/videos/2019-03-08 18-37-11.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "2018-12-10_18-20-53.mp4",
  "url": "./archivos/videos/2018-12-10_18-20-53.mp4",
  "accesoRoute": "/archivosPublicos/videos/2018-12-10_18-20-53.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "Documento de prueba.xlsx",
  "url": "./archivos/excels/Documento de prueba.xlsx",
  "accesoRoute": "/archivosPublicos/excels/Documento de prueba.xlsx",
  "tipoArchivo": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "categoria": "excels",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "Unitarias.xlsx",
  "url": "./archivos/excels/Unitarias.xlsx",
  "accesoRoute": "/archivosPublicos/excels/Unitarias.xlsx",
  "tipoArchivo": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "categoria": "excels",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "photo-of-person-taking-photo-using-black-camera-3812384.jpg",
  "url": "./archivos/img/photo-of-person-taking-photo-using-black-camera-3812384.jpg",
  "accesoRoute": "/archivosPublicos/img/photo-of-person-taking-photo-using-black-camera-3812384.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "chihuahua-puppy-lying-on-textile-1933464.jpg",
  "url": "./archivos/img/chihuahua-puppy-lying-on-textile-1933464.jpg",
  "accesoRoute": "/archivosPublicos/img/chihuahua-puppy-lying-on-textile-1933464.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "black-chihuahua-1840106.jpg",
  "url": "./archivos/img/black-chihuahua-1840106.jpg",
  "accesoRoute": "/archivosPublicos/img/black-chihuahua-1840106.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "short-coated-black-and-brown-puppy-in-white-and-red-polka-39317.jpg",
  "url": "./archivos/img/short-coated-black-and-brown-puppy-in-white-and-red-polka-39317.jpg",
  "accesoRoute": "/archivosPublicos/img/short-coated-black-and-brown-puppy-in-white-and-red-polka-39317.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "Pexels Videos 2769.mp4",
  "url": "./archivos/videos/Pexels Videos 2769.mp4",
  "accesoRoute": "/archivosPublicos/videos/Pexels Videos 2769.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "black-and-tan-chihuahua-2132710.jpg",
  "url": "./archivos/img/black-and-tan-chihuahua-2132710.jpg",
  "accesoRoute": "/archivosPublicos/img/black-and-tan-chihuahua-2132710.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "blur-cactus-close-up-focus-269255.jpg",
  "url": "./archivos/img/blur-cactus-close-up-focus-269255.jpg",
  "accesoRoute": "/archivosPublicos/img/blur-cactus-close-up-focus-269255.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "creative-table-setting-for-celebration-of-easter-with-green-3980605.jpg",
  "url": "./archivos/img/creative-table-setting-for-celebration-of-easter-with-green-3980605.jpg",
  "accesoRoute": "/archivosPublicos/img/creative-table-setting-for-celebration-of-easter-with-green-3980605.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "macbook-pro-on-brown-wooden-table-2312369.jpg",
  "url": "./archivos/img/macbook-pro-on-brown-wooden-table-2312369.jpg",
  "accesoRoute": "/archivosPublicos/img/macbook-pro-on-brown-wooden-table-2312369.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "man-in-white-dress-shirt-sitting-on-black-rolling-chair-840996.jpg",
  "url": "./archivos/img/man-in-white-dress-shirt-sitting-on-black-rolling-chair-840996.jpg",
  "accesoRoute": "/archivosPublicos/img/man-in-white-dress-shirt-sitting-on-black-rolling-chair-840996.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "person-s-hand-3162828.jpg",
  "url": "./archivos/img/person-s-hand-3162828.jpg",
  "accesoRoute": "/archivosPublicos/img/person-s-hand-3162828.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "Pexels Videos 1711830.mp4",
  "url": "./archivos/videos/Pexels Videos 1711830.mp4",
  "accesoRoute": "/archivosPublicos/videos/Pexels Videos 1711830.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "Pexels-Videos.mp4",
  "url": "./archivos/videos/Pexels-Videos.mp4",
  "accesoRoute": "/archivosPublicos/videos/Pexels-Videos.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "photo-of-a-woman-in-a-flower-field-holding-a-chihuahua-puppy-2165898.jpg",
  "url": "./archivos/img/photo-of-a-woman-in-a-flower-field-holding-a-chihuahua-puppy-2165898.jpg",
  "accesoRoute": "/archivosPublicos/img/photo-of-a-woman-in-a-flower-field-holding-a-chihuahua-puppy-2165898.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "photo-of-plants-on-the-table-1005058.jpg",
  "url": "./archivos/img/photo-of-plants-on-the-table-1005058.jpg",
  "accesoRoute": "/archivosPublicos/img/photo-of-plants-on-the-table-1005058.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-27T07:11:41.815Z"
  },
  "nombre": "woman-in-yellow-top-carrying-short-coated-black-and-brown-3190743.jpg",
  "url": "./archivos/img/woman-in-yellow-top-carrying-short-coated-black-and-brown-3190743.jpg",
  "accesoRoute": "/archivosPublicos/img/woman-in-yellow-top-carrying-short-coated-black-and-brown-3190743.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T03:32:36.613Z"
  },
  "nombre": "adorable-animal-canine-chihuahua-191353.jpg",
  "url": "./archivos/img/adorable-animal-canine-chihuahua-191353.jpg",
  "accesoRoute": "/archivosPublicos/img/adorable-animal-canine-chihuahua-191353.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T03:32:36.613Z"
  },
  "nombre": "Supernova_Remnant-610x488.jpg",
  "url": "./archivos/img/Supernova_Remnant-610x488.jpg",
  "accesoRoute": "/archivosPublicos/img/Supernova_Remnant-610x488.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T05:49:40.759Z"
  },
  "nombre": "creative-table-setting-for-celebration-of-easter-with-green-3980605.jpg",
  "url": "./archivos/img/creative-table-setting-for-celebration-of-easter-with-green-3980605.jpg",
  "accesoRoute": "/archivosPublicos/img/creative-table-setting-for-celebration-of-easter-with-green-3980605.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T05:49:40.759Z"
  },
  "nombre": "animal-blur-canine-chihuahua-485294.jpg",
  "url": "./archivos/img/animal-blur-canine-chihuahua-485294.jpg",
  "accesoRoute": "/archivosPublicos/img/animal-blur-canine-chihuahua-485294.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T05:49:40.759Z"
  },
  "nombre": "photo-of-blue-and-brown-wooden-house-2825030.jpg",
  "url": "./archivos/img/photo-of-blue-and-brown-wooden-house-2825030.jpg",
  "accesoRoute": "/archivosPublicos/img/photo-of-blue-and-brown-wooden-house-2825030.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T05:49:40.759Z"
  },
  "nombre": "Pexels Videos 2796080.mp4",
  "url": "./archivos/videos/Pexels Videos 2796080.mp4",
  "accesoRoute": "/archivosPublicos/videos/Pexels Videos 2796080.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T08:40:30.783Z"
  },
  "nombre": "adorable-animal-animal-world-cat-209037.jpg",
  "url": "./archivos/img/adorable-animal-animal-world-cat-209037.jpg",
  "accesoRoute": "/archivosPublicos/img/adorable-animal-animal-world-cat-209037.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T08:40:30.783Z"
  },
  "nombre": "eyes-cat-coach-sofa-96938.jpg",
  "url": "./archivos/img/eyes-cat-coach-sofa-96938.jpg",
  "accesoRoute": "/archivosPublicos/img/eyes-cat-coach-sofa-96938.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-05-31T18:03:43.144Z"
  },
  "nombre": "descarga.jpg",
  "url": "./archivos/img/descarga.jpg",
  "accesoRoute": "/archivosPublicos/img/descarga.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "banner_bg4 .png",
  "url": "./archivos/paginaPrincipal/banner_bg4 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg4 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "banner_bg4 .png",
  "url": "./archivos/paginaPrincipal/banner_bg4 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg4 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-03T23:39:11.211Z"
  },
  "nombre": "banner_bg4 .png",
  "url": "./archivos/paginaPrincipal/banner_bg4 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg4 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Books_PNG.png",
  "url": "./archivos/paginaPrincipal/Books_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Books_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Books_PNG.png",
  "url": "./archivos/paginaPrincipal/Books_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Books_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Books_PNG.png",
  "url": "./archivos/paginaPrincipal/Books_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Books_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "banner_bg 2.png",
  "url": "./archivos/paginaPrincipal/banner_bg 2.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg 2.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "flame logo design .png",
  "url": "./archivos/paginaPrincipal/flame logo design .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/flame logo design .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Food_PNG.png",
  "url": "./archivos/paginaPrincipal/Food_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Food_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "banner_bg 2.png",
  "url": "./archivos/paginaPrincipal/banner_bg 2.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg 2.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Cryptocurrency_PNG - Copy.png",
  "url": "./archivos/paginaPrincipal/Cryptocurrency_PNG - Copy.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Cryptocurrency_PNG - Copy.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Cryptocurrency_PNG - Copy.png",
  "url": "./archivos/paginaPrincipal/Cryptocurrency_PNG - Copy.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Cryptocurrency_PNG - Copy.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "javascript.png",
  "url": "./archivos/paginaPrincipal/javascript.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/javascript.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Books_PNG.png",
  "url": "./archivos/paginaPrincipal/Books_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Books_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Books_PNG.png",
  "url": "./archivos/paginaPrincipal/Books_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Books_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "banner_bg 2.png",
  "url": "./archivos/paginaPrincipal/banner_bg 2.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg 2.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "black-flat-screen-computer-monitor-1714208.jpg",
  "url": "./archivos/img/black-flat-screen-computer-monitor-1714208.jpg",
  "accesoRoute": "/archivosPublicos/img/black-flat-screen-computer-monitor-1714208.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "closeup-photo-of-black-and-blue-keyboard-1194713.jpg",
  "url": "./archivos/img/closeup-photo-of-black-and-blue-keyboard-1194713.jpg",
  "accesoRoute": "/archivosPublicos/img/closeup-photo-of-black-and-blue-keyboard-1194713.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "person-using-macbook-pro-on-person-s-lap-1181298.jpg",
  "url": "./archivos/img/person-using-macbook-pro-on-person-s-lap-1181298.jpg",
  "accesoRoute": "/archivosPublicos/img/person-using-macbook-pro-on-person-s-lap-1181298.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "man-in-grey-sweater-holding-yellow-sticky-note-879109.jpg",
  "url": "./archivos/img/man-in-grey-sweater-holding-yellow-sticky-note-879109.jpg",
  "accesoRoute": "/archivosPublicos/img/man-in-grey-sweater-holding-yellow-sticky-note-879109.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "macbook-pro-on-brown-wooden-table-2312369.jpg",
  "url": "./archivos/img/macbook-pro-on-brown-wooden-table-2312369.jpg",
  "accesoRoute": "/archivosPublicos/img/macbook-pro-on-brown-wooden-table-2312369.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T00:28:08.184Z"
  },
  "nombre": "Matrix, Console, Hacking, Code.mp4",
  "url": "./archivos/videos/Matrix, Console, Hacking, Code.mp4",
  "accesoRoute": "/archivosPublicos/videos/Matrix, Console, Hacking, Code.mp4",
  "tipoArchivo": "video/mp4",
  "categoria": "videos",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "Data_analysis_PNG.png",
  "url": "./archivos/paginaPrincipal/Data_analysis_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Data_analysis_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "Data_analysis_PNG.png",
  "url": "./archivos/paginaPrincipal/Data_analysis_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Data_analysis_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "Data_analysis_PNG.png",
  "url": "./archivos/paginaPrincipal/Data_analysis_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Data_analysis_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "woman-wearing-red-and-black-checkered-blouse-using-macbook-1181472.jpg",
  "url": "./archivos/img/woman-wearing-red-and-black-checkered-blouse-using-macbook-1181472.jpg",
  "accesoRoute": "/archivosPublicos/img/woman-wearing-red-and-black-checkered-blouse-using-macbook-1181472.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T04:00:59.584Z"
  },
  "nombre": "closeup-photo-of-black-and-blue-keyboard-1194713.jpg",
  "url": "./archivos/img/closeup-photo-of-black-and-blue-keyboard-1194713.jpg",
  "accesoRoute": "/archivosPublicos/img/closeup-photo-of-black-and-blue-keyboard-1194713.jpg",
  "tipoArchivo": "image/jpeg",
  "categoria": "img",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "javascript.png",
  "url": "./archivos/paginaPrincipal/javascript.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/javascript.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "Instagram_PNG.png",
  "url": "./archivos/paginaPrincipal/Instagram_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Instagram_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "Instagram_PNG.png",
  "url": "./archivos/paginaPrincipal/Instagram_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Instagram_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "javascript.png",
  "url": "./archivos/paginaPrincipal/javascript.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/javascript.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "Instagram_PNG.png",
  "url": "./archivos/paginaPrincipal/Instagram_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Instagram_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "Instagram_PNG.png",
  "url": "./archivos/paginaPrincipal/Instagram_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/Instagram_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "coffee_PNG.png",
  "url": "./archivos/paginaPrincipal/coffee_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/coffee_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "coffee_PNG.png",
  "url": "./archivos/paginaPrincipal/coffee_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/coffee_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "go-lang.png",
  "url": "./archivos/paginaPrincipal/go-lang.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/go-lang.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "coffee_PNG.png",
  "url": "./archivos/paginaPrincipal/coffee_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/coffee_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "coffee_PNG.png",
  "url": "./archivos/paginaPrincipal/coffee_PNG.png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/coffee_PNG.png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
},{
  "_id":ObjectId(),
  "fecha": {
    "$date": "2020-06-04T09:21:08.202Z"
  },
  "nombre": "banner_bg3 .png",
  "url": "./archivos/paginaPrincipal/banner_bg3 .png",
  "accesoRoute": "/archivosPublicos/paginaPrincipal/banner_bg3 .png",
  "tipoArchivo": "image/png",
  "categoria": "paginaPrincipal",
}]);