const servicePurchase = require("../services/purchase")


exports.createPurchase=async(req,res)=>{
    try {
        const newData= await servicePurchase.create(req.body);
        res.status(201).json(newData);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};


exports.listPurchase=async(req,res)=>{
    try {
        const data= await servicePurchase.listAll();
        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.updatePurchase=async(req,res)=>{
    try {
        const updateElement = await servicePurchase.update(req.params.id,req.body);
        res.status(204).json(updateElement);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.findPurchase=async(req,res)=>{
    try {
        const finded = await servicePurchase(req.params.id);
        res.status(200).json(finded);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.deletePurchase=async(req,res)=>{
    try {
        const element=await servicePurchase.deleteUsers(req.params.id);
                if(!element) return res.status(404).json({error:"compra not found"});
                res.status(204).json({"compra eliminado:":element});
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}