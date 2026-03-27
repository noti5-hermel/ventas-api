const model = require("../schemas/transaction");

const transactionService={};

transactionService.create=async(data)=>{
    try {
        const newTreansaction = await model.create(data);
        return newTreansaction;
    } catch (error) {
         console.error("Eror al crear transaction",e);
        throw new Error("Error al crear transaction");
    }

}


transactionService.All=async(data)=>{
    try {
        const list = await model.findAll();
        return list;
    } catch (error) {
         console.error("Eror al obtener transactions",e);
        throw new Error("Error al crear transactions");
    }
}

transactionService.byId=async(data)=>{
    try {
        const data= await model.findByPk(data);
        if(!data)throw new Error("transaction inexistente");
        return data;
    } catch (error) {
        console.error("Eror al obtener transaction",e);
            throw new Error("Error al obtener transaction");
    }
}

transactionService.update=async(id,data)=>{
    try {
         const transaction = await model.findByPk(id);
        if(!transaction)throw new Error("transaction inexistente");
        await transaction.update(data);
        return transaction;
    } catch (error) {
        console.error("Eror al actualizar transaction",e);
            throw new Error("Error al actualizar transaction");
    }
}

transactionService.delete=async(data)=>{
        try {
            const exist = await model.findByPk(id);
            if(!exist)throw new Error("segmento no existe");

            const deleteTrans=exist.get({plain:true});
            await exist.destroy();
            return deleteTrans;
            
        } catch (error) {
            console.error("Error al eliminar transaction",e);
                throw new Error("Error al eliminar transaction");
        }
}

