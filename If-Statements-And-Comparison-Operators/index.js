const id = '101';


// EQUAL TO
if (id == 101) {
    console.log("Woot") // true 
} else {
    console.log("Nah") // false 
}

if (id != 101) {
    console.log("Wow") // false 
} else {
    console.log("Nah nah") // true
}


// EQUAL TO VALUE AND TYPE 
if (id === 101) {
    console.log("Woot") // false 
} else {
    console.log("Nah") // true 
}


// EQUAL TO VALUE & TYPE 
if (id !== 101) {
    console.log("Woot") // true 
} else {
    console.log("Nah") // false 
}


if (typeof id !== undefined) { // checks to see whether the id variable has been defined
    console.log(`The ID is ${id}`) // if it has print out this
} else {
    console.log('No ID') // if not defined print out this 
}


// LOGICAL OPERATORS 

const name = 'Fari'
const age = 30

if (age > 0 && age < 31) {
    console.log(`${name} is a child`)
}