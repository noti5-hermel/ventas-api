const schemaFollow = require("../schemas/followUp");

const followService={};

followService.newFollow=async(body)=>{
    try {
        const newFollow=await schemaFollow.create(body);
        return newFollow;
    } catch (error) {
        console.error("Error al crear follow",error);
        throw new Error("Error al crear follow");
    }
}


followService.allFollows=async()=>{
    try {
        const list = await schemaFollow.findAll();
        return list;
    } catch (error) {
        console.error("Error al obtener follows",error);
        throw new Error("Error al obtener follows");
    }
}


followService.oneFollow=async(id)=>{
    try {
        const follow=await schemaFollow.findByPk(id);
        if(!follow)throw new Error("No se encontro un registro");
        return follow
    } catch (error) {
        console.error("Error al obtener follow",error);
        throw new Error("Error al obtener follow");
    }
}


followService.updateFollow=async(id,body)=>{
    try {
        const follow=await schemaFollow.findByPk(id);
        if(!follow)throw new Error("No se encontro un registro");
        await follow.update(body);
        return follow;
    } catch (error) {
        console.error("Error al actualizar follow",error);
        throw new Error("Error al actualizar follow");
    }
}


followService.deleteFollow=async(id)=>{
    try {
        const follow=await schemaFollow.findByPk(id);
        if(!follow)throw new Error("No se encontro un registro");
        await follow.destroy();
        return follow;
    } catch (error) {
        console.error("Error al eliminar follow",error);
        throw new Error("Error al eliminar follow");
    }
}



module.exports=followService; 