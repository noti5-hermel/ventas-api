const {DataTypes}= require("sequelize");
const sequelize=require('../config/db');
const {v4:uuidv4}= require("uuid");

const roleUserModel= sequelize.define("roleUsers",
    {
        idRole:{
            type:DataTypes.UUID,
            allowNull:false,
            defaultValue:uuidv4,
            primaryKey:true
        },
        role_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)


module.exports=roleUserModel;