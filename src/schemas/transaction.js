const {DataTypes}= require("sequelize");
const {v4:uuidv4}=require("uuid");
const customer = require("./customer");
const user=require("./users");
const proposal=require("./proposal");



const transactionModel=Sequelize.afterDefine("transaction",{
        id:{
            
        },
        order_id:{},
        total:{
            
        },
        status:{

        },
        transaction_date:{

        },
        delivery_date:{

        },



});


module.exports=transactionModel