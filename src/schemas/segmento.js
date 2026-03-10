const { Sequelize } = require("sequelize");
const {DataTypes} = require("seuqelize");
const {v4:uuidv4}= require("uuid");


const segmentoModel=Sequelize.afterDefine("segmento",{
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