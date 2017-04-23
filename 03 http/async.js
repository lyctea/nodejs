// //同步模式下被阻塞
// var i = 0
// while (true){
//     i++
// }
//


//异步模式
var c = 0

function printIt() {
    console.log(c)
}

function plus(callback) {
    setTimeout(function () {
        c += 1
        callback(c)
    },1000)

}
plus(printIt)
