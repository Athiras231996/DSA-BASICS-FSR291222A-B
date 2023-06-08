// const fs=require('fs')
// console.log("first");
// fs.readFile("text","utf8",(err,data)=>{
//     console.log("second");
// })

// const data=fs.readFileSync("text.txt",{encoding:"utf8"})
// console.log("second")
// console.log("third");


//Create Server



var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    if(req.url=="/test1"){
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
    }
    if(req.url=="/login"){
        res.write("hi");
        res.end();
    }
    // if(req.url=="/json"){
    //     const details=[{"name":"Ann"}]
    //     res.writeHead(200,{'content-Type':'application/JSON'});
    //     res.writeHead(JSON.stringify({stud:details}));
    //     res.end();
    // }
}).listen(8080); //the server object listens on port 8080


var http = require('http');
const { type } = require('os');

// //create a server object:
http.createServer(function (req, res) {
    if(req.url=='/test')
    {
//   res.write('Hello World!'); //write a response to the client
  const det=[{'name':'athira'}];
  res.writeHead(200,{'content-Type':'application/JSON'});
  res.write(JSON.stringify({stud:det}));

  res.end(); 
}
const fs=require("fs")
if(req.url=="/readData"){
fs.readFile("text.txt",'utf8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
res.write("Read operation successful")
res.end()
}
let data="Node.js work asynchronously"
if(req.url=="/writeData"){
    fs.writeFile("text1.txt",data,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    })
    res.write("Write operation successful")
    res.end()
    }

//end the response
}).listen(5000); //the server object listens on port 8080

