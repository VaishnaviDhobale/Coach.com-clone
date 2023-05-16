
const express = require("express");
const { CartModel } = require("../models/Cart.model");
const { userAuth } = require("../middlewares/userAuth.middleware");

const cartRouter = express.Router();


// Checking user Auth 
// cartRouter.use(userAuth);
// Get cart data 
cartRouter.get("/",async(req,res)=>{
    try{
        const data = await CartModel.find({authorId : req.body.authorId});
        console.log(typeof data.length)
        res.status(200).send({data,totalData : data.length})
    }catch(err){
        res.status(400).send({err});
    }
});

cartRouter.get("/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const data = await CartModel.findById({_id:id});
        console.log(typeof data.length)
        res.status(200).send({data,totalData : data.length})
    }catch(err){
        res.status(400).send({err});
    }
});

// add product into the cart
cartRouter.post("/addCart",async(req,res)=>{
    try{
        const prod = new CartModel(req.body);
        await prod.save();
        res.status(200).send({msg : "Product added to cart"})
    }catch(err){
        res.status(400).send({err});
    }
});


// Delete product
cartRouter.delete("/delete/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await CartModel.findOne({_id : id})
        if(req.body.authorId === user.authorId){
            await CartModel.findByIdAndDelete({_id : id})
            res.status(200).send({msg : "Product deleted from cart"})
        }else{
            res.status(400).send({err : "You are not a authorized person."});
        }
    }catch(err){
        res.status(400).send({err});
    }
});

cartRouter.delete("/deleteAll",async(req,res)=>{
    try{
        const {id} = req.params;
        // const user = await CartModel.findOne({_id : id})
        // if(req.body.authorId === user.authorId){
            await CartModel.deleteMany({})
            res.status(200).send({msg : "You have buy products so your cart is empty now"})
        // }else{
            // res.status(400).send({err : "You are not a authorized person."});
        // }
    }catch(err){
        res.status(400).send({err});
    }
});

cartRouter.patch("/update/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await CartModel.findOne({_id : id})
        if(req.body.authorId === user.authorId){
            await CartModel.findByIdAndUpdate({_id : id},req.body)
            res.status(200).send({msg : "Product updated from cart"})
        }else{
            res.status(400).send({err : "You are not a authorized person."});
        }
    }catch(err){
        res.status(400).send({err});
    }
});



// export 
module.exports = {
    cartRouter
}