// Why do you need a constructor? - To create multiple instance of objects. 

// Person constructor
// Constructors start with a capital 
function Person(firstName, lastName, dob) {
    this.name = name;
    // this.age = age;
    // core object 
    this.birthday = new Date(dob)
    // Method - a function inside of an object 
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff)
        // getUTCFullYear - The year and specified date according to the universal time
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

// console.log(this)
const brad = new Person('Brad', '6-17-1989')
console.log(brad.calculateAge())

// THIS refers to the current instance of the object

// Initialises a new person with variable brad 
// const brad = new Person('Brad', 36);
// const john = new Person('John', 29);
