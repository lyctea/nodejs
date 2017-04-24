var https = require('https')
var fs = require('fs')

var options = {     //启动https服务需要的两个证书
    key : fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pem')
}

https.createServer(options, function (req,res) {
    res.writeHead(200)
    res.end('Hello Imooc')
})
.listen(8090)

