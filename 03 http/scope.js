//全局变量和全局函数
var gloablVariable = 'This is global variable'

function gloableFunction() {
    var localVariable = 'This is local variable'


    gloablVariable = 'This is changed variable'

    function localFunction() {
        var innerLocalVariable = 'This is inner local variable'
        console.log(gloablVariable)
        console.log(localVariable)
        console.log(innerLocalVariable)
    }
    localFunction()
}

gloableFunction()