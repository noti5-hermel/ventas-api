const express = require("express");
const router=express.Router();
const controller= require("../controllers/complaint");



router.post("/",controller.newComplaint);
router.get("/",controller.getAll);
router.get("/:id",controller.getById);
router.put("/:id",controller.updateComplaoint);
router.delete("/:id",controller.deleteComplaint);



module.exports=router;