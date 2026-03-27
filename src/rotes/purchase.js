const express=require("express");
const router=express.Router();
const controller = require("../controllers/purchase");



router.post("/",controller.createPurchase);
router.get("/",controller.listPurchase);
router.get("/:id",controller.findPurchase);
router.put("/:id",controller.updatePurchase);
router.delete("/:id",controller.deletePurchase);


module.exports=router;