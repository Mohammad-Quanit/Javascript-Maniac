// creating variable for changing h1 content by Javascript
// A variable is a temporary storage where the value is saved on memory/ram 

var h1 = document.getElementById('header-1');
var p1 = document.getElementById('para-1');
h1.innerText = "This is Header coming from Javascript.";

// you can do this by using innerHTML
p1.innerHTML = "This is Paragraph coming from Javascript.";