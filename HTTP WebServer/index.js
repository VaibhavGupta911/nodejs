const { log } = require("console");
const http=require("http");

const server=http.createServer(
    (req,res)=>{//request and result
        // console,log(req.url)
        if(req.url=="/"){
            console.log("home")
            res.end("home")
        }else if(req.url=="/about"){
            res.end("ABOUT")
        }else{
    res.writeHead(404,{"content-type":'text/html'})
            res.end("<H1>404 not found</H1>")}
        // res.end("Hello this is server")//result
    }
)

server.listen(8000,"127.0.0.1",()=>{
    console.log("listinging to server 8000")
})