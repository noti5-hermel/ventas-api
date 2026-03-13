const schema=require("../schemas/product");

const productService={};


productService.createProduct=async(data)=>{
    try{
        const newProduct= await schema.create(data);
        return newProduct;
    }catch(e){
        console.error("Error al crear product",e);
        throw new Error("Error al crear product");
    }
}


productService.updateProduct=async(id,data)=>{
    try {
        const exist= await schema.findByPk(id);
        if(!exist)throw new Error("product no existe");

        await exist.update(data);
        return exist;
        
    } catch (e) {
         console.error("Error al actualizar",e);
        throw new Error("Error al actualizar product");
    }
}

productService.getAll=async()=>{
    try {
        const data = await schema.findAll();
        return data;
        
    } catch (error) {
        console.error("Error al obtener products",error);
        throw new Error("Error al obtener products");
    }
}


productService.getById=async(id)=>{
    try {
        const product = await schema.findByPk(id);
        if(!product) throw new Error("product no encontrada");
        return product;
        
    } catch (error) {
         console.error("Error al obtener product",error);
        throw new Error("Error al obtener product");
    }
}

productService.deleteProduct=async(id)=>{
     try {
        const exist = await schema.findByPk(id);
        if(!exist)throw new Error("product no existe");

        const deleteProduct=exist.get({plain:true});
        await exist.destroy();
        return deleteProduct;
        
    } catch (error) {
         console.error("Error al eliminar ",error);
        throw new Error("Error al eliminar product");
    }
}


module.exports=productService;
