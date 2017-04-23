function learn(something) {
    console.log(something)
}

function we(callback,something) {
    something += ' is cool'
    callback(something)      //处理完的数据，在调用函数
}

we(learn,'Nodejs')

we(function (something) {
    console.log(something)
},'Jade')