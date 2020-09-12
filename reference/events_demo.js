/*
    Understanding events module of OS
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/

const EventEmitter = require('events');
class newEmitter extends EventEmitter {}
const aEmitter = new newEmitter();

//Emitters & listeners
aEmitter.on('event',()=>{
    console.log(`A new event has occured.`);
});
aEmitter.emit("event");     //Will emit an event for which there's an appropriate listener
aEmitter.emit("events");    //Will emit an event for which there's no listener

//Emitters & listeners w/ additional parameters being passed on
aEmitter.on('eventWithParameters',(firstName,lastName)=>{
    console.log(`My name is ${firstName} ${lastName}.`);
});
aEmitter.emit('eventWithParameters','Aashish','Panigrahi');
aEmitter.emit('eventWithParameters','Mogo','Mogo');