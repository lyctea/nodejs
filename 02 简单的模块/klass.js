var student = require('./student')
var teacher = require('./teacher')

teacher.add('nodejs')

function add(teachName,students) {
    teacher.add(teachName)
    students.forEach(function (item,index) {
        student.add(item)
    })
}
exports.add = add
/*
* module.exprots 从传统的模块实例修改成其他的
* exprots
* */