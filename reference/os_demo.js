/*
    Understanding the basics of OS Module
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const os = require('os');

//Gets the platform on which the runtime is running
//linux for linux, win32 for windows, darwin for MacOS
console.log(`PLATFORM : ${os.platform()}`);

//Gets CPU architecture (x32,x64) 
console.log(`CPU ARCHITECTURE : ${os.arch()}`);

//Gets available free memory
console.log(`FREE MEMORY : ${os.freemem()} (${100*os.freemem()/os.totalmem()}% of TOTAL MEMORY)`);

//Gets total memory
console.log(`TOTAL MEMORY : ${os.totalmem()}`);

//Gets Home directory
console.log(`HOME DIRECTORY : ${os.homedir()}`);

//Gets total uptime
console.log(`TOTAL UPTIME : ${(os.uptime()/(60*60)).toFixed(3)} HR`);

//Gets CPU information
console.log(os.cpus());