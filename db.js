//const dotenv = require("dotenv")
const mongoose = require("mongoose");

require('dotenv').config({path:"./config.env"});
const mongoURL = process.env.DATABASE;
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

const db = mongoose.connection
db.on("connected",()=>{
    console.log("Database is connected");
});
db.on("error",()=> console.log("Connection Failed"));

module.exports =mongoose;