const service = require("../services/roleUser");


exports.create=async(req,res) =>{
    try {
        const newData = await service.createRol(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};