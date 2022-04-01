//Importaciones neecesarias:

//Importando express
//const express = require('express')
import express from 'express'

//PROGRAMO LA CLASE Servidor
export class Servidor{

    constructor(){

        this.app = express() //atributo app
        this.enrutarPeticiones()

    }

    //METODOS DEL SERVIDOR (¿QUÉ HACE?)
    despertarServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log("Servidor encendido")
        })

    }

    enrutarPeticiones(){

        this.app.get('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
          })
        
    }



}