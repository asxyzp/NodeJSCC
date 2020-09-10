/*
    Exporting a class from one file to another file
    Created by Aashish Loknath Panigrahi
*/
//console.log(__dirname,__filename);

class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greeting(){
        console.log(`My name is ${this.name} & I am ${this.age}yo.`);
    }
}

module.exports = Person;