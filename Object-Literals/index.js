const person = {
    firstName: 'Farhaan',
    lastName: 'Essof', 
    age: 30,
    email: 'fari@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Harare', 
        country: 'Zimbabwe'
    }, 
    getBirthYear: function() {
        return 2019 - this.age;
    }

}

let val;

val = person;
//Get specific value
val = person.firstName; // Farhaan
val = person.age; // 30
val = person.hobbies[1]; // sports
val = person.address.country; // Zimbabwe
val = person.getBirthYear(); // 1989

console.log(val)