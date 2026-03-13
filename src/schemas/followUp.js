const {DataTypes}= require("sequelize");
const sequelize=require('../config/db');
const {v4:uuidv4}=require("uuid");
const user = require("./users");
const complaint=require("./complaint");

const followUpModel=sequelize.define("followUp",{
     id:{
                type:DataTypes.UUID,
                allowNull:false,
                primarykey:true,
                defaultValue:uuidv4
    },
    text:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    follow_up_date:{
        type:DataTypes.DATEONLY,
        defaultValue:DataTypes.NOW
    },
    complaint_id:{
        type:DataTypes.UUID,
        references:{
            model:complaint,
            key:'id'
        }
    },
    user_id:{
        type:DataTypes.UUID,
        references:{
            model:user,
            key:'id'
        }
    }
});

module.exports=followUpModel;
