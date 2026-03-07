const {DataTypes}= require("sequelize");
const rute = require("./rute");
const { validate } = require("uuid");

const customerModel=Sequelize.define("customers",{
    code:{
        type:DataTypes.STRING,
        allowNull:false,
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
    phone:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    tax_code:{
        type:DataTypes.ENUM('active','inactive'),
            defaultValue:'active',
            allowNull:false
    },
    payment_terms:{
        type:DataTypes.ENUM('active','inactive'),
            defaultValue:'active',
            allowNull:false
    }
})

const payTerms={
    CONTADO:,
    CREDITO:,
    EXPORTACION:3
}

module.exports=customerModel;