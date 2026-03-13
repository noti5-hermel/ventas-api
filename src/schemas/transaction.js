const {DataTypes}= require("sequelize");
const sequelize=require('../config/db');
const {v4:uuidv4}=require("uuid");
const customer = require("./customer");
const user=require("./users");
const proposal=require("./proposal");



const transactionModel=sequelize.afterDefine("transaction",{
        id:{
                type:DataTypes.UUID,
                allowNull:false,
                primarykey:true,
                defaultValue:uuidv4            
        },
        order_id:{
                type:DataTypes.STRING,
                allowNull:true,
        },
        total:{
                type:DataTypes.DECIMAL(14,2),
                allowNull:true,            
        },
        status:{
                type:DataTypes.ENUM('En Proceso','Generada','Cancelada'),
                defaultValue:'En Proceso',
                allowNull:false
        },
        transaction_date:{
                type:DataTypes.DATE,
                allowNull:false,
                defaultValue:DataTypes.NOW,
                validate:{
                        isDate:true
                }

        },
        delivery_date:{
                 type:DataTypes.DATEONLY,
                allowNull:true,
        },
        user_id:{
                type:DataTypes.UUID,
                references:{
                        model:user,
                        key:'id'
                }
        },
        customer_id:{
                type:DataTypes.UUID,
                references:{
                        model:customer,
                        key:'code'
                }
        },
        proposal_id:{
                type:DataTypes.UUID,
                references:{
                    model:proposal,
                    key:'id'
                }
        }



});


module.exports=transactionModel