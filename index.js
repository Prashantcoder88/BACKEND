const fs = require('fs');

// fs.writeFile("readasync.txt",'Today is awesome day',
// (err)=>{
//     console.log("files is created");

// });

// fs.appendFile("readasync.txt","plz like and share and subs me", (err)=>{
//     console.log("file is done.");
// });
// console.log("task completed");

fs.readFile('readasync.txt',"utf-8",(err,data)=>{
    console.log(data);
})