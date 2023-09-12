import http,{ServerResponse,IncomingMessage} from "http";
import fs from "fs";
import path from "path";

const port : number = 4000

const server = http.createServer((req:IncomingMessage, res:ServerResponse<IncomingMessage>) =>{

    res.writeHead(200)

    let connect: string = "site/";

    switch(req.url) {
        case "/":
            connect += "home.html";
            res.statusCode = 200;
            break;
        case "/about":
            connect += "about.html";
            res.statusCode = 200;
            break;
        case "/contact":
            connect += "about.html";
            res.statusCode = 200;
            break;
        default:
            connect += "404.html";
            res.statusCode = 404;
            break
    }
    fs.readFile(path.join(__dirname, connect), (error, data)=> {
        if(error) {
            console.log("An error occured", error)
            res.end();
        }else {
            res.write(data);
            res.end();
        }
    })
})

server.listen(port,() => {
    console.log("")
    console.log("Server is listening to port on port", port)
});    
