// REPLACE ELEMENT -------------------------------------

// Creata Element 
const newHeading = document.createElement('h2')

// Add id
newHeading.id = 'task-title'
// new text node
newHeading.appendChild(document.createTextNode('Task List'))

// Get the old heading 
const oldHeading = document.getElementById('task-title')
// Parent
const cardAction = document.querySelector('.card-action')

// Replace 
cardAction.replaceChild(newHeading, oldHeading)

console.log(newHeading)

// REMOVE ELEMENT ----------------------------------------
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul')

// Remove list item 
lis[0].remove() // very simple 

// Remove child element 
list.removeChild(lis[3]) // removes the fourth child (zero based)

// Classes & Attr
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]; // Gets the first nested element  

let val;

// Classes
val = link.className // Give the nested elements class name 
val = link.classList // Gives a dom token list (like an array)
val = link.classList[0] // first class item on the class list 
link.classList.add('test') // add a class to the list 
link.classList.remove('test') // add a class to the list 
// Attribute 
val = link.getAttribute('href') // checks what is inside the href
val = link.setAttribute('href', 'http://google.com') // sets the href link to google .com
link.setAttribute('title', 'Google') // makes a title and sets it to google
val = link.hasAttribute('title') // Checks whether href exists or not (boolean)
link.removeAttribute('title') // to remove the attribute title 

console.log(val)