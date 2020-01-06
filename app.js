// Alert example
var alertBtn = document.getElementById('forAlert');
alertBtn.addEventListener('click', function() {
  alert('This is just alert.')
});

// Prompt example
var promptBtn = document.getElementById('forPrompt');
promptBtn.addEventListener('click', function() {
  var age = prompt('How old are you?');
  alert('You are ' + age + ' years old!');
});

// Prompt example
var confirmBtn = document.getElementById('forConfirm');
confirmBtn.addEventListener('click', function() {
  var isBoss = confirm("Are you the boss?");
  alert( isBoss ); // true if OK is pressed
});