var express = require('express')
var port = process.env.PORT || 3000;
var app = express()

app.set('/','views')
app.set('views engine','jade')
app.listen(port)

console.log('immoc started on port 3000')

//index page
app.get('/',function (req,res) {
    res.render('index',{
        title: 'immoc 首页'
    })
})

//detail page
app.get('/movie/:id',function (req,res) {
    res.render('index',{
        title: 'immoc 详情页'
    })
})

//admin page
app.get('/admin/moive',function (req,res) {
    res.render('index',{
        title: 'immoc 后台录入页'
    })
})

//list page
app.get('/list',function (req,res) {
    res.render('index',{
        title: 'immoc 列表页'
    })
})