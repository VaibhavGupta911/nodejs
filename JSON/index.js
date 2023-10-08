const fs=require("fs")
const bio={//js object
    name:"Vaibhav",
    age:22,
    channel:"Gupta"
}

console.log(bio)//js obj

const jsonobj=JSON.stringify(bio)
console.log(jsonobj)//json

// fs.writeFile("json1.json",jsonobj,(err)=>{
//     console.log("Done")
// })



// const normalobj=JSON.parse(jsonobj)
// console.log(normalobj)//js obj

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(err)
    console.log(data)
    console.log(JSON.parse(data))
})