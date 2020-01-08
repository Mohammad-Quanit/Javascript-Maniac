# Javascript-Maniac - Day 06
## Function
Sometimes, we need to perform some action on many occasions, like for adding two values or calculating some other inputs provided by user. So we create `functions` for doing specific tasks.

`Functions` are the main <b>building blocks</b> of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

For creating a function, we use declaration:

```javascript
function add(a, b) {
  return a + b;
}
```

The `function` keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above) and finally the code of the function, also named <b>the function body</b>, between curly braces.

Now we called that function by simple write:

```javascript
function add(a, b) {
  return a + b;
}

add(2, 2);   // return 4
```

or if we console.log it, it will show the result:
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 2))  // print 4;
```

## Local Variables

A variable declared inside a function is only visible inside that function.

For example:

```javascript
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
```

## Outer Variables

A function can access an outer variable as well, for example:

```javascript
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
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

