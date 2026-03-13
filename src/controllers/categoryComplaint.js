const service = require("../services/categoryComplaint");




exports.create=async(req,res) =>{
    try {
        const newData = await service.createCategoryComplaint(req.body);
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


exports.deleteCategoryComplaint=async(req,res)=>{
    try {
         const element=await service.deleteCategoryComplaint(req.params.id);
                if(!element) return res.status(404).json({error:"categoryComplaint not found"});
                res.status(204).json({"categoryComplaint eliminado:":element});
    } catch (e) {
        res.status(500).json({error:e.message});
    }
}

exports.getOne=async(req,res)=>{
    try {
        const getCategoryComplaint= await service.getById(req.params.id);
        res.status(200).json(getCategoryComplaint);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.updateCategoryComplaint=async(req,res)=>{
    try {
        const updateCategoryComplaint=await service.updateCategoryComplaint(req.params.id,req.body);
        res.status(204).json({"Actualizado":updateCategoryComplaint});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
