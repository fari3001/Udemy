// Collects each li with class of collection item
// const items = document.getElementsByClassName('collection-item') // global scope
// console.log(items)
// console.log(items[0]) // gives us the first list item 
// // the items from className can be accessed like an array with zero indexing 
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// // Same can be achieved with query selectors as coded below
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems) // only inside the ul, not global 

// Getting element by tag name ----------------------

// let lis = document.getElementsByTagName('li') // global scope
// console.log(lis)
// console.log(lis[0]) 
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';


// // Convert HTML collection into array
// lis = Array.from(lis) // Converts to an array 

// lis.reverse(); // reverser the order then

// // Calls this function 
// lis.forEach(function(li, index) {
//     console.log(li.className) // logs each of the class names 
//     li.textContent = `${index}: Hello`  // Changes every li text to Hello
// })


// console.log(lis)

// Query Selector All
const items = document.querySelectorAll('ul.collection li.collection-item')

// Does not need to be converted to an array because it is a node list 
items.forEach(function(item, index) {
        item.textContent = `${index}: Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)') // Selects every odd child
const liEven = document.querySelectorAll('li:nth-child(even)') // Selects every even child 

// Can highlight element either way -------------------

// Turns every odd element
liOdd.forEach(function(li, index) { 
   li.style.background = '#ccc';
});

// Turns every even element - works with an html collection even if it is not an array 
for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';
}

// ----------------------------------------------------


console.log(items)

