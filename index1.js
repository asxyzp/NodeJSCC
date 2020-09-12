const {logger,Logger} = require('./logger');

//logger.emit("newTimer",Date.now());

const logger1 = new Logger("message",(data)=>{console.log("CALLED LISTENER : ",data)});
logger1.log("Hello World");