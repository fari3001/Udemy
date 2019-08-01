// Event bubbling - Bubbles up the dom with multiple fires

// document.querySelector('.card-title').addEventListener('click', function() {
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//     console.log('col');
// });

// --------------------------------------------

// Event delegation - Going down instead of up
// Needed to effectively add listeners to multiple items 
// even items that haven't loaded

// THIS ONLY LOCATES THE FIRST LIST ITEM -----
// const delItem = document.querySelector('.delete-item')
// delItem.addEventListener('click', deleteItem)
// -----------------------------------------------

document.body.addEventListener('click', deleteItem)

function deleteItem(e) {
    // need to specify the entire class name even secondary classes
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item')
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete item')
        // because it is nested twice we need to each and every layer
        e.target.parentElement.parentElement.remove()
    }
}