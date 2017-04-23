var EventEmitter = require('events')

var life = new EventEmitter()
life.setMaxListeners(15);

//addEventListener 添加事件监听
life.on('求安慰',function (who) {
    console.log('给' + who + '倒水');
})

life.on('求安慰',function (who) {
    console.log('给' + who + 'a');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'b');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'c');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'd');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'e');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'e');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'e');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'e');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'e');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'e');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'e');
})
life.on('求安慰',function (who) {
    console.log('给' + who + 'f');
})
life.on('求',function (who) {
    console.log('给' + who + 'f');
})

//发射事件
var result = life.emit('求安慰','汉子')
var result1 = life.emit('求s','汉子')

console.log(result)
console.log(result1)

