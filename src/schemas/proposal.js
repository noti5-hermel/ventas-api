const {DataTypes, Sequelize} = require("sequelize");
const customer = require("./customer");
const {v4:uuidv4}=require("uuid");

const proposalModel=Sequelize.define("proposal",{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primarykey:true
    },
    status:{
        type:DataTypes.ENUM('active','inactive','defeated'),
            defaultValue:'active',
            allowNull:false

    },
    total:{
        type:DataTypes.NUMERIC(14,2),
        allowNull:true,

    },
    proposal_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    expiry_date:{
        type:DataTypes.DATEONLY,
        allowNull:false,
    },
    customer_id:{
        type:DataTypes.UUID,
        references:{
            model:customer,
            key:'code'
        }
    }
    
});


module.exports=proposalModel;
