const cors = require("cors");
const express = require("express"); 
const morgan = require("morgan");
const sendEmail = require("./Meddleware/sendEmail");
const server = express(); 
// const HookContent = require("./hook/contentRangeHook");


server.use(cors()); // manejo de error de origen crusado 
server.use(morgan("tiny")); // historial de peticiones 
server.use(express.json()); //manejo de info en json
// server.use(require("./hook/contentRangeHook")); 
server.use("/api/inscription", sendEmail);
server.use("/api/inscription", require("./routers/DataForm")); //uso de rutas 


module.exports = server; 
