var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': '一起期待下一期的课程',
    'cid': 348
})

var options = {
    hostname: 'www.immoc.com',
    port: 80,
    path: '/course/document',
    method: 'post',
    headers: {}
}

// 请求成功之后执行回调函数，才能取得res值
var req = http.request(options,function (res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.header))
    res.on('data',function (chunk) {        //data获取数据 触发的事件
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })
    res.on('end',function () {
        console.log('评论完毕！')
    })
})


req.on('error',function (e) {
    console.log('Error' + e.message);
})


req.write(postData);
req.end()