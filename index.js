/*
    Building a HTTP server which dynamically serves content
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

//Importing appropriate modules
const fs = require('fs');
const path = require('path');
const http = require('http');
const open = require('open');
const logEmitter = require('./logCreate');

const randPort = require('./randPort'); //Generates a random port number b/w 0 & 65535
const port = process.env.PORT || randPort;  //Sets the port number

fs.writeFile(path.join(__dirname,'port.txt'),`${port}`,(err)=>{
    if (err) throw `ERROR WHILE APPENDING TEXT TO port.txt : ${err}.`;
});

//Creates an HTTP server
const server = http.createServer((req,res)=>{

    //Getting the file path & storing it in the file path
    let filePath;
    if(req.url=='/'||req.url=='index.html'){
        filePath = path.join(__dirname,'public','index.html');
    }
    else{
        filePath = path.join(__dirname,'public',req.url);
    }
    
    //Getting the extension of the file from the file path
    let extname = path.extname(filePath);
    
    //Setting the default content type
    let contentType = 'text/html';

    //Switching to a different content type based on extension
    switch(extname){
        case ".js":
            contentType = 'text/javascript';
            break;
        case ".css":
            contentType = 'text/css';
            break;
        case ".json":
            contentType = 'application/json';
            break;
        case ".png":
            contentType = 'image/png';
            break;
        case ".jpg":
            contentType = 'image/jpg';
            break;
    }

    //EMITS A NEW REQUEST
    logEmitter.emit("request",req.url);

    //READS THE FILE
    fs.readFile(filePath,"utf8",(err,data)=>{
        
        //If there's some error
        if(err){

            //ENOENT error code tells that the page cannot be found
            if(err.code==='ENOENT'){
                fs.readFile(path.join(__dirname,'public','404.html'),"utf8",(err,data)=>{
                    res.writeHead(200,{'Content-type':'text/html'});
                    res.end(data);
                });
            }

            //ELSE there will be some kind of server error
            else{
                //Some server error
                res.writeHead(500);
                res.end(`SERVER ERROR : ${err.code}`);
            }
        }
        else{
            res.writeHead(200,{'Content-type':contentType});
            res.end(data);
        }
            
    });
});

//Listening to the reuests on the randomly assigned port
server.listen(port,(error)=>{

    if (error){
        logEmitter.emit('serverFailed');
        throw console.log(`ERROR : ${error}`);
    }
    logEmitter.emit('serverStarted');
    console.log(`SERVER STARTING AT ${port}`);
});


//Opens the file in the browser
fs.readFile(path.join(__dirname,'port.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    (async () => {
        // Opens the url in the default browser
        await open(`http://127.0.0.1:${data}`);
    })();
    console.log(`OPENED IN BROWSER`);
});