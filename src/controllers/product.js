const service = require("../services/product");




exports.create=async(req,res) =>{
    try {
        const newData = await service.createProduct(req.body);
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


exports.deleteProduct=async(req,res)=>{
    try {
         const element=await service.deleteProduct(req.params.id);
                if(!element) return res.status(404).json({error:"product not found"});
                res.status(204).json({"product eliminado:":element});
    } catch (e) {
        res.status(500).json({error:e.message});
    }
}

exports.getOne=async(req,res)=>{
    try {
        const getProduct= await service.getById(req.params.id);
        res.status(200).json(getProduct);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.updateProduct=async(req,res)=>{
    try {
        const updateProduct=await service.updateProduct(req.params.id,req.body);
        res.status(204).json({"Actualizado":updateProduct});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}