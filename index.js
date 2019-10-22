require("@babel/register");

//const os  = require('os');
//const fs = require('fs');
const http = require('http');
const mod1 = require('./modules-1');

mod1.sayHello();
mod1.hi();

//console.log(os.hostname());
//console.log(os.arch());
//fs.readFile('test/test.txt','utf-8', function(err, data){
//	if(err){
//		console.log(err)
//	}else{
//		console.log(data);
//	}
//	});

// http.createServer((req, res) => {
//   //req.write('Hello World!'); //write a response to the client
//   if(req.url == '/'){
//     res.writeHead(200, {'Content-type':'text/html'});
//     res.write('Hello');
//   }else{
//     res.writeHead(404, {'Content-type': 'text/html'});
//     res.write('Referrer 404');
//   }
//   res.end(); //end the response
// }).listen(8080);
