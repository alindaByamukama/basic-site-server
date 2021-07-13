// to include the HTTP module in our index.js file
const http = require('http');

// import http from 'http'; (ES6)

// to create a server
// http.createServer(function(req,res){
//     res.write('Hello World'); //write a response to
//     res.end();//end response
// }).listen(8080);

//fs module allows you to work with the file system on your computer
const fs = require('fs');

// http.createServer(function(req,res){
//     fs.readFile('./index.html',function(err,data){
//         res.writeHead(200,{'Content-type':'text/html'})
//         res.write(data)
//         res.end();
//     })
// }).listen(8080);

//URL module splits up a web address into readable parts
const url = require('url');

http.createServer(function(req,res){
    const path = url.parse(req.url,true);
    const filename = path.pathname !== '/'?`.${path.pathname}.html`:'./index.html';

    fs.readFile(filename, function(error, data){
            if(error) {
                fs.readFile('./404.html', function(error,data){
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.write(data);
                    res.end();
                })
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
    })
}).listen(8080);

