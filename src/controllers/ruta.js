const service = require("../services/ruta");




exports.create=async(req,res) =>{
    try {
        const newData = await service.createRuta(req.body);
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


exports.deleteRuta=async(req,res)=>{
    try {
         const element=await service.deleteRuta(req.params.id);
                if(!element) return res.status(404).json({error:"ruta not found"});
                res.status(204).json({"ruta eliminado:":element});
    } catch (e) {
        res.status(500).json({error:e.message});
    }
}

exports.getOne=async(req,res)=>{
    try {
        const getRuta= await service.getById(req.params.id);
        res.status(200).json(getRuta);
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


exports.updateRuta=async(req,res)=>{
    try {
        const updateRuta=await service.updateRuta(req.params.id,req.body);
        res.status(204).json({"Actualizado":updateRuta});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
