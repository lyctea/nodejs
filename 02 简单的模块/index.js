var kclass = require('./klass')

exports.add = function (kclasses) {
    kclasses.forEach(function (item,index) {
        var _kclass = item;
        var teacherName = item.teacherName;
        var student = item.students;
        kclass.add(teacherName,student);
    })

}