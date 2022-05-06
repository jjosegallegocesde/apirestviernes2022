//Importando express
import express from 'express'

//Importo los controladores
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
//Creamos el objeto para poder utilizar la clase Controlador
let controlador= new ControladorHabitacion()


//Una variable para almacenar
//la funcionalidad de express Router
//Que es la que me permite personalizar y separar RUTAS
export let rutas=express.Router()

//DEFINO MIS RUTAS
rutas.get('/API/v1/viernes', controlador.buscarTodos)
rutas.get('/API/v1/viernes/:id', controlador.buscarPorId)
rutas.post('/API/v1/viernes', controlador.insertar)
rutas.put('/API/v1/viernes/id', controlador.editar)
rutas.delete('/API/v1/viernes/id', controlador.eliminar)