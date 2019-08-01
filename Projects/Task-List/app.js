// Define UI Vars 
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


// Load all event listeners
loadEventListeners();
// DOM Load Event
// event that is called right after the event is loaded 
document.addEventListener('DOMContentLoaded', getTasks)

// Load all event listeners
function loadEventListeners() {
    // Add task events
    form.addEventListener('submit', addTask)
    // Remove task event
    taskList.addEventListener('click', removeTask)
    // Clear task event 
    clearBtn.addEventListener('click', clearTasks)
    // Filter tasks event 
    filter.addEventListener('keyup', filterTasks)
}
// Get tasks from LS
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task) {
            // Create li eleememnt
    const li = document.createElement('li')
    // Add class
    li.className = 'collection-item'
    // Create text node and append to li
    li.appendChild(document.createTextNode(task))
    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link)

    // Append li to ul
    taskList.appendChild(li)
    })
}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task')
    }



    // Create li eleememnt
    const li = document.createElement('li')
    // Add class
    li.className = 'collection-item'
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link)

    // Append li to ul
    taskList.appendChild(li)

    // Store in LS
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = ''
    e.preventDefault()
}

// Store Task 
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove task
function removeTask(e) {
        // To specify the "a" tag encapsulating the icon
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log(e.target)
        if(confirm('Are You Sure?')) {
        // gets rid of the entire li
        e.target.parentElement.parentElement.remove()

        // Remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
    
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear Tasks
function clearTasks() {
    // first method to remove tasks 
    // taskList.innerHTML = ''
    
    // faster way to clear tasks
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear from LS
    clearTasksFromLocalStorage()
}

    // Clear tasks from 
function clearTasksFromLocalStorage() {
    
    localStorage.clear()

}

function filterTasks(e) {
    const text = e.target.value.toLowerCase()

    // query selector returns a node list to iterate through
    document.querySelectorAll('.collection-item').forEach(
        function(task) {
            const item = task.firstChild.textContent;

            if(item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block'
            } else {
                task.style.display = 'none'
            }
        }
    )
  }