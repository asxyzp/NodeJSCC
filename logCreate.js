/*
    For creating and displaying logs
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
class LogEmitter extends EventEmitter {}
const logEmitter = new LogEmitter();

let count = 0;

logEmitter.on('serverStarted',()=>{
    ++count;
    let time = new Date.now();
    //Checks whether log/log.txt exists or not
    //If it doesn't exists then it creates one & adds new log that server has been created
    if(!fs.existsSync(path.join(__dirname,'logs','log.txt'))){
        fs.writeFile(path.join(__dirname,'logs','log.txt'),`${count} : SERVER CREATED AT ${time}.`,(err)=>{
            if (err){
                throw err;
            }
            console.log(`${count} : SERVER CREATED AT ${time}.`);
        });
    }   
});

logEmitter.on('serverFailed',()=>{
    ++count;
    let time = new Date.now();
    //Checks whether log/log.txt exists or not
    //If it doesn't exists then it creates one & adds new log that sever failed at starting due to some error
    if(!fs.existsSync(path.join(__dirname,'logs','log.txt'))){
        fs.writeFile(path.join(__dirname,'logs','log.txt'),`${count} : SERVER FAILED AT ${time}.`,(err)=>{
            if (err){
                throw err;
            }
            console.log(`${count} : SERVER FAILED AT ${time}.`);
        });
    }
});

module.exports = logEmitter;