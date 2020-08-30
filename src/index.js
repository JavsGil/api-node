require('dotenv').config({path: process.env.NODE_ENV.startsWith('production') ? '.env.prod' : '.env'});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Setting
app.set('port',process.env.PORT || 3000);
// Database
const { DBService } = require("./database/database_service");

new DBService();

//Midlewares
app.use(express.json());
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Rutes
//app.use(require('./Routes/tareas')); 
app.use("/task", require("./Routes/task"));
//Start serve



function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }
  
  console.log("Hola Soy ",process.env.NAME_SERVER, process.env.NODE_ENV);

app.listen(normalizePort(process.env.PORT || "3000"),()=>{
    console.log('Server on port', app.get('port'), );
    console.log("Hola Soy ",process.env.NAME_SERVER);
});