const service=require("../services/proposalItems");

exports.newItem=async(req,res)=>{
    try {
        const creadeItem=await service.newItem(req.body);
        res.status(200).json(creadeItem);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.getAll=async(req,res)=>{
    try {
        const listData= await service.allItems();

        res.status(200).json(listData);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.getById=async(req,res)=>{
    try {
        const findItem=await service.oneItem(req.params.id);
        res.status(200).json(findItem);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.updateItem=async(req,res)=>{
    try {
        const itemUpdate=await service.updateItem(req.params.id,req.body);
        res.status(200).json(itemUpdate);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.deleteItem=async(req,res)=>{
    try {
        const toDelete=await service.deleteItem(req.params.id);
        res.status(200).json(toDelete);
    } catch (error) {
        res.status(500).json({error:error.message});
    }    
}