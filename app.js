// example 1
var num = prompt("Enter a number between 1 to 5.")
num = Number(num)
switch (num) {
  case 1:
    alert( 'You select 1, Too small' );
    break;
  case 2:
    alert( 'You select 2, small' );
    break;
  case 3:
    alert( 'You select 3, Too small' );
    break;
  case 4:
    alert( 'You select 4, Exactly!' );
    break;
  case 5:
    alert( 'You select 5, Too large' );
    break;
  default:
    alert( "I don't know such values" );
}


// example 2   ---- new Date().getDay is for current day
let day = "";
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById('currentDate').innerText = `Today is ${day}`;