let val; 

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child') // will select the first one

val = listItem
val = list

// Get child nodes - returns a node list 
val = list.childNodes // includes all the line breaks in your html
// Can check the childNode type on a specific index following the list below
val = list.childNodes[0]
val = list.childNodes[0].nodeName // gives the node name
val = list.childNodes[3].nodeType // gives the node type 

// comments are added as nodes 
// 1  =  Element - dom element li
// 2  =  Attribute (deprecated)
// 3  =  Text node
// 8  =  Comment
// 9  =  Document itself
// 10 =  Doctype 

// Get children element nodes - returns an html collection  
val = list.children // most commonly used
val = list.children[0] // first list item 
list.children[1].textContent= "HELLO"
list.children[1].style.color = "red"
list.children[1].style.background = "black"

// Children of children - nested
val = list.children[3].children // gives us the nested tag 

// Specifying which child first child 
val = list.firstChild // gives the first child node
val = list.firstElementChild // gives the first element of the node 

// Specifying which child last child 
val = list.lastChild
val = list.lastElementChild

// Count child elements 
val = list.childElementCount // gives a count of the elements in list

// Get parent node 
val = listItem.parentNode // lists the parent node
val = list.parentElement // list the parent element 
val = list.parentElement.parentElement // list the parent of the parent which is a div 

// Get next sibling 
val = listItem.nextSibling 
val = listItem.nextElementSibling.nextElementSibling // third item 

// Get next sibling 
val = listItem.previousSibling 
val = listItem.previousElementSibling

console.log(val)