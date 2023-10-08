const fs=require("fs");
//Syncronous first come first serve
console.log(fs.readFileSync('read.txt','utf-8'))
console.log("Syncronous")

//Asyncronous second line run first coz readfile take time
fs.readFile('read.txt','utf-8',(err,data)=>{console.log(data)})
console.log("Asyncronous")
