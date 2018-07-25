const express = require('express')
const app = express()

let middleWare = (req,res,next) => {
    console.log('I am in Middleware');
    next()
}
app.use(middleWare)

app.get('/',(req,res)=>{
    res.send('This is Me!!')
})

app.listen(5000, ()=> console.log("Server is Running"))