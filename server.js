const express = require('express');
const cors =require('cors');
require('dotenv').config();
const usersRouter = require('./routes/users')

class Server {
    constructor() {
        this.app = express();  
        this.port = process.env.PORT;      

        // http://localhost:3000/api/v1/users
        this.basePath = '/api/v1';

        this.usersPath = `${this.basePath}/users`;

        this.middlewares();
        this.routes();
    }

middlewares(){
    this.app.use(cors());
    this.app.use(express.json());  
}

routes() {
    this.app.use(this.usersPath, usersRouter);
}

listen() {
    this.app.listen(this.port,() => {
        console.log("Listenig on port " + this.port)
    })

}
}
module.exports = Server;