const mongoose = require("mongoose");

const mongoURL="mongodb+srv://rajneeshsingh:rajneesh123@cluster0.pwwht.mongodb.net/mern-pizza"
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

const db = mongoose.connection
db.on("connected",()=>{
    console.log("Database is connected");
});
db.on("error",()=> console.log("Connection Failed"));

module.exports =mongoose;