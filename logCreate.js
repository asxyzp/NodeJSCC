/*
    For creating and displaying logs
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
class LogEmitter extends EventEmitter {}
const logEmitter = new LogEmitter();


logEmitter.on('serverStarted',()=>{
    let time = Date.now();
    //Checks whether log/log.txt exists or not
    //If it doesn't exists then it creates one & adds new log that server has been created
    if(!fs.existsSync(path.join(__dirname,'logs','log.txt'))){
        //Time at which server was created, will be appended to the file
        fs.appendFile(path.join(__dirname,'log.txt'),`SERVER CREATED AT ${time}.\n`,(err)=>{
            if (err){
                throw err;
            }
            console.log(`SERVER CREATED AT ${time}.\n`);
        });
    }
    else{
        //Time at which server was created, will be appended to the file
        fs.appendFile(path.join(__dirname,'log.txt'),`SERVER CREATED AT ${time}.\n`,(err)=>{
            if (err){
                throw err;
            }
            console.log(`SERVER CREATED AT ${time}.\n`);
        });
    }   
});

logEmitter.on('serverFailed',()=>{
    let time = Date.now();
    //Checks whether log/log.txt exists or not
    //If it doesn't exists then it creates one & adds new log that sever failed at starting due to some error
    if(!fs.existsSync(path.join(__dirname,'log.txt'))){
        //Time at which server was created, will be appended to the file
        fs.appendFile(path.join(__dirname,'logs','log.txt'),`SERVER FAILED AT ${time}.\n`,(err)=>{
            if (err){
                throw err;
            }
            console.log(`SERVER FAILED AT ${time}.\n`);
        });
    }
    else{
        //Time at which server was created, will be appended to the file
        fs.appendFile(path.join(__dirname,'log.txt'),`SERVER FAILED AT ${time}.\n`,(err)=>{
            if (err){
                throw err;
            }
            console.log(`SERVER FAILED AT ${time}.\n`);
        });
    }
});

logEmitter.on("request",(url)=>{
    fs.appendFile(path.join(__dirname,'log.txt'),`URL REQUESTED : ${url}.\n`,(err)=>{
        if (err){
            throw err;
        }
        console.log(`URL REQUESTED : ${url}`);
    });
});

module.exports = logEmitter;