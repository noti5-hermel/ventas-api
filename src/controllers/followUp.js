const serviceFollow= require("../services/followUp");


exports.newFollow = async(req,res)=>{
    try {
        const newData    = await serviceFollow.newFollow(req.body);
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.Follows = async(req,res)=>{
    try {
        const  allFollow   = await serviceFollow.allFollows();
        res.status(200).json(allFollow);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.oneFollow = async(req,res)=>{
    try {
        const  element   = await serviceFollow.oneFollow(req.params.id);
        res.status(200).json(element);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.updateFollow = async(req,res)=>{
    try {
        const change = await serviceFollow.updateFollow(req.params.id,req.body);
        res.status(200).json(change);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.deleteFollow = async(req,res)=>{
    try {
        const deleteF = await serviceFollow.deleteFollow(req.params.id);
        res.status(200).json(deleteF);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}




