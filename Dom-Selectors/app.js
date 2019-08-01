// Grab element with the ID of
console.log(document.getElementById('task-title'))

// Get things from the element - such as the id 
console.log(document.getElementById('task-title').id)
console.log(document.getElementsByClassName('test'))

const taskTitle = document.getElementById('task-title') // allows for dryer code by changing all the document get elements to task title

// Edit styling of the element  
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '15px';


// Edit content of the element 
taskTitle.textContent = 'Bam';
taskTitle.innerText = 'Omg';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// Query Selector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red' // Only gets the first one 
document.querySelector('ul li').style.color = 'blue' // Nested elements can be accessed 

document.querySelector('li:last-child').style.color = 'red' // Specified the last element styling
document.querySelector('li:nth-child(3)').style.color = 'yellow' // Specified the third element styling
document.querySelector('li:nth-child(4)').textContent = 'baBAM' // Specified the 4 text content 
document.querySelector('li:nth-child(odd)').style.background = '#ccc' // Will select the first odd list item
document.querySelector('li:nth-child(even)').style.background = '#333' // Will select the first even list item
document.querySelectorAll('li:nth-child(even)').style.background = 'blue' // Will select the first even list item





