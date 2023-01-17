const fs = require('fs');

// fs.mkdir('prashant',(err)=> {
//     console.log("folder created");
// });
// fs.writeFile("./prashant/bio.txt", 'My name is prashant',(err)=> {
//     console.log("file is created");
// })

// fs.appendFile("./prashant/bio.txt", " Plz like and share my videos", (err)=> {
//     console.log("file is appended");
// })

// fs.readFile("./prashant/bio.txt","utf-8",(err,data) => {
//     console.log(data);
// })

fs.rename("./prashant/bio.txt","./prashant/mybio.txt",(err)=>{
    console.log("file renamed");
})