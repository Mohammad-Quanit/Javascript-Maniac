var alert = alert('Welcome...');

var addBtn = document.getElementById('add-btn');
var result = document.getElementById('answer');
var a = Number(prompt('Please enter a number?'));
var b = Number(prompt('Please enter 2nd number?'));


addBtn.addEventListener('click', function() {
  result.innerHTML = add(a, b);
});

function add(a, b) {
  return a + b;
}