const roleUser=require("../schemas/roleUsers");
const users=require("../schemas/users");
const products = require("../schemas/product");
const rute = require("./rute"); 
const categoryComplaint= require("./categoryComplaint");
const proposal = require("./proposal");
const customer = require("./customer");
const transaction = require("./transaction");
const purchase= require("./purchase");
const proposalItems= require("./proposalItems");
const complaintModel=require("./complaint")
const followUp= require("./followUp")




module.exports={
    roleUser,
    users,
    products,
    rute,
    categoryComplaint,
    proposal,
    customer,
    transaction,
    purchase,
    proposalItems,
    complaintModel,
    followUp
};