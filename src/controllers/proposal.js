const serviceProposal = require("../services/proposal")


exports.newProposal= async(req,res)=>{
    try {
        const createPro = await serviceProposal.create(req.body);
        res.status(200).json(createPro);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.getAllProposal= async(req,res)=>{
    try {
       const data= await serviceProposal.getAll();
       res.status(200).json(data); 
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.getById=async(req,res)=>{
    try {
        const element= await serviceProposal.findById(req.params.id);
        res.status(200).json(element);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.updateProposal=async(req,res)=>{
    try {
        const elemtChange= await serviceProposal.update(req.params.id,req.body);
        res.status(200).json(elemtChange);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.deleteProposal=async(req,res)=>{
    try {
        const elemetDelete= await serviceProposal.delete(req.params.id);
        res.status(200).json(elemetDelete);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


