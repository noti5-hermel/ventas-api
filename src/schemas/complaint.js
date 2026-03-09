const {DataTypes, DATE}= require("sequelize");
const {v4:uuidv4}=require("uuid");
const customer = require("./customer");
const category= require("./categoryComplaint");


const complaintModel=Sequelize.define("complaint",{
    id:{
                type:DataTypes.UUID,
                allowNull:false,
                primarykey:true,
                defaultValue:uuidv4
    },
    status:{

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
        type:DataTypes.UUID,
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

    }
});

module.exports=complaintModel;