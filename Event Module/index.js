const EventEmitter=require("events");
const { emit } = require("process");
const event=new EventEmitter();
//new instance of class

event.on("Hello",()=>{console.log("event called 1")})//defined event

event.on("Hello",()=>{console.log('event called 2')
})

event.emit("Hello")//calling event


event.on("checkpage",(sc,msg)=>{
    console.log(`status code ${sc} meggage ${msg}`)
})
event.emit("checkpage",200,"ok");
//sending status and meaage as argument