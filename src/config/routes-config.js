const express = require("express");

const roleUser = require("../rotes/roleUser");


const configRoutes=(app)=>{
    app.use(express.json());

    app.use("/roleUser",roleUser);

}



module.exports=configRoutes;