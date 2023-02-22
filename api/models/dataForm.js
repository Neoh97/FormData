const mongoose = require("mongoose"); 

const formDataScheme = new mongoose.Schema({

    periodo: {
        type: String,
        require: true
    },
    sedeJornada: {
        type: String,
        require: true,
    },
    programa: {
        type: String,
        require: true,
    },
    nombre1: {
        type: String,
        require: true,
    },
    nombre2:{
        type: String,
        require: true,
    },
    apellido1: {
        type: String,
        require: true,
    },
    apellido2:{
        type: String,
        require: true,
    },
    documento: {
        type: String,
        require: true,
    },
    nIdent:{
        type: String,
        require: true,
    },
    sexo:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true, 
        require: true,
    },
    tel:{
        type: String,
        require: true,
    },
    cel:{
        type: String,
        require: true,
    },
    fecha: {
        type: String,
        require: true,
    },
    direccion:{
        type: String,
        require: true,
    },
    pais:{
        type: String,
        require: true,
    },
    recidencia: {
        type: String,
        require: true,
    },
    barrio:{
        type: String,
        require: true,
    }
    
}); 


module.exports = mongoose.model("formData",  formDataScheme); 