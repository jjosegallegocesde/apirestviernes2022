import mongoose from 'mongoose'

//Clase para definir el esquema d datos de mi MDOELO
const Schema=mongoose.Schema

//Construyo mi ESQUMA DE DATOS
const Habitacion=new Schema({

    nombre:{
        type:String,
        required:true
    },

    precio:{
        type:Number,
        required:true
    },

    numeroPersonas:{
        type:Number,
        required:true
    },

    foto:{
        type:String,
        required:true
    }
})

//CREO FINALMENTE EL MODELO DE DATOS
export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)