const express= require("express");
const router=express.Router();
const controller=require("../controllers/proposalItems");

router.post("/",controller.newItem);


router.get("/",controller.getAll);


router.get("/:id",controller.getById);

router.put("/:id",controller.updateItem);

router.delete("/:id",controller.deleteItem);


module.exports=router;