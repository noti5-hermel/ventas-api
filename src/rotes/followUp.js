const express =require("express");
const router = express.Router();
const controller=require("..//controllers/followUp");


router.post("/",controller.newFollow);
router.get("/",controller.Follows);
router.get("/:id",controller.oneFollow);
router.put("/:id",controller.updateFollow);
router.delete("/:id",controller.deleteFollow);





module.exports=router;