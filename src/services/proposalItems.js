const schemaItem = require("../schemas/proposalItems");

const itemService={};

itemService.newItem=async(body)=>{
    try {
        const newItem=await schemaItem.create(body);
        return newItem;
    } catch (error) {
        console.error("Error al crear Item",error);
        throw new Error("Error al crear Item");
    }
}


itemService.allItems=async()=>{
    try {
        const list = await schemaItem.findAll();
        return list;
    } catch (error) {
        console.error("Error al obtener Items",error);
        throw new Error("Error al obtener Items");
    }
}


itemService.oneItem=async(id)=>{
    try {
        const item=await schemaItem.findByPk(id);
        if(!item)throw new Error("No se encontro un registro");
        return item
    } catch (error) {
        console.error("Error al obtener Item",error);
        throw new Error("Error al obtener Item");
    }
}


itemService.updateItem=async(id,body)=>{
    try {
        const item=await schemaItem.findByPk(id);
        if(!item)throw new Error("No se encontro un registro");
        await item.update(body);
        return item;
    } catch (error) {
        console.error("Error al actualizar item",error);
        throw new Error("Error al actualizar item");
    }
}


itemService.deleteItem=async(id)=>{
    try {
        const item=await schemaItem.findByPk(id);
        if(!item)throw new Error("No se encontro un registro");
        await item.destroy();
        return item;
    } catch (error) {
        console.error("Error al eliminar Item",error);
        throw new Error("Error al eliminar Item");
    }
}



module.exports=itemService; 