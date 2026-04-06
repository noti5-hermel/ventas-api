const schemaComplaint = require("../schemas/complaint");

const complaintService={};

complaintService.newComplaint=async(body)=>{
    try {
        const newComplaint=await schemaComplaint.create(body);
        return newComplaint;
    } catch (error) {
        console.error("Error al crear complaint",error);
        throw new Error("Error al crear complaint");
    }
}


complaintService.allComplaints=async()=>{
    try {
        const list = await schemaComplaint.findAll();
        return list;
    } catch (error) {
        console.error("Error al obtener complaints",error);
        throw new Error("Error al obtener complaints");
    }
}


complaintService.oneComplaint=async(id)=>{
    try {
        const complaint=await schemaComplaint.findByPk(id);
        if(!complaint)throw new Error("No se encontro un registro");
        return complaint
    } catch (error) {
        console.error("Error al obtener complaint",error);
        throw new Error("Error al obtener complaint");
    }
}


complaintService.updateComplaint=async(id,body)=>{
    try {
        const complaint=await schemaComplaint.findByPk(id);
        if(!complaint)throw new Error("No se encontro un registro");
        await complaint.update(body);
        return complaint;
    } catch (error) {
        console.error("Error al actualizar complaint",error);
        throw new Error("Error al actualizar complaint");
    }
}


complaintService.deleteComplaint=async(id)=>{
    try {
        const complaint=await schemaComplaint.findByPk(id);
        if(!complaint)throw new Error("No se encontro un registro");
        await complaint.destroy();
        return complaint;
    } catch (error) {
        console.error("Error al eliminar complaint",error);
        throw new Error("Error al eliminar complaint");
    }
}



module.exports=complaintService; 