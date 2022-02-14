const express = require("express");
const Pizza = require("./models/pizzamodel");
const path = require("path");
const cors = require("cors");

const db = require("./db");
const pizzaroute = require("./router/pizzaroute");
const userRoute = require("./router/userRoute")
const orderRoute =require("./router/orderRoute")
const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 8000;

app.use("/api/pizzas",pizzaroute);
app.use("/api/users",userRoute);
app.use("/api/orders",orderRoute)

if(process.env.NODE_ENV==="production"){
    app.use("/",express.static('client/build'));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
}

app.get("/",(req,res)=>{
    res.send("hello")
});
/* app.get("/getpizza",(req,res)=>{
    Pizza.find({ } ,(error,data)=>{
       if(error){
           console.log("error");
       } else{
           res.send(data)
       }
    })
}) */

app.listen(port,()=>{
    console.log(`App is connected at port ${port}`)
})