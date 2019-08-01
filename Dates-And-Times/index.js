let val;

// ------------------ Documentation available on Mozilla ------------------
const today = new Date(); // initiates the date object
let birthday = new Date('06-17-1989 17:06:09') // month-day-year hour:minute:second
val = today.getMonth(); // get month is zero based so jan is 0
val = today.getDate(); // date
val = today.getDay(); // zero based day of the week. Sunday Monday....
val = today.getHours(); // the hour of the current day
val = today.getDate(); // current date
val = today.getSeconds(); // seconds of the current day
val = today.getTime(); // seconds of the current day

birthday.setMonth(2) // sets the zero based month
birthday.setDate(12) // sets the zero based date
birthday.setFullYear(1989) // sets the year
birthday.setHours(3) // sets the zero based hours

// ------------------------------------------------------------------------ 


console.log(birthday)