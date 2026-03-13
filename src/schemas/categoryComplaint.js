const {DataTypes}= require("sequelize")
const sequelize=require('../config/db');
const {v4:uuidv4}=require("uuid");


const categoryComplaintModel=sequelize.define("categoryComplaint",{
    
        idcategory:{
            type:DataTypes.UUID,
            allowNull:false,
            defaultValue:uuidv4,
            primarykey:true
        },
        category_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    
})

module.exports=categoryComplaintModel