const service = require("../services/roleUser");


exports.create=async(req,res) =>{
    try {
        const newData = await service.createRol(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};


exports.getAll=async(req,res)=>{
    try {
        const list =await service.getAll();
        res.status(200).json(list);
    } catch (error) {
         res.status(500).json({error:error.message});
    }
}

exports.deleteItem=async(req,res)=>{
    try {
        const element=await service.deleteRol(req.params.id);
        if(!element) return res.status(404).json({error:"role not found"});
        res.status(204).json({"Rol eliminado:":element});
    } catch (e) {
        res.status(500).json({error:e.message});
    }
}

exports.updateRol=async(req,res)=>{
    try {
        const updateRol=await service.updateRol(req.params.id,req.body);
        res.status(204).json({"Actualizado":updateRol});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.getOne=async(req,res)=>{
    try {
        const getRole= await service.getById(req.params.id);
        res.status(200).json(getRole);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
