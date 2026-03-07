const {DataTypes}= require("sequelize");
const {v4:uuidv4}= require("uuid");
const role =require("./roleUsers");
const rute= require("./rute");



const userModel = Sequelize.define("users",{
    id:{
          type:DataTypes.UUID,
          allowNull:false,
          defaultValue:uuidv4,
          primarykey:true

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    state:{
        type:DataTypes.ENUM('active','inactive'),
            defaultValue:'active',
            allowNull:false
    },
    role_id:{
        type:DataTypes.UUID,
        references:{
            model:role,
            key:'idRole',
        },
    },
    rute_id:{
        type:Datatypes.UUID,
        references:{
            model:rute,
            key:'idRute',
        }
    }

});


module.export=userModel;