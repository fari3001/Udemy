// All objects inherit their properties from their prototype
// Object.prototype -  from object literals
// Person.prototype -  from the constructor

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob)
    // Method - a function inside of an object 
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff)
    //     // getUTCFullYear - The year and specified date according to the universal time
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

// Calculate age - Moving it into the object.prototype
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff)
    // getUTCFullYear - The year and specified date according to the universal time
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name - Moving it into the object.protoype
// Doesn't flood the who function 
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
 this.lastName = newLastName
}

const john = new Person('John', 'Doe', '8-12-90')
const mary = new Person('Mary', 'Johnson', 'March 20 1982')

console.log(mary)
console.log(john.calculateAge())
console.log(mary.getFullName())
mary.getsMarried('Essof')
console.log(mary.getFullName())
// true because we've moved mary to the object.prototype
console.log(mary.hasOwnProperty('firstName'))