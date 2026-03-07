const {DataTypes}= require("sequelize");
const {v4:uuidv4}= require("uuid");

const roleUserModel= Sequelize.define("roleUsers",
    {
        idRole:{
            type:DataTypes.UUID,
            allowNull:false,
            defaultValue:uuidv4,
            primarykey:true
        },
        role_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)


module.exports=roleUserModel;