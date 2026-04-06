const express = require("express");
const router = express.Router();
const controller = require("../controllers/proposal");

router.post("/",controller.newProposal);

router.get("/",controller.getAllProposal);

router.get("/:id",controller.getById);

router.put("/:id",controller.updateProposal);

router.delete("/:id",controller.deleteProposal);


module.exports=router;