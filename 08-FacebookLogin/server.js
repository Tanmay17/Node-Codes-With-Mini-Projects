var express = require('express')
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy  

passport.use(new Strategy({
    clientID : "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/login/facebook/return"
},
    function(accessToken, refreshToken, profile, cb){
        return cb(null, profile)
    }
  )
)

passport.serializeUser(function(user, cb){
    cb(null, user)
})

passport.deserializeUser(function(obj, cb){
    cb(null, obj)
})

//create express app
var app = express()

//set View dir
app.set("views", __dirname+"/views")
app.set("view engine","ejs")

app.use(require('morgan')('combined'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({extended: true}))
app.use(require('express-session')({secret: 'lco app', resave: true, saveUninitialized:true}))

//@route    -    GET    /
//@desc     -    a route to home page
//@access   -    PUBLIC
app.get('/', (req,res)=>{
    res.render('home',{user: req.user})
})

//@route    -    GET    /login
//@desc     -    a route to home page
//@access   -    PUBLIC
app.get('/login',(req,res)=>{
    res.render('login')
})

//@route    -    GET    /login/facebook
//@desc     -    a route to facebook auth
//@access   -    PUBLIC
app.get('/login/facebook', passport.authenticate('facebook'))

//@route    -    GET    /login/facebook/callback
//@desc     -    a route to facebook auth
//@access   -    PUBLIC
app.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

//@route    -    GET    /profile
//@desc     -    a route to profile of user
//@access   -    PRIVATE
app.get('/profile',require('connect-ensure-login').ensureLoggedIn(), (req,res)=>{
    res.render('profile', {user:req.user})
})

app.listen(3000)
