/*
    Understanding HTTP module
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const http =  require('http');

//Creating an HTTP sever
const server = http.createServer((request,response)=>{
    //Sending a response when there's a request
    response.write('HELLO, WORLD');
    response.end();
});

server.listen(5050,()=>{
    console.log("SERVER WORKING")
});