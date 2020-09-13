/*
    Generating a random port number between 0 & 65535
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

let generateRandomPortNumber = () =>{
    return Math.floor(Math.random()*(65535-0)+0);
}
module.exports = generateRandomPortNumber();