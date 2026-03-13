const express = require('express');
const sequelize=require('./src/config/db');
require('./src/schemas/Associations');
const routes = require('./src/config/configRoutes');
const app = express();

routes(app);

const initDb = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
        await sequelize.sync({force:false});
        console.log('Modelos sincronizados con la base de datos.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};


if(process.env.NODE_ENV!=='test'){
    initDb().then(()=>{
        app.listen(8086,'0.0.0.0',()=>{
            console.log('Servidor escuchando en el puerto 8086');
        });
    });
}

module.exports=app;
