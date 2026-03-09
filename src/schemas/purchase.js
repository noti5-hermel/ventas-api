const {DataTypes}= require("seqielize");
const {v4:uuidv4}= require("uuid")
const transaction = require("./transaction");
const product= require("./product");


const purchaseModel=Sequelize.define("purchase",{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primarykey:true,

    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:true,

    },
    price:{
        type:DataTypes.DECIMAL(14,2),
        allowNull:true
    },
    discount:{
        type:DataTypes.INTEGER,
        allowNull:true,
        validate:{
            max:10,   
        }
    },
    transaction_id:{
        type:DataTypes.UUID,
        references:{
            model:transaction,
            key:'id'
        }
    },
    product_id:{
        type:DataTypes.UUID,
        references:{
            model:product,
            key:'idproduct'
        }

    }

})

module.exports=purchaseModel;