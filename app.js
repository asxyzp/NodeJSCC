/*
    How to use imported file
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

//How to import an object from person1 file
const person = require("./person1");
console.log(person.firstName,person.middleName,person.lastName);
console.log(person.college, person.courseName);

//How to import a class from person file
const Person = require("./person");
let Person1 = new Person("Aashish Loknath Panigrahi",24);
console.log(Person1);

//How to import multiple objects from person2 file
const { printMyFirstName,printMyLastName } = require("./person2");
console.log(printMyFirstName("Aashish Loknath Panigrahi"));
console.log(printMyLastName("Aashish Loknath Panigrahi"));