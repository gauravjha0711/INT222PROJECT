const express = require("express") ; 
const router = express.Router() ; 
const Listing = require("../models/listing.js") ; 
const methodOverride = require("method-override") ; 
const mongoose = require("mongoose") ; 
const Review = require("../models/review.js") ;
const User = require("../models/user.js") ;  
const session = require("express-session") ; 
const Cart = require("../models/cart.js") ; 
const Order = require("../models/myorders.js") ; 


router.get("/",async(req,res)=>{
    // res.send("It is for you")  ; 
    const allListings =  await Listing.find({}) ; 
    res.render("listings/index.ejs",{listings : allListings}) ; 
});

router.get("/cart",async(req,res)=>{
    // res.send("It's working fine") ; 
    let cart = await Cart.find() ; 
    res.render("listings/cart.ejs",{cart}) ; 
});

router.get("/cart/:id",async(req,res)=>{
    let {id} = req.params ; 
    let listing = await Listing.findById(id) ; 
    console.log(listing.title) ;
    let cart = new Cart({
        title : listing.title ,
        description : listing.description , 
        image : listing.image , 
        price : listing.price , 
        country : listing.country , 
        location : listing.location 
    });
    await cart.save() ; 
    req.flash("success","successfully added to the cart") ; 
    res.redirect(`/listings/${id}`) ; 
})

//for deleting the cart content

router.delete("/cart/:id/delete",async(req,res)=>{
    let {id} = req.params ; 
    let cart = await Cart.findByIdAndDelete(id)  ; 
    // console.log(cart) ; 
    req.flash("success","Successfully removed from the cart") ; 
    res.redirect(`/listings/cart`) ; 
})


//for my orders
// router.get("/myorders/order",async(req,res)=>{
//     let carts = await Cart.find() ; 
//     console.log(carts) ; 
//     await Order.insertMany([carts]) ; 
//     res.send("It's Working") ; 
// })



router.post("/search",async(req,res)=>{
    let search  = req.body.search ; 
    let searchUrl = search.toLowerCase() ; 
    // console.log(searchUrl) ; 
    // console.log(search) ;
    let allListings = await Listing.find({country : search}) ; 
    // console.log(allListings) ; 
    res.render("listings/index.ejs",{listings : allListings} ) ; 
});




router.get("/myorders/order/:id", async (req, res) => {
    let {id} = req.params ; 
    let cart = await Cart.findById(id) ; 
    console.log(cart.title) ; 
    // console.log(cart)  ; 
    let order1 = new Order({
        title : cart.title , 
        description : cart.description , 
        image : cart.image ,
        price : cart.price  , 
        location : cart.location , 
        country : cart.country , 
    })
    await order1.save() ; 
    await Cart.findByIdAndDelete(id) ; 
    // res.send(cart.title) ; 
    res.redirect("/listings/myorders") ;
});


//deleting the route for the order

router.delete("/order/delete",async(req,res)=>{
    let order = await Order.deleteMany() ; 
    console.log(order) ; 
    res.redirect("/listings/myorders") ; 
})

//for myorders
router.get("/myorders",async(req,res)=>{
    let order = await Order.find() ; 
    res.render("listings/myorders.ejs",{order}) ; 
});


router.get("/new",(req,res)=>{
    res.render("listings/new.ejs") ; 
})



  



router.get("/info/users/:id",async(req,res)=>{
    let {id} = req.params; 
    let user = await User.findById(id) ; 
    res.render("listings/user.ejs",{currUser : user}) ;  
});


//Show Route
router.get("/:id",async(req,res)=>{
    let {id} = req.params ; 
    const listing = await Listing.findById(id) .populate("reviews"); 
    // console.log(listing) ; 
    // res.send("Your data is processing") ; 
    res.render("listings/show.ejs",{listing}) ; 
})

//Create Route
router.post("/",async(req,res,next)=>{
    // let {title,description,image,price,country,location} = req.body  ;
    try{
        let newListing = new Listing({
            title : req.body.title ,
            description : req.body.description , 
            price : req.body.price ,
            country : req.body.country , 
            image : req.body.image , 
            location : req.body.location 
        }) ; 
        await newListing.save() ; 
        // console.log(newListing)  ; 
        res.redirect(`/listings`) ; //sending back to listings 
    }catch(err){
        next(err) ; 
    }
});


//to show the users info
router.get("/info/edit/:id",async(req,res)=>{
    let {id} = req.params ; 
    let user = await User.findById(id) ; 
    res.render("listings/useredit.ejs",{currUser : user}) ; 
}) ; 

//for the passowrd
router.get("/info/edit/password/:id",async(req,res)=>{
    let {id} = req.params ; 
    let user = await User.findById(id) ; 
    // res.send("It's working fine")
    res.render("listings/usereditpass.ejs",{currUser : user}) ; 
})

//Edit Route

router.get("/:id/edit",async(req,res)=>{
    let {id} = req.params  ; 
    const listing = await Listing.findById(id) ; 
    // console.log(listing) ; 
    res.render("listings/edit.ejs",{listing}) ; 
})

//edit route for the user username 



router.put("/info/edit/:id",async(req,res)=>{
    try{
    let {id} = req.params ; 
    console.log(id) ; 
    let newUsername = req.body.username ;
    // console.log(newUsername)  ; 
    let password = req.body.password ; 
    // console.log(password) ; 
    let users = await User.findById(id) ; 
    if(password == users.password){
        await User.findByIdAndUpdate(id,{username:newUsername},{runValidators : true , new : true}) ; 
        console.log("It's Done....") ; 
        // res.send("It's Working fine..") ;
        res.redirect(`/listings/info/users/${id}`) ; 
    }else{
        req.flash("error","Incorrect password! Try again!") ; 
        res.redirect(`/listings/info/edit/${id}`)  ; 
    }
   
    }catch(err){
      res.send(`There is an error in the code of the time of the conduct ${err}`) ; 
    }
})

router.put("/info/edit/password/:id",async(req,res)=>{
    let {id} = req.params ; 
    let users = await User.findById(id) ; 
    let pass = req.body.pass ; 
    let password = req.body.password ; 
    let pass1 = req.body.pass1 ; 
    if(password == users.password){
        if(pass == pass1){
            await User.findByIdAndUpdate(id,{password : pass},{runValidators : true}) ; 
            req.flash("success","Password has been changed") ; 
            res.redirect("/listings") ; 
        }else{
            req.flash("error","Both passwords are not matching") ; 
            res.redirect(`/listings/info/edit/password/${id}`)
        }
    }else{
        req.flash("error","Incorrect password! Try again!!") ; 
        res.redirect(`/listings/info/edit/password/${id}`) ; 
    }
})


//Update Route
router.put("/:id",async(req,res)=>{
    let {id} = req.params ; 
    let  newTitle  = req.body.title ; 
    // console.log(newTitle) ; 
    let newDescription  = req.body.description ; 
    // console.log(newDescription) ; 
    let  newPrice  = req.body.price ; 
    // console.log(newPrice) ; 
    let newCountry = req.body.country ; 
    // console.log(newCountry) ; 
    let  newLocation  = req.body.location ; 
    // console.log(newLocation) ; 
    let newImage = req.body.image ; 
    await Listing.findByIdAndUpdate(id,{title : newTitle , description : newDescription , price : newPrice , location : newLocation , country : newCountry , image : newImage},{runValidators : true , new : true}) ; 
    res.redirect(`/listings/${id}`) ; 
}); 
//Delete Route 
router.delete("/:id",async(req,res)=>{
    let {id} = req.params ; 
    const listing = await Listing.findByIdAndDelete(id) ; 
    // console.log(listing) ; 
    res.redirect("/listings") ; 
})

module.exports = router ; 