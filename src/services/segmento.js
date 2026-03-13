const schema=require("../schemas/segmento");

const segmentoService={};


segmentoService.createSeg=async(data)=>{
    try{
        const newSeg= await schema.create({data});
        return newSeg;
    }catch(e){
        console.error("Eror al crear segmento",e);
        throw new Error("Error al crear segmento");
    }
}


segmentoService.updateSeg=async(id,data)=>{
    try {
        const exist= await schema.findByPk(id);
        if(!exist)throw new Error("segmento no existe");

        await exist.update(data);
        return exist;
        
    } catch (e) {
         console.error("Eror al actualizar",e);
        throw new Error("Error al actualizar segmento");
    }
}

segmentoService.getAll=async()=>{
    try {
        const data = await schema.findAll();
        return data;
        
    } catch (error) {
        console.error("Error al obtener segmentos",error);
        throw new Error("Error al obtener segmentos");
    }
}


segmentoService.getById=async(id)=>{
    try {
        const segmento = await schema.findByPk(id);
        if(!segmento) throw new Error("segmento no encontrado");
        return segmento;
        
    } catch (error) {
         console.error("Error al obtener segmento",error);
        throw new Error("Error al obtener segmento");
    }
}

segmentoService.deleteSeg=async(id)=>{
     try {
        const exist = await schema.findByPk(id);
        if(!exist)throw new Error("segmento no existe");

        const deleteSeg=exist.get({plain:true});
        await exist.destroy();
        return deleteSeg;
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al eliminar segmento");
    }
}


module.exports=segmentoService;