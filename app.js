// Adding Operator

var addX = 5;
var addY = 2;
var addZ = addX + addY;
var add = document.getElementById('add');

add.innerText = '1) ddition of ' + addX + ' and ' + addY + ' is ' + addZ;


// Subtract Operator

var subX = 5;
var subY = 2;
var subZ = subX - subY;
var subtract = document.getElementById('subtraction');
subtract.innerText = '2) Subtraction of ' + subX + ' and ' + subY + ' is ' + subZ;


// multiply Operator

var multX = 5;
var multY = 2;
var multZ = multX * multY;
var multiply = document.getElementById('multiplication');
multiply.innerText = '3) Multiplication of ' + multX + ' and ' + multY + ' is ' + multZ;


// exponentiation Operator

var expX = 5;
var expZ = expX ** 2;   // squeare of 5
var exponentiation = document.getElementById('exponentiation');
exponentiation.innerText = '4) Exponentiation of ' + expX + ' is ' + expZ;

// Division Operator

var divX = 10;
var divY = 2;
var divZ = divX / divY;
var division = document.getElementById('division');
division.innerText = '5) Division of ' + divX + ' and ' + divY + ' is ' + divZ;


// Modulus Operator

var modX = 23;
var modY = 7;
var modZ = modX % modY;
var modulus = document.getElementById('modulus');
modulus.innerText = '6) Modulus (Remainder) of ' + modX + ' and ' + modY + ' is ' + modZ;


// Increment Operator

var incX = 23;
incX++;
var incZ = incX;
var increment = document.getElementById('increment');
increment.innerText = '7) Increment of ' + 23 + ' is ' + incZ;


// Decrement Operator

var decX = 23;
decX--;
var decZ = decX;
var decrement = document.getElementById('decrement');
decrement.innerText = '8) Decrement of ' + 23 + ' is ' + decZ;