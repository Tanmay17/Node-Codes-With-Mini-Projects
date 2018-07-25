const express = require('express')
const bodyparser = require('body-parser')
let app = express()

app.use(bodyparser.urlencoded({ extended: false }))
app.use('/login',express.static(__dirname + '/public'))

app.get('/',(req,res) => {
    res.send('My App')
})

app.post('/login',(req,res) => {
    console.log(req.body);
    res.redirect('/')
})

app.listen(5000,() => {
    console.log('Server is Running')
})