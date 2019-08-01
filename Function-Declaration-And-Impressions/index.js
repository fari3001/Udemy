// FUNCTION DECLARATION 

// function greet(first = 'Fari', last = 'Essof') { // sets up a default value in case you dont put values into the arguments 
//     return `Hello my name is ${first} ${last}`
// }

// console.log(greet())

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS  - IIFEs
// (function(name){ // anonymous function 
//     return(console.log('hello' + name))
// })('Fari'); // has to have a set of parenthisis 

// Property Methods 
const todo = {
    add: function () {
        console.log('Add todo....')
    },
    edit: function (id) {
        console.log(`to do ${id}`)
    }
};

todo.bam = function () {
    console.log('bam')
}

todo.add()
todo.edit(22);
todo.bam()