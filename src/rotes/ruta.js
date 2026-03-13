const express=require("express");
const router=express.Router();
const controller=require("../controllers/ruta");


router.get("/",controller.getAll);
router.get("/:id",controller.getOne);
router.post("/",controller.create);
router.put("/:id",controller.updateRuta);
router.delete("/:id",controller.deleteRuta);
