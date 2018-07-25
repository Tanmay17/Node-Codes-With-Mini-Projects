const express = require('express')
const app = express()
const port = 5000

app.get('/', (req,res) => {
    res.send('Hello Everyone!!')
})

app.get('/about', (req,res) => {
    res.send('I am in About Page')
})

app.get('/services/:id/name/:n',(req,res) => {
    res.send(req.params)
    res.send('<ul><li>Gym<li>Food<li>Free WiFi</ul>')
})

app.get('/flightRoute/:from-:to', (req,res) =>{
    res.send(req.params)
})
//Type:GET
//ACCESS: Public
//@Description: used for login
app.get('/ab*cd', (req,res)=>{
    res.send('This is REGEX page')
})

app.get('/me', (req,res)=> {
    res.json({name:'Tanmay',course:'2',balance:'20000'})
})

app.post('/login', (req,res)=>{
    res.status(500).send("login success") //Status
})

app.delete('/del',(req,res) => {
    res.send('Deleted Successfully')
})
app.listen(port, () => console.log(`Server is running at ${port}`) )