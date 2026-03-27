const {DataTypes} = require("sequelize");
const sequelize = require('../config/db');
const {v4:uuidv4}= require("uuid");


const segmentoModel=sequelize.define("segmento",{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
        defaultValue:uuidv4
    },
    tipo:{
        type:DataTypes.STRING,
        allowNull:false
    }
});


module.exports=segmentoModel;