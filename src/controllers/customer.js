const service = require("../services/customer");




exports.create=async(req,res) =>{
    try {
        const newData = await service.createCustomer(req.body);
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


exports.deleteCustomer=async(req,res)=>{
    try {
         const element=await service.deleteCustomer(req.params.id);
                if(!element) return res.status(404).json({error:"customer not found"});
                res.status(204).json({"customer eliminado:":element});
    } catch (e) {
        res.status(500).json({error:e.message});
    }
}

exports.getOne=async(req,res)=>{
    try {
        const getCustomer= await service.getById(req.params.id);
        res.status(200).json(getCustomer);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.updateCustomer=async(req,res)=>{
    try {
        const updateCustomer=await service.updateCustomer(req.params.id,req.body);
        res.status(204).json({"Actualizado":updateCustomer});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}