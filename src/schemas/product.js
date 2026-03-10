const {DataTypes}= require("sequelize");
const {v4:uuidv4}= require("uuid");
const segmento = require("./segmento");

const productsModel= Sequelize.define("products",
    {
        idproduct:{
            type:DataTypes.STRING,
            allowNull:false,
            primarykey:true
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.DECIMAL(14,2),
            allowNull:false,
            defaultValue:0.0
        },
        unidad:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        empaque:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        status:{
            type:DataTypes.ENUM('active','inactive'),
            defaultValue:'active',
            allowNull:false
        },
        segmento_id:{
            type:DataTypes.UUID,
            references:{
                model:segmento,
                key:'id'
            }
        }
    }
)



module.exports=productsModel;