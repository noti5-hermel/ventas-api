const model = require("../schemas/roleUsers");
const sequelize = require("../config/db");

const roleUser={};


roleUser.createRol=async(data)=>{
    try{
        const newRol= await model.create({data});
        return newRol;
    }catch(e){
        console.error("Eror al crear rol",e);
        throw new Error("Error al crear rol");
    }
}

roleUser.updateRol=async(id,data)=>{
    try {
        const exist= await model.findByPk(id);
        if(!exist)throw new Error("Rol no existe");

        await exist.update(data);
        return exist;
        
    } catch (e) {
         console.error("Eror al actualizar",e);
        throw new Error("Error al actualizar rol");
    }
}

roleUser.getAll=async()=>{
    try {
        const data = await model.findAll();
        return data;
    } catch (error) {
         console.error("Eror al obtener roles",e);
        throw new Error("Error al obtener roles");
    }
}

roleUser.getById=async(id)=>{
    try {
        const rol = await model.findByPk(id);
        return {message:"Rol encontrado",rol};
        
    } catch (error) {
         console.error("Eror al obtener rol",e);
        throw new Error("Error al obtener rol");
    }
}

roleUser.deleteRol=async(id)=>{
    try {
        const exist = await model.findByPk(id);
        if(!exist)throw new Error("Rol no existe");

        const deleteUser=exist.get({plain:true});
        await exist.destroy();
        res.json({"User eliminado":deleteUser});
        
    } catch (error) {
         console.error("Eror al eliminar ",e);
        throw new Error("Error al eliminar rol");
    }
}

module.exports=roleUser;



