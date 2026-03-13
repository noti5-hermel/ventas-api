
const express=require("express");
const router=express.Router();
const controller=require("../controllers/roleUser");


router.post("/",controller.create);
router.get("'",controller.getAll);
router.put("/:id",controller.updateRol);
router.delete("/:id",controller.deleteItem);
router.get("/:id",controller.getOne);


module.exports=router;