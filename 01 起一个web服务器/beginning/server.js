var http = require('http');

var server = http.createServer(function (req,res) {      //回掉函数  req请求 res响应
    res.writeHead(200,{'Content-Type':'text/plain'});   //状态吗200 纯文本
    res.end('Hello World\n');
})

server.listen(1337, '127.0.0.1');   //监听端口
console.log('Server running at http://127.0.0.1:1337/');