const schema=require("../schemas/users");

const usersService={};


usersService.createUsers=async(data)=>{
    try{
        const newUsers= await schema.create(data);
        return newUsers;
    }catch(e){
        console.error("Error al crear users",e);
        throw new Error("Error al crear users");
    }
}


usersService.updateUsers=async(id,data)=>{
    try {
        const exist= await schema.findByPk(id);
        if(!exist)throw new Error("users no existe");

        await exist.update(data);
        return exist;
        
    } catch (e) {
         console.error("Error al actualizar",e);
        throw new Error("Error al actualizar users");
    }
}

usersService.getAll=async()=>{
    try {
        const data = await schema.findAll();
        return data;
        
    } catch (error) {
        console.error("Error al obtener users",error);
        throw new Error("Error al obtener users");
    }
}


usersService.getById=async(id)=>{
    try {
        const users = await schema.findByPk(id);
        if(!users) throw new Error("users no encontrada");
        return users;
        
    } catch (error) {
         console.error("Error al obtener users",error);
        throw new Error("Error al obtener users");
    }
}

usersService.deleteUsers=async(id)=>{
     try {
        const exist = await schema.findByPk(id);
        if(!exist)throw new Error("users no existe");

        const deleteUsers=exist.get({plain:true});
        await exist.destroy();
        return deleteUsers;
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al eliminar users");
    }
}


module.exports=usersService;
