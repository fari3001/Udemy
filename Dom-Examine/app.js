let val;

val = document // outputs everything undefined 
val = document.all // outputs the entire html
val = document.all[2] // outputs specified section 
val = document.all.length // Counts all the elements in the dom 
val = document.head // Outputs specified section 
val = document.body // Outputs specified section 
val = document.doctype // Outputs specified section 
val = document.url // Outputs specified section 
val = document.characterSet // Outputs specified section 
val = document.contentType // Outputs specified section 

val = document.forms // Outputs the forms on the page
val = document.forms[1] // Access the form 
val = document.forms[0].id
val = document.forms[0].action
val = document.forms[0].action
val = document.forms[0].method

val = document.links
val = document.links[0]
val = document.links[0].id
val = document.links[0].className
val = document.links[0].classList[0]

val = document.images // gives us all the images 

val = document.scripts // gives us all the script tags that are linked 
val = document.scripts[2].getAttribute('src') // to specify which tags

let scripts = document.scripts;

let scriptsArr = Array.from(scripts)

scriptsArr.forEach(function(script) {
    console.log(script)
})


console.log(val)