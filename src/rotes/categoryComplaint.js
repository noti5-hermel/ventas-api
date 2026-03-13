const express=require("express");
const router=express.Router();
const controller=require("../controllers/categoryComplaint");


router.get("/",controller.getAll);
router.get("/:id",controller.getOne);
router.post("/",controller.create);
router.put("/:id",controller.updateCategoryComplaint);
router.delete("/:id",controller.deleteCategoryComplaint);
