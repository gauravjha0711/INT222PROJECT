const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const bcrypt = require("bcrypt");
const session = require("express-session");

// Session configuration
router.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Signup GET route
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// Signup POST route (with password hashing)
router.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    console.log("New user created:", newUser);

    req.flash("success", "Welcome to Wanderlust!");
    res.redirect("/listings");
  } catch (err) {
    console.error("Signup Error:", err.message);
    req.flash("error", "Signup failed. Try again!");
    res.redirect("/signup");
  }
});

// Login GET route
router.get("/login", (req, res) => {
  res.render("users/login");
});

// Login POST route (with bcrypt compare)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("Email not found");
      req.flash("error", "Incorrect email or password");
      return res.redirect("/login");
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      req.flash("success", "Welcome to Wanderlust!");
      req.session.isLoggedIn = true;
      req.session.userId = user._id;
      req.session.userName = user.username;

      // Owner check
      const adminEmail = "gauravjha0711@gmail.com";
      req.session.owner = (email === adminEmail);

      res.redirect("/listings");
    } else {
      req.flash("error", "Incorrect email or password");
      res.redirect("/login");
    }
  } catch (err) {
    console.error("Login Error:", err);
    req.flash("error", "An error occurred. Please try again.");
    res.redirect("/login");
  }
});

// Logout route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;
