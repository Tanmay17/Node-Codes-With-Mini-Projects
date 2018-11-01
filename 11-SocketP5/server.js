const express = require('express')
const socket = require('socket.io')
const app = express()


let server = app.listen(3000)
app.use(express.static('public'))

let io = socket(server)
io.sockets.on('connection', (socket)=>{
    console.log("new Connection "+socket.id)
    //Receiving msg
    socket.on('mouse', (data)=>{
        socket.broadcast.emit('mouse', data)
        console.log(data)
    })
})