const http = require ('http');
const url = require('url');
const path = require('path');
const fs = require ('fs');
const { hostname } = require('os');

const port = process.env.PORT || 33333;  //Setting port

const server = http.createServer((req,res)=>{
    //Uncomment the code below to test URL module w/ req.url
    /*
        const urlObj = new URL('http://'+req.url);
        console.log(urlObj.href);
        console.log(urlObj.protocol,urlObj.hostname,urlObj.port,urlObj.pathname,urlObj.searchParams.get('fname'),urlObj.searchParams.get('lname'));
    */
    if(req.url=='/' || req.url=='/index.html'){
        //Reading file & Serving it 
        fs.readFile(path.join(__dirname,'public','index.html'),'utf8',(err,data)=>{
            if (err)
                throw console.error(err);
            //Sets response header
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.url=='/about.html'){
        //Reading file & Serving it 
        fs.readFile(path.join(__dirname,'public','about.html'),'utf8',(err,data)=>{
            if (err)
                throw console.error(err);
            //Sets response header
            res.writeHead(200,{'Content-type':'text/html'});
            res.write(data);
            res.end();
        });
    }
        //Uncomment to send basic HTML tags
        /*
        res.end(`
                 <h1 style="text-align:center;font-family:monospace;">
                     Hello, World!
                 </h1>
                 <p style="text-align:center;font-family:monospace;">Created by Aashish Loknath Panigrahi (@asxyzp)</p>        
         `);
        */
   
});

server.listen(port,()=>{
    console.log("SERVER STARTED WORKING");
});