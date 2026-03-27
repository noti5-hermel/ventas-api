const schema = require("../schemas/purchase");

const purchaseService={};


purchaseService.create=async(data)=>{
    try {
        const newElement = await schema.create(data);
       return newElement;
    } catch (error) {
        console.error("Error al crear detalle",error);
        throw new Error("Error al crear detalle");    
    }
}


purchaseService.listAll=async()=>{
    try {
        const list = await schema.findAll();
        return list;
    } catch (error) {
        console.error("Error al crear detalle",error);
        throw new Error("Error al crear detalle");
    }
}

purchaseService.update=async(id,data)=>{
    try {
        const register = await schema.findByPk(id);
        if(!exist)throw new Error("Elemento no encontrado");

        await register.update(data);
        return register;
        
    } catch (error) {  
        console.error("Error al actualizar",error);
        throw new Error("Error al actualizar");
    }
}

purchaseService.ByID=async(id)=>{
    try {
        const register = await schema.findByPk(id);
        if(!register)throw new Error("Elemento no encontrado");
        return register
        
    } catch (error) {
        
        console.error("Error al buscar",error);
        throw new Error("Error al buscar");
    }
}

purchaseService.delete=async(id)=>{
    try {
         const exist = await schema.findByPk(id);
        if(!exist)throw new Error("ruta no existe");

        const deleteE=exist.get({plain:true});
        await exist.destroy();
        return deleteE;
        
    } catch (error) {
        
        console.error("Error al crear detalle",error);
        throw new Error("Error al crear detalle");
    }
}

module.exports = purchaseService;