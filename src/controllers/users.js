const service = require("../services/users");




exports.create=async(req,res) =>{
    try {
        const newData = await service.createUsers(req.body);
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


exports.deleteUsers=async(req,res)=>{
    try {
         const element=await service.deleteUsers(req.params.id);
                if(!element) return res.status(404).json({error:"users not found"});
                res.status(204).json({"users eliminado:":element});
    } catch (e) {
        res.status(500).json({error:e.message});
    }
}

exports.getOne=async(req,res)=>{
    try {
        const getUsers= await service.getById(req.params.id);
        res.status(200).json(getUsers);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.updateUsers=async(req,res)=>{
    try {
        const updateUsers=await service.updateUsers(req.params.id,req.body);
        res.status(204).json({"Actualizado":updateUsers});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}