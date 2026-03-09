const {DataTypes}= require("sequelize");
const {v4:uuidv4}= require("uuid");
const proposal = require("./associations");
const product= require("./product");


const proposalItemsModel=Sequelize.define("proposal_items",{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primarykey:true,
        defaultValue:uuidv4

    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    price:{
        type:DataTypes.DECIMAL(14,2),
        allowNull:false,

    },
    discount:{


    },
    product_id:{
        type:DataTypes.UUID,
        references:{
            model:product,
            key:'idproduct'
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


module.exports=proposalItemsModel;