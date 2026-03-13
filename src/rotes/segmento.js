
const express=require("express");
const router=express.Router();
const controller=require("../controllers/segmento");


router.get("/",controller.getAll);
router.get("/:id",controller.getOne);
router.post("/",controller.create);
router.put("/:id",controller.updateSeg);
router.delete("/:id",controller.deleteSeg);

module.exports=router;
