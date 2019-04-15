


// Ask for a greeting
var greeting = prompt("Enter a greeting: ");

if (greeting === null || greeting === "") {
    alert(returnName + ", It looks like you cancelled the greeting");
} else {
    alert(greeting + ", " + returnName());
}

loadLast = "I really am last.";


