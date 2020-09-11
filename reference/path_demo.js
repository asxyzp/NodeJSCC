/*
    Understanding path module
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

//path is a core module
const path = require('path');

console.log(`DIR: ${__filename}`);

//base name gives the file name for the given file
console.log(`BASE FILE NAME : ${path.basename(__filename)}`);

//Directory name gives the difrectory name for the given file
console.log(`DIR NAME : ${path.dirname(__filename)}`);

//Ext name gives the extension of the given file
console.log(`DIR NAME : ${path.extname(__filename)}`);

//parse() parses the path object
console.log(`PATH : ${JSON.stringify(path.parse(__filename))}`);
console.log(`ROOT : ${JSON.stringify(path.parse(__filename).root)}`);
console.log(`DIR : ${JSON.stringify(path.parse(__filename).dir)}`);
console.log(`BASE : ${JSON.stringify(path.parse(__filename).base)}`);
console.log(`NAME : ${JSON.stringify(path.parse(__filename).name)}`);
console.log(`EXT : ${JSON.stringify(path.parse(__filename).ext)}`);

//Joining paths
console.log('NEW PATH : '+path.join(__dirname,'test','abc.html'));