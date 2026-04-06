const schema = require("../schemas/proposal");

const proposalService={};


proposalService.create = async()=>{
    try {
        const newpRroposal = await schema.create(body);
        return newpRroposal
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al generar proposal");
    }

}

proposalService.getAll = async()=>{
    try {
        const allProposal= await schema.findAll();
        return allProposal;
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al obtener datos");
    }
}
proposalService.findById = async(id)=>{
    try {
        const exist= await schema.findByPk(id);
        if(!exist)throw new Error("No se encontro un registro");
        return exist
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al encontrar proposal");
    }    
}

proposalService.update = async(id,data)=>{
    try {
        const verifyRegister = await schema.findByPk(id);
        if(!verifyRegister)throw new Error("No se encontro un registro");
        await verifyRegister.update(data);
        return verifyRegister;
    } catch (error) {
         console.error("Error al actualizar ",error);
        throw new Error("Error al actualizar");
    }
}

proposalService.delete = async(id)=>{
    try {
        const verifyRegister = await schema.findByPk(id);
        if(!verifyRegister)throw new Error("No se encontro un registro");
        await verifyRegister.destroy();
        return verifyRegister;
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al eliminar proposal");
    }
}




module.exports= proposalService;