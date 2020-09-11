/*
    Understanding the basics of file system module
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const fs = require('fs');
const path = require('path');

//Creating a new directory if one doesn't exists
//fs.existsSync(path) checks whether the file or directory exists or not
//fs.mkdir(path,options,callback) creates a new directory
const dirpath = path.join(__dirname,'test');
if(fs.existsSync(dirpath)){
    console.log("FOLDER ALREADY EXISTS!");
}
else{
    fs.mkdir(dirpath,{},(err)=>{
        if (err) throw err;
        console.log('FOLDER CREATED!')
    });
}

//Creating a new file if one doesn't exists
//fs.writeFile(path,'content',callback) overwrites & edits a new file
const filepath = path.join(__dirname,'test','test.js');
if(fs.existsSync(filepath)){
    console.log("FILE ALREADY EXISTS!");
}
else{
    fs.writeFile(filepath,'console.log("Hello, World!");',(err)=>{
        if (err) throw err;
        console.log('FILE CREATED & WRITTEN TO.')
    });
}

//Appending to the existing file
fs.appendFile(path,'content',callback) appends a file
fs.appendFile(
    filepath,
    '\nlet userDetails = {userID:"asxyzp",sessionID:0123456789};',
    (err)=>{
        if (err) throw err;
        console.log("FILE APPENDED!");
    }
);

//Reading the file
fs.readFile(filepath,'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

//Renaming the file
const newFilePath = path.join(__dirname,'test','testing.js');
fs.rename(filepath,newFilePath,(err)=>{
    if(err) throw err;
    console.log("FILE RENAMED");
});