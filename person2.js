/*
    Exporting multiple objects
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

function printMyFirstName(name){
    return `FIRST NAME : ${name.split(' ')[0]}`;
}
function printMyLastName(name){
    return `LAST NAME : ${name.split(' ')[name.split(' ').length-1]}`;
}

module.exports = {printMyFirstName,printMyLastName};