const fs=require("fs");
//new file and add fata
fs.writeFileSync('bio.txt','old data ');
//add data to file
fs.appendFileSync('bio.txt','new data')
//read without getting buffer data
console.log(fs.readFileSync('bio.txt').toString())
console.log(fs.readFileSync('bio.txt',"utf-8"))
//rename file
fs.renameSync('bio.txt','mybio.txt')
//delete file and folder
//file
fs.unlinkSync('mybio.txt')
//folder
//fs.rmdirSync('task') 
