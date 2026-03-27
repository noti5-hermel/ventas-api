const service = require("../services/transaction");



exports.createTransaction=async(req,res)=>{
    try {
        const newData = await service.createTransaction(req.body);
        res.status(201).json(newData);        
    } catch (error) {
        res.status(500).json({error:error.message});
    };

};

exports.allTransaction=async(req,res)=>{
    try {
        const list = await service.allTransaction();
        res.status(200).json(list);
        
    } catch (error) {
         res.status(500).json({error:error.message});
    }
};

exports.byIdTransaction=async(req,res)=>{
    try {
        const element = await service.byIdTransaction(req.params.id);
        res.status(200).json(element);
    } catch (error) {
         res.status(500).json({error:error.message});
    }
};

exports.updateTransaction=async(req,res)=>{
    try {
        const update = await service.update(req.params.id,req,body)
        res.status(200).json(update);
    } catch (error) {
         res.status(500).json({error:error.message});
    }
};

exports.deleteTransaction=async(req,res)=>{
    try {
        const transactionDrop= await service.deleteTransaction(req.params.id);
        res.status(204).json(transactionDrop);
        
    } catch (error) {
         res.status(500).json({error:error.message});
    }
};