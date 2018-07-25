const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')

//Middleware for body parser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//bring all routes
const auth = require('./routes/api/auth')
const questions = require('./routes/api/questions')
const profile = require('./routes/api/profile')

//mongoDB config
const db = require('./setup/myurl').mongoURL

//Attempt to connect to DB
mongoose.connect(db)
    .then(() => console.log('MongoDB is connected successfully'))
    .catch(err => console.log(err))

//just for testing -> route    
app.get('/',(req,res) => {
    res.send('Hello')
})

app.use('/api/auth',auth)
app.use('/api/questions',questions)
app.use('/api/profile',profile)

app.listen(5000)