const schema=require("../schemas/customer");

const customerService={};


customerService.createCustomer=async(data)=>{
    try{
        const newCustomer= await schema.create(data);
        return newCustomer;
    }catch(e){
        console.error("Error al crear customer",e);
        throw new Error("Error al crear customer");
    }
}


customerService.updateCustomer=async(id,data)=>{
    try {
        const exist= await schema.findByPk(id);
        if(!exist)throw new Error("customer no existe");

        await exist.update(data);
        return exist;
        
    } catch (e) {
         console.error("Error al actualizar",e);
        throw new Error("Error al actualizar customer");
    }
}

customerService.getAll=async()=>{
    try {
        const data = await schema.findAll();
        return data;
        
    } catch (error) {
        console.error("Error al obtener customers",error);
        throw new Error("Error al obtener customers");
    }
}


customerService.getById=async(id)=>{
    try {
        const customer = await schema.findByPk(id);
        if(!customer) throw new Error("customer no encontrada");
        return customer;
        
    } catch (error) {
         console.error("Error al obtener customer",error);
        throw new Error("Error al obtener customer");
    }
}

customerService.deleteCustomer=async(id)=>{
     try {
        const exist = await schema.findByPk(id);
        if(!exist)throw new Error("customer no existe");

        const deleteCustomer=exist.get({plain:true});
        await exist.destroy();
        return deleteCustomer;
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al eliminar customer");
    }
}


module.exports=customerService;
