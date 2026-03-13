const schema=require("../schemas/categoryComplaint");

const categoryComplaintService={};


categoryComplaintService.createCategoryComplaint=async(data)=>{
    try{
        const newCategoryComplaint= await schema.create(data);
        return newCategoryComplaint;
    }catch(e){
        console.error("Error al crear categoryComplaint",e);
        throw new Error("Error al crear categoryComplaint");
    }
}


categoryComplaintService.updateCategoryComplaint=async(id,data)=>{
    try {
        const exist= await schema.findByPk(id);
        if(!exist)throw new Error("categoryComplaint no existe");

        await exist.update(data);
        return exist;
        
    } catch (e) {
         console.error("Error al actualizar",e);
        throw new Error("Error al actualizar categoryComplaint");
    }
}

categoryComplaintService.getAll=async()=>{
    try {
        const data = await schema.findAll();
        return data;
        
    } catch (error) {
        console.error("Error al obtener categoryComplaints",error);
        throw new Error("Error al obtener categoryComplaints");
    }
}


categoryComplaintService.getById=async(id)=>{
    try {
        const categoryComplaint = await schema.findByPk(id);
        if(!categoryComplaint) throw new Error("categoryComplaint no encontrada");
        return categoryComplaint;
        
    } catch (error) {
         console.error("Error al obtener categoryComplaint",error);
        throw new Error("Error al obtener categoryComplaint");
    }
}

categoryComplaintService.deleteCategoryComplaint=async(id)=>{
     try {
        const exist = await schema.findByPk(id);
        if(!exist)throw new Error("categoryComplaint no existe");

        const deleteCategoryComplaint=exist.get({plain:true});
        await exist.destroy();
        return deleteCategoryComplaint;
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al eliminar categoryComplaint");
    }
}


module.exports=categoryComplaintService;
