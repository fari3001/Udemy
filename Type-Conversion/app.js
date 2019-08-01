let val;

// number to string 
val = String(5) // "5"
val = String(4+4) // "8"

// String to number 
val = Number('5') // 5 

// Parses
val = parseInt('100') // Passes it as an interger. No decimals 
val = parseFloat('100.30') // Passes it as a decimal number

// Type Coercion 
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2
console.log(sum)
console.log(typeof sum)