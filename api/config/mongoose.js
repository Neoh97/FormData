const mongoose = require("mongoose"); 
require("dotenv").config(); 




const DB_Uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.izgj2vm.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`

const conn = () => {
    return mongoose.connect(DB_Uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}

mongoose.set('strictQuery', false);

module.exports = conn; 

