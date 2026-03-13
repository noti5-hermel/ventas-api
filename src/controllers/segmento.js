const service = require("../services/segmento");




exports.create=async(req,res) =>{
    try {
        const newData = await service.createSeg(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

exports.getAll=async(req,res)=>{
    try {
        const data= await service.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.deleteSeg=async(req,res)=>{
    try {
         const element=await service.deleteSeg(req.params.id);
                if(!element) return res.status(404).json({error:"segmento not found"});
                res.status(204).json({"segmento eliminado:":element});
    } catch (e) {
        res.status(500).json({error:e.message});
    }
}

exports.getOne=async(req,res)=>{
    try {
        const getSeg= await service.getById(req.params.id);
        res.status(200).json(getSeg);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.updateSeg=async(req,res)=>{
    try {
        const updateSeg=await service.updateSeg(req.params.id,req.body);
        res.status(204).json({"Actualizado":updateSeg});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
