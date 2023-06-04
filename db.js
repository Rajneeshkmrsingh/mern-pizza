
const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.db;
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

const db = mongoose.connection
db.on("connected",()=>{
    console.log("Database is connected");
});
db.on("error",()=> console.log("Connection Failed"));

module.exports =mongoose;