const complaintService=require("../services/complaint");


exports.newComplaint=async(req,res)=>{
    try {
        const createNew= await complaintService.newComplaint(req.body);
        res.status(201).json(createNew);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.getAll=async(req,res)=>{
    try {
        const list = await complaintService.allComplaints();
        res.status(200).json(list);
        
    } catch (error) {
       res.status(500).json({error:error.message}); 
    }
}

exports.getById=async(req,res)=>{
    try {
        const element= await complaintService.oneComplaint(req.params.id);
        res.status(200).json(element);        
    } catch (error) {
       res.status(500).json({error:error.message}); 
    }
}

exports.updateComplaoint=async(req,res)=>{
    try {
        const elementChange= await complaintService.updateComplaint(req.params.id,req.body);
        res.status(200).json(elementChange);
    } catch (error) {
       res.status(500).json({error:error.message}); 
    }
}


exports.deleteComplaint=async(req,res)=>{
    try {
        const elementDelete= await complaintService.deleteComplaint(req.params.id);
        res.status(200).json(elementDelete);
        
    } catch (error) {
      res.status(500).json({error:error.message});  
    }
}