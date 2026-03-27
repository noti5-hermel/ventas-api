const roleUser=require("./roleUsers");
const rute = require("./rute"); 
const users=require("./users");
const customer = require("./customer");
const segmento=require("./segmento");
const products = require("../schemas/product");
const categoryComplaint= require("./categoryComplaint");
const proposal = require("./proposal");
const transaction = require("./transaction");
const purchase = require("./purchase");
const proposalItems = require("./proposalItems");
const complaint = require("./complaint")
const followUp = require("./followUp")



//roleuser&user
roleUser.hasMany(users,{foreignKey:"role_id"});
users.belongsTo(roleUser,{foreignKey:"role_id"});

//ruta&user | ruta&customer
rute.hasMany(users,{foreignKey:"rute_id"});
users.belongsTo(rute,{foreignKey:"rute_id"});

rute.hasMany(customer,{foreignKey:"rute_id"});
customer.belongsTo(rute,{foreignKey:"rute_id"});

//categoryComplaint&complaint
categoryComplaint.hasMany(complaint,{foreignKey:"category_id"});
complaint.belongsTo(categoryComplaint,{foreignKey:"category_id"});

//complaint&followup | complaint&customer | complaint&fusers
complaint.hasMany(followUp,{foreignKey:"complaint_id"});
followUp.belongsTo(complaint,{foreignKey:"complaint_id"});

complaint.belongsTo(users,{foreignKey:"user_id"});
users.hasMany(complaint,{foreignKey:"user_id"});

complaint.belongsTo(customer,{foreignKey:"customer_id"});
customer.hasMany(complaint,{foreignKey:"customer_id"});

//followup&user
followUp.belongsTo(users,{foreignKey:"user_id"});
users.hasMany(followUp,{foreignKey:"user_id"}),

//user&transaction | customer&transaction | proposal&transaction
users.hasMany(transaction,{foreignKey:"user_id"});
transaction.belongsTo(users,{foreignKey:"user_id"});

customer.hasMany(transaction,{foreignKey:"customer_id"});
transaction.belongsTo(customer,{foreignKey:"customer_id"});

proposal.hasOne(transaction,{foreignKey:"proposal_id"});
transaction.hasOne(proposal,{foreignKey:"proposal_id"});

//product&segmento
segmento.hasMany(products,{foreignKey:"segmento_id"});
products.belongsTo(segmento,{foreignKey:"segmento_id "});

// transaction&purchase | purchase&product | proposalItems&product
transaction.hasMany(purchase,{foreignKey:"transaction_id"});
purchase.belongsTo(transaction,{foreignKey:"transaction_id"});

products.hasMany(purchase,{foreignKey:"product_id"});
purchase.belongsTo(products,{foreignKey:"product_id"});

proposalItems.belongsTo(products,{foreignKey:"product_id"});
products.hasMany(proposalItems,{foreignKey:"product_id"});

//proposal&user | proposal&customer | proposal&proposalItem
proposal.belongsTo(users,{foreignKey:"user_id"});
users.hasMany(proposal,{foreignKey:"user_id"});

proposal.belongsTo(customer,{foreignKey:"customer_id"});
customer.hasMany(proposal,{foreignKey:"customer_id"});

proposal.hasMany(proposalItems,{foreignKey:"proposal_id"});
proposalItems.belongsTo(proposal,{foreignKey:"proposal_id"});





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
    complaint,
    followUp,
    segmento
};