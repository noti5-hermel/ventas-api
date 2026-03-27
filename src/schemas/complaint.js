const {DataTypes}= require("sequelize");
const sequelize=require('../config/db');
const {v4:uuidv4}=require("uuid");
const customer = require("./customer");
const category= require("./categoryComplaint");
const user=require("./users");


const complaintModel=sequelize.define("complaint",{
    id:{
                type:DataTypes.UUID,
                allowNull:false,
                primaryKey:true,
                defaultValue:uuidv4
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true

    },
    text:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    complaint_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    customer_id:{
        type:DataTypes.STRING,
        references:{
                        model:customer,
                        key:'code'
                }

    },
    category_id:{
        type:DataTypes.UUID,
        references:{
                        model:category,
                        key:'idcategory'
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

module.exports=complaintModel;