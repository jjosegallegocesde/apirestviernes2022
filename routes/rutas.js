//Importando express
import express from 'express'

//Importo los controladores
import {buscarTodos} from '../controllers/controladores.js'

//Una variable para almacenar
//la funcionalidad de express Router
//Que es la que me permite personalizar y separar RUTAS
export let rutas=express.Router()

//DEFINO MIS RUTAS
rutas.get('/API/v1/viernes', buscarTodos)
rutas.get('/API/v1/viernes/id', buscarTodos)
rutas.post('/API/v1/viernes', buscarTodos)
rutas.put('/API/v1/viernes/id', buscarTodos)
rutas.delete('/API/v1/viernes/id', buscarTodos)