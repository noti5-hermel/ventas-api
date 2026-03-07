const {DataTypes}= require("sequelize");
const {v4:uuidv4}= require("uuid");

const ruteModel= Sequelize.define("rute",
    {
        idRute:{
            type:DataTypes.UUID,
            allowNull:false,
            defaultValue:uuidv4,
            primarykey:true
        },
        rute_name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)


module.exports=ruteModel;