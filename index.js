const http = require("http");
const fs  = require("fs");
const qstr = require("querystring");

const content = `<h1> Hello World </h1> \n<p> This is Pritish Mendhekar</p>`;

fs.writeFile("./index.html", content,  (err) => {
    if (err){
        console.log(err);
    }
    console.log("file writtern sucessfully");
})

const server =  http.createServer((request, response) =>{
    fs.readFile('index.html', function(err, data){
        if(data){
            response.writeHead(200, {'Content-type': 'text/html'})
            response.write(data);
            // response.end()
        }
        else{
            response.writeHead(404)
            response.write("PAGE NOT FOUND")
            response.end()
        }
    })
}
)
server.listen(5000, ()=> console.log("Server is up at 5000"));




// const http = require("http");
// const fs  = require("fs");
// const qstr = require("querystring");

// const data = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>File operations</title>
// </head>
// <body>
// <h1> Hello World </h1>
// <p> This is Pritish Mendhekar</p>
// </body>
// </html>`;

// fs.writeFile("./index.html", data,  (err) => {
//     if (err){
//         console.log(err);
//     }
//     console.log("file writtern sucessfully");
// })

// const server =  http.createServer((request, response) =>{
//     console.log(request.url);

//     // response.end("Hello from request event")
//     const url  = request.url.split("?")[0];
//     const qparams = qstr.parse(request.url.split("?")[1]);

//     if(url == "/"){
//         response.writeHead(200,{"Content-type" : "text/html"})
//         fs.readFile("index.html", (err, data) =>{
//             response.end(data)
//         })
//     }
//     // }else if(url == "/index"){
//     //     response.writeHead(200, {
//     //         "Content-type": "txt/html",
//     //     "Keep-Alive": 100});
//     //     // response.write('<h1>Hello World</h1>')

//     // }
    
// })
// server.listen(5000, ()=> console.log("Server is up at 5000"));



// const express = require("express");
// const app = express();
// const path = require("path");
// const router = express.Router();


// const fs = require("fs")
// const http = require("http")
// const content = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>File operations</title>
// </head>
// <body>
// <h1> Hello World </h1>
// <p> This is Pritish M</p>
// </body>
// </html>`;

// fs.writeFile("./index.html", content,  (err) => {
//     if (err){
//         console.log(err);
//     }
//     console.log("file writtern sucessfully");
// })

// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'));
//     //__dirname : It will resolve to your project folder.
//   });
//   app.use('/', router);
// app.listen(process.env.port || 5000);

// console.log('Running at Port 5000');