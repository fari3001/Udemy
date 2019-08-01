// Type window in the console to see all the methods you can use

// WINDOW METHODS | OBJECTS | PROPERTIES 
// console.log(123)

// // ALERT -------------------
// window.alert('Hello World')

// PROMPT ----------------------
// const input = prompt();
// alert(input);

// CONFIRM ----------------------
// if(confirm('Are you sure?')){
//     console.log('Yes');
// } else {
//     console.log('No')
// }

// ----------------------- Measurements -----------------------
let val;

// Outer height and width - outside the browser 
val = window.outerHeight
val = window.outerHeight

// Inner height and width - inside the browser
val = window.innerHeight
val = window.innerHeight

// SCROLL POINTS - good for animations upon scroll
val = window.scrollY // how far down you've scrolled 
val = window.scrollX // how far side you've scrolled 

// --------------------------------------------------------------

//  ------------------ WINDOW LOCATION --------------------------
// LOCATION OBJECT 
val = window.location; // Gives all the information about the location including ports etc
val = window.location.hostname; // you can pull information such as the domain name or host name 
val = window.location.port; // Gives the port number 
val = window.location.search; // Gives the search url

// REDIRECT
//  window.location.href = 'http://google.com' // Redirects to Google 

 // RELOAD 
//  window.location.reload()

// HISTORY OBJECT 
val = window.history.go(-2); // Redirects to the page we were on 2 searches ago
val = window.history.length; // Gives us the length of how many searches we've done 

// NAVIGATOR OBJECT - has to do with the browser
val = window.navigator; // Gives us all the information to do with that specific browser




console.log(val)

