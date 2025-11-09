const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const bcrypt = require("bcrypt");

const session = require('express-session');


router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));



router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post(
  "/signup",(async (req, res) => {
    try {
      let userName = req.body.username ; 
      let newPassWord = req.body.password ; 
      let newEmail = req.body.email ; 
      let newUser = new User({
        username : userName , 
        email : newEmail , 
        password :  newPassWord , 
      }) ; 
      await newUser.save() ; 
      console.log(newUser) ; 
      req.flash("success","welcome to wanderlust") ; 
      res.redirect("/listings") ; 
    } catch (err) {
      console.log(err.message);
      res.redirect("/signup");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login");
});



router.post("/login",async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({ email: email }); 
    if (!user) {
      console.log("email is not matching");
      req.flash("error", "Incorrect email or password"); 
      res.redirect("/login");
      return; 
    }
    let pas = user.password ; 
    console.log(user.password) ; 
    if(password == pas){
      req.flash("success","Welcome to the wanderlust") ; 
      req.session.isLoggedIn = true;
      req.session.userId = user._id ; 
      req.session.userName = user.username ; 
      let Email = "gauravjha0711@gmail.com"  ; 
      if(email == Email){
        req.session.owner = true ; 
      }else{
        req.session.owner = false ; 
      }
      res.redirect("/listings")  ; 
    }else{
      req.flash("error","Incorrect email or password")   ; 
      res.redirect("/login")  ; 
    }
    console.log(email, password);
  } catch (err) {
    console.error(err);
    req.flash("error", "An error occurred"); 
    res.redirect("/login");
  }
});
















router.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;