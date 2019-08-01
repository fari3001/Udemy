const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

// Click
// clearBtn.addEventListener('click', runEvent)

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent)

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent)

// Mouseup
    // clearBtn.addEventListener('mouseup', runEvent)

// // Mouseenter 
//     card.addEventListener('mouseenter', runEvent)

// // Mouseleave
//     card.addEventListener('mouseleave', runEvent)

// // Mouseover - over the nested elements as well
//     card.addEventListener('mouseover', runEvent)

// // Mouseout - over the nested elements as well 
//     card.addEventListener('mouseout', runEvent)

// Mousemove - movement inside element
        card.addEventListener('mousemove', runEvent)

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`)
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`

}
