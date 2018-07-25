const http = require("http")    //include Module http
const hostname = "127.0.0.1"
const port = 5000

http.createServer((req,res)=> { //creting Server
    res.writeHead(200, {"Content-Type":"text/plain"})
    res.end("Hello Everyone!!!")
}).listen(port , hostname, ()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
})