const express = require("express");
const route = new express.Router();
const Orders = require("../models/ordermodel");
const stripe = require("stripe")(
  "sk_test_51KRJxfSCNtwZV5JxWUCpKqEDjDyUDJfLD5RagUvAf68LOepYDXTV9y6BtLw380JuWwzupBQbUGI6gu2r0Ayys9Ac00ZmqMcaU1"
);
const { v4: uuidv4 } = require("uuid");
const { findOne } = require("../models/ordermodel");

route.post("/placeorder", async (req, res) => {
  const { subtotal, token, cartItems, currentUser } = req.body;
  try {

     const customer =await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
   /*  const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 2, 
        exp_year: 2023,
        cvc: '314',
      },
    }); */

    
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: subtotal * 100,
        customer: customer.id,
        currency: "inr",
        receipt_email: token.email,
        confirm:true,
        payment_method_types: ["card"],
        payment_method:token.card.id
       /*  shipping:{
          name:token.card.name,
          address:{
            country:token.card.address_country
        } */
        
      },{
        idempotencyKey :uuidv4()
      }
    ); 
    const paymentConfirm = await stripe.paymentIntents.confirm(
      paymentIntent.id,
    );
    if(paymentIntent.status ==="succeeded"){
      res.json({success:true})
    }else if(paymentIntent.status==="requires_action"){
     const order = await new Orders({
      name:currentUser.name,
      email:currentUser.email,
      userid:currentUser._id,
      orderItems:cartItems,
      shippingAddress :{
        street:token.card.address_line1,
        city:token.card.address_city,
        country:token.card.address_country,
        pincode:token.card.address_zip
      },
      orderAmount :subtotal,
      transactionId:token.card.id
     })
     await order.save();
     res.json({massage:"payment success"})
    }else{
      res.json({massage:"payment failed"})
    }
  } catch (err) {
    res.status(400).json({ message: "There is some error in payment." + err });
  }
});

route.post("/getorders",async(req,res)=>{
  const {userid} =req.body;
  try {
    const order = await Orders.find({userid:userid}).sort({_id:-1});
    res.send(order);
  } catch (error) {
    
    res.send(error)
  }
 
});
route.get("/getallorders",async(req,res)=>{
  try {
    const allorders = await Orders.find({});
    res.send(allorders) 
  } catch (error) {
    res.status(400).json({message:error})
    
  }
});

route.post("/orderdeliver",async(req,res)=>{
  const _id = req.body.orderid;
  console.log(_id)
 try {
  const order = await Orders.findOne({_id})
  
  order.isDelivered=true,
  await order.save();
  res.send("Order Delivered successfully")
 } catch (error) {
   res.status(400).json({message:"Error Occured",result:error})
 }
})


module.exports = route;
