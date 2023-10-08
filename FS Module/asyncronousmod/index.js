const fs=require('fs');
// fs.writeFile('read.txt',"hello world",
// (err)=>{
//     console.log('completed');
//     console.log(err)
// });

// fs.appendFile("read.txt"," New append",(err)=>{console.log("appended")});

fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data)
})