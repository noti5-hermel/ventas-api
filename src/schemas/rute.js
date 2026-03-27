const {DataTypes}= require("sequelize");
const sequelize=require('../config/db');
const {v4:uuidv4}= require("uuid");

const ruteModel= sequelize.define("rute",
    {
        idRute:{
            type:DataTypes.UUID,
            allowNull:false,
            defaultValue:uuidv4,
            primaryKey:true
        },
        rute_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)


module.exports=ruteModel;