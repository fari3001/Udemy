// -------------------- FOR LOOP ------------------------
// for(i = 0;  i < 10; i++) {
//     if(i === 2) { // conditional 
//         console.log(`My favorite number is ${i}`) // logs 2
//         continue; // allows it to continue onto the next iteration 
//     }
//     if(i === 5) {
//         console.log(`My second is ${i}`)
//         break; // stops the loop from going any further 
//     }
//     console.log('number ' + i)

// } 
// -------------------------------------------------------

// WHILE LOOPS - USED WHEN ITS UNCLEAR OF THE WHEN TO END ------------
// let i = 0

// while(i < 10) {
//     console.log('Number ' + i) // outputs 0-9
//     i++ 
// }
// --------------------------------------------------------------------

// DO WHILE - DOES ONCE UNLIKE WHILE  ------------------------- 
// let i = 8

// do {
//     console.log('number '+ i)
//     i++
// } while(i < 10)
 
// ------------------------------------------------------------

//  LOOP THROUGH ARRAY ----------------------------------------

// const cars = ['mazda', 'nissan', 'toyota']
// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i])
// }

// ------------------------------------------------------------

// FOR EACH -- better and cleaner way to loop through an array 

// cars.forEach(function(car, index, array){ // car = element | index = number in the array | array = accesses and outputs the whole array
//     console.log(`${car} : ${index}`);
//     console.log(array)
// });

// ----------------------------------------------------------------
// MAP - goes through each element and returns a new array --------

// const users = [
//     {id:1, name: 'Fari'},
//     {id:2, name: 'Roms'},
//     {id:3, name:'Banner'},
// ];

// const ids = users.map(function(user){
//     return user.id
// })

// -----------------------------------------------------------------
// FOR IN LOOP -----------------------------------------------------

const user = {
    firstName: 'Fari',
    lastName: 'Essof',
    age: 40
}

for(let x in user){
    // console.log(x)
    console.log(x + user[x])
}

// -----------------------------------------------------------------

// console.log(ids)

