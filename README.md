# Javascript-Maniac - Day 05
## Interaction: alert, prompt, confirm
Today we'll cover JavaScript language “as is”, without environment-specific tweaks.

As we still be using the browser as our demo environment, so we should know at least a few of its user-interface functions. Today, we'll cover get familiar with the browser functions alert, prompt and confirm.

# alert

syntax:

`alert('Hello');`

This shows a message Hello and pauses script execution until the user presses “OK”.

# prompt

The function `prompt` accepts two arguments:

`result = prompt(title, [default]);`

It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

## title
First Parameter will be the title which is a type of string, which indicating something.

## default
An optional second parameter, the initial value for the input field.
The visitor may type something in the prompt input field and press OK. Or they can cancel the input by pressing Cancel or hitting the `Esc` key.

The call to `prompt` returns the text from the input field or `null` if the input was canceled.

```javascript
  var age = prompt('How old are you?', 100);
  alert(`You are ${age} years old!`); // You are 100 years old!
```

## confirm

The function confirm shows a modal window with a question and two buttons: OK and Cancel.
The result is `true` if OK is pressed and `false` otherwise.

```javascript
  var isBoss = confirm("Are you the boss?");
  alert( isBoss ); // true if OK is pressed
```

<hr />

You can access this code by just going to this Branch `day05-Js-Window-Interaction` and check the code.


I will create branch for every topic i cover.

If you want to access code:

You just have to follow these steps:

1) :octocat: Fork this github repository by typing in command propmt `git clone https://github.com/Mohammad-Quanit/Javascript-Maniac.git`.

2) :octocat: Checkout or switch to branch of topic you want to get code for `git checkout day05-Js-Window-Interaction`

You can suggest anything you want like how it should be or not. 

<b>Contributor/Teacher</b>: [Mohammad Quanit](https://mohammad-quanit.github.io/)

