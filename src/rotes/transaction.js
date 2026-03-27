const express=require("express");
const router=express.Router();
const controller = require("../controllers/transaction");


router.post("/",controller.createTransaction);
router.get("/",controller.allTransaction);
router.get("/:id",controller.byIdTransaction);
router.put("/:id",controller.updateTransaction);
router.delete("/:id",controller.deleteTransaction);


module.exports=router;