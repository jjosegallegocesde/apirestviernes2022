//Importan los servicios
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorHabitacion{

    constructor(){}

    async buscarTodos(request,response){
        let servicio=new ServicioHabitacion( )// Se instancia la clase SERVICIO
        try{

            response.status(200).json({
                mensaje:"Exito en la bsuqueda",
                data:await servicio.buscarTodos(),
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    async buscarPorId(request,response){
        let id=request.params.id //CAPTURO EL ID QUE LLEGA POR LA URL
        console.log("El id solicitado es: "+id)
        let servicio=new ServicioHabitacion( )// Se instancia la clase SERVICIO
        try{

            response.status(200).json({
                mensaje:"Exito en la busqueda por id: "+id,
                data:await servicio.buscarPorId(id),
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    async insertar(request,response){
        let datosPeticion=request.body
        console.log(datosPeticion)
        let servicio=new ServicioHabitacion( )// Se instancia la clase SERVICIO
        try{
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito registrando datos",
                data:datosPeticion,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    async editar(request,response){
        let id=request.params.id
        let datosPeticion=request.body
        let servicio=new ServicioHabitacion( )// Se instancia la clase SERVICIO
        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando datos",
                data:null,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }


    async eliminar(request,response){
        let id=request.params.id
        let servicio=new ServicioHabitacion( )// Se instancia la clase SERVICIO

        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando datos",
                data:null,
                estado:true
            })
    
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

}