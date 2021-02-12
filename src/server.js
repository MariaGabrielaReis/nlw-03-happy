//importa dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//inicia o express
const server = express();
server
.use(express.static('public'))
//utilizar body do req
.use(express.urlencoded({extended: true}))

//configura template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//liga servidor
.listen(5500)