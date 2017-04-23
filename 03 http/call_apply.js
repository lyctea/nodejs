//call apply 改变this

var pet = {
    words: '...',
    speak: function (say) {
        console.log(say + ' ' + this.words)
    }
}

//pet.speak('Speak')

var dog = {
    words: 'Wang'
}

pet.speak.call(dog,'Speak')     //改变了this的指向，也就是改变了执行上下文