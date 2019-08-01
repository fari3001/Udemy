// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    
//     console.log('Hello World')
//     e.preventDefault(); // prevents the default link behaviour 
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    // console.log('Clicked')

    let val;

    val = e; // Gives us all the information about the click
    // The most important aspect of the getting those values is the TARGET
    // TARGET - Represents the element this action was performed upon 

    val = e.target
    val = e.target.id
    val = e.target.className 
    val = e.target.classList

    // Upon firing an event - Really powerful
    e.target.innerText = "Hello" // Can change the button wording upon clicking it 

    // Event type
    val = e.type

    // Time stamp 
    val = e.timeStamp // Time stamp of when you clicked on it 

    // Coordinate of event relative to the window
    val = e.clientY; // on the vertical axis
    val = e.clientX; // On the horizontal axis 

    // Coordinates relative to inside the button 
    val = e.offsetY // vertical axis 
    val = e.offsetX // horizontal axis
    

    console.log(val)
}