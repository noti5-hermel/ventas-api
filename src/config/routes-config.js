const express = require("express");

const roleUser = require("../rotes/roleUser");//Prub succes crud 
const categoryComplaint = require("../rotes/categoryComplaint");
const customer = require("../rotes/customer");
const product = require("../rotes/product");
const ruta = require("../rotes/ruta");
const segmento = require("../rotes/segmento");
const users = require("../rotes/users");
const transaction = require("../rotes/transaction");
const purchase = require("../rotes/purchase");
const proposal = require("../rotes/proposal");
const proposalItems = require("../rotes/proposalItems");
const complaint=require("../rotes/complaint");
const followUps=require("../rotes/followUp");


const configRoutes=(app)=>{
    app.use(express.json());

    app.use("/roleUser",roleUser);
    app.use("/categoryCom",categoryComplaint);
    app.use("/customer",customer);
    app.use("/product",product);
    app.use("/ruta",ruta);
    app.use("/segmento",segmento);
    app.use("/users",users);
    app.use("/transaction",transaction);
    app.use("/purchase",purchase);
    app.use("/proposal",proposal);
    app.use("/proposalItems",proposalItems);
    app.use("/complaint",complaint);
    app.use("/follow-ups",followUps);

}



module.exports=configRoutes;