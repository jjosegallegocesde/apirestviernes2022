

export function buscarTodos(request,response){

    try{

        response.status(200).json({
            mensaje:"Exito en la bsuqueda",
            data:[{nombre:"Juan",edad:32},{nombre:"Maria",edad:50}],
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

export function buscarPorId(request,response){

}

export function insertar(request,response){

}

export function editar(request,response){

}

export function eliminar(request,response){

}