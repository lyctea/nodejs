// var pet = {
//     words: '...',
//     speak: function () {
//         console.log(this.words)
//         console.log(this === pet)
//     }
// }
//
// pet.speak()
//
// function pet(words) {
//     this.words = words;
//     console.log(this.words)
//     console.log(this)
// }
//
// pet('...')  //node的顶层gloable调用了node

function Pet(words) {
    this.words= words
    this.speak = function () {
        console.log(this.words)
        console.log(this)
    }
}

var cat = new Pet('Miao')
cat.speak()

//this通常指向函数的拥有者，而这个拥有者就是执行上下文

