// Creating some arrays 
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'helo', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Check if it is an array
val = Array.isArray(numbers); // returns a  boolean

// Insert into an array 
numbers[4] = 100; 

// Find index of value
val = numbers.indexOf(36);

// ------------------------------------ MUTATING ARRAYS -------------------------------------

// Add on to end
numbers.push(250);
// Add on to front 
numbers.shift(120);
//Take off from end 
numbers.pop();
// Take off from front 
numbers.shift();
// Splice values
numbers.splice(1, 3); // splice at start and end values 
// Reverse 
numbers.reverse();

// Concatenate array 
val = numbers.concat(numbers2);

// -------------------------------------------------------------------------------------------
console.log(numbers)
console.log(val);  