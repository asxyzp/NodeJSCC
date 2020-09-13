/*
    Building a HTTP server which dynamically serves content
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

//Importing appropriate modules
const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');
const uuid = require('uuid');
const logEmitter = require('./logCreate');

const randPort = require('./randPort'); //Generates a random port number b/w 0 & 65535
const port = process.env.PORT || randPort;  //Sets the port number

//Creates an HTTP server
const server = http.createServer((req,res)=>{

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