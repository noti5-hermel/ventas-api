const {DataTypes}= require("sequelize");
const sequelize=require('../config/db');
const rute = require("./rute");
const { validate } = require("uuid");

const customerModel=sequelize.define("customers",{
    code:{
        type:DataTypes.STRING,
        allowNull:false,
        primarykey:true
    },
    name:{
            type:DataTypes.STRING,
            allowNull:false
    },
    mail:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true,
            }
        },
    address:{
     type:DataTypes.STRING,
     allowNull:true,
    },    
    phone:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    payment_terms:{
         type:DataTypes.INTEGER,
        allowNull:true,
        validate:{
            isIn:[Object.values(payTerms)]
        }
    },
    tax_code:{
        type:DataTypes.INTEGER,
        allowNull:true,
        validate:{
            isIn:[Object.values(taxcode)]
        }
    },
    status:{
         type:DataTypes.ENUM('active','inactive'),
         defaultValue:'active',
         allowNull:false
    },
    rute_id:{
         type:Datatypes.UUID,
        references:{
            model:rute,
            key:'idRute',
        },
        allowNull:true,
    }
    
})

//Condition pay
const payTerms={
    CONTADO:1,
    QUINCE_DIAS:2,
    TREINTA_DIAS:3,
    SESENTA_DIAS:4,
    CUARENTACINCO_DIAS:5,
    SEIS_DIAS:6,
}

//tax code
const taxcode={
 CONSUMIDOR_F:0,
    CREDITO_F:1,
    EXPORTACION:3
}

module.exports=customerModel;