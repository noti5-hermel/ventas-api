const roleUser=require("../schemas/roleUsers");
const users=require("../schemas/users");
const segmento=require("./segmento");
const products = require("../schemas/product");
const rute = require("./rute"); 
const categoryComplaint= require("./categoryComplaint");
const proposal = require("./proposal");
const customer = require("./customer");
const transaction = require("./transaction");
const purchase = require("./purchase");
const proposalItems = require("./proposalItems");
const complaint = require("./complaint")
const followUp = require("./followUp")


//roleuser&user
roleUser.hasMany(users,{foreignKey:""});
users.belongsTo(roleUser,{foreignKey:""});

//ruta&user | ruta&customer
rute.hasMany(users,{foreignKey:""});
users.belongsTo(rute,{foreignKey:""});

rute.hasMany(customer,{foreignKey:""});
customer.belongsTo(rute,{foreignKey:""});

//categoryComplaint&complaint
categoryComplaint.hasMany(complaint,{foreignKey:""});
complaint.belongsTo(categoryComplaint,{foreignKey:""});

//complaint&followup | complaint&customer | complaint&fusers
complaint.hasMany(followUp);
followUp.belongsTo(complaint);

complaint.belongsTo(users);
users.hasMany(complaint);

complaint.belongsTo(customer);
customer.hasMany(complaint);

//followup&user
followUp.belongsTo(users);
users.hasMany(followUp),

//user&transaction | customer&transaction | proposal&transaction
users.hasMany(transaction);
transaction.belongsTo(users);

customer.hasMany(transaction);
transaction.belongsTo(customer);

proposal.hasOne(transaction);
transaction.hasOne(proposal);

//product&segmento
segmento.hasMany(products);
products.belongsTo(segmento);

// transaction&purchase | purchase&product | proposalItems&product
transaction.hasMany(purchase);
purchase.belongsTo(transaction);

products.hasMany(purchase);
purchase.belongsTo(products);

proposalItems.belongsTo(products);
products.hasMany(proposalItems);

//proposal&user | proposal&customer | proposal&proposalItem
proposal.belongsTo(users);
users.hasMany(proposal);

proposal.belongsTo(customer);
customer.hasMany(proposal);

proposal.hasMany(proposalItems);
proposalItems.belongsTo(proposal);






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
    followUp,
    segmento
};