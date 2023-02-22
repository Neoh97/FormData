const cors = require("cors");
const express = require("express"); 
const morgan = require("morgan");
const sendEmail = require("./Meddleware/sendEmail");
const server = express(); 
// const HookContent = require("./hook/contentRangeHook");


server.use(cors()); // manejo de error de origen crusado 
server.use(morgan("tiny")); // historial de peticiones 
server.use(express.json()); //manejo de info en json
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// server.use(require("./hook/contentRangeHook")); 



server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
// app.use(morgan('dev'));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // or `http://localhost:${FRONT}`// update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
    //
server.use("/api/inscription",require("./routers/DataForm")); //uso de rutas 
    //server.use("/api/inscription", sendEmail);
module.exports = server; 
