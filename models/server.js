const express = require('express');
var cors = require('cors');
const { dbConnection } = require('../database/config.db');
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/character';
        //Conectar a base de datos
        this.connectDB();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }

    async connectDB(){
        await dbConnection();  
    }

    middlewares(){
        //Una funcion que se ejecuta antes de llamar a un controlador
        //public directory 
        //this.app.use(express.static('public'));
        this.app.use(cors());
        //Reading and parsing of body
        this.app.use(express.json());
        
    }

    routes(){
       this.app.use(this.userPath, require('../routes/characters'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(this.port);
        });
    }
}
module.exports = Server;