const firstName = 'Farhaan';
const lastName = 'Essof'
const age = 29;
const str = "Hello there my name is fari"

let val; 

// append 
val =  'farhaan'
val += 'the boss'

// indexOf()
val = firstName.indexOf('l'); // catches the first instance of the l
val = lastName.lastIndexOf('s'); // catches the last instance of the l

// charAt()
val = firstName.charAt('2'); // the element(letter) at index 2 of the firstName 
// Get last char
val = firstName.charAt(firstName.length - 1) // gives us the last character of the first name 

// substring()
val = firstName.substring(0, 4) // plucks out the letters with index 0 up to 4

// slice()
val = firstName.slice(0, 4) // same as substring 
val = firstName.slice(-3) // starts from the back and takes the last 3 

// split()
val = str.split(' ');  // split into an array based on spaces 

// replace()
val = str.replace('name', 'boss') // changes name to boss in the str variable string 
 
// includes()
val = str.includes('fari') // checks to see if an fari is included in the str. Returns a boolean

console.log(val)

