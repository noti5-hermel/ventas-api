const {DataTypes}= require("sequelize");
const {v4:uuidv4}= require("uuid");

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
        status:{
            type:DataTypes.ENUM('active','inactive'),
            defaultValue:'active',
            allowNull:false
        },
        max_descount:{
            type:DataTypes.INTEGER,
            allowNull:true,
        }
    }
)



module.exports=productsModel;