/*
    Making a logger for the web server using EventEmitter
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const EventEmitter = require('events');

//UUID or Universally Unique ID is 128-bit data required for identifying information on computer systems
const uuid = require('uuid');           
class Logger extends EventEmitter {
    log(msg){
        this.emit("MESSAGE : ",{id : uuid.v4(),msg:msg });
    }
}
const logger = new Logger();
logger.on("newTimer",(time)=>{
    const timestamp = {
        timing:time,
        id:uuid.v4()
    };
    console.log(timestamp);
});
module.exports = {logger,Logger};