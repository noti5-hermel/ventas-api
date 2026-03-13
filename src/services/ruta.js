const schema=require("../schemas/rute");

const rutaService={};


rutaService.createRuta=async(data)=>{
    try{
        const newRuta= await schema.create(data);
        return newRuta;
    }catch(e){
        console.error("Error al crear ruta",e);
        throw new Error("Error al crear ruta");
    }
}


rutaService.updateRuta=async(id,data)=>{
    try {
        const exist= await schema.findByPk(id);
        if(!exist)throw new Error("ruta no existe");

        await exist.update(data);
        return exist;
        
    } catch (e) {
         console.error("Error al actualizar",e);
        throw new Error("Error al actualizar ruta");
    }
}

rutaService.getAll=async()=>{
    try {
        const data = await schema.findAll();
        return data;
        
    } catch (error) {
        console.error("Error al obtener rutas",error);
        throw new Error("Error al obtener rutas");
    }
}


rutaService.getById=async(id)=>{
    try {
        const ruta = await schema.findByPk(id);
        if(!ruta) throw new Error("ruta no encontrada");
        return ruta;
        
    } catch (error) {
         console.error("Error al obtener ruta",error);
        throw new Error("Error al obtener ruta");
    }
}

rutaService.deleteRuta=async(id)=>{
     try {
        const exist = await schema.findByPk(id);
        if(!exist)throw new Error("ruta no existe");

        const deleteRuta=exist.get({plain:true});
        await exist.destroy();
        return deleteRuta;
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al eliminar ruta");
    }
}


module.exports=rutaService;
