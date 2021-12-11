const express = require('express')
const cors = require('cors');


class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    //especificación de la ruta public
    this.app.use(express.static('public'));
    
  };

  listen(){
    this.app.listen(this.port,()=>{
      console.log("servidor corriendo en " + this.port);
    })
  }

  
}


module.exports = Server;