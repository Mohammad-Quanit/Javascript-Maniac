# Javascript-Maniac - Day 02
## Variables
Variables, are one of the most common & important concept in programming. A variable is basically a temporary storage in your program or app, which is used to store data for utilizing in your app.

As we are learning JavaScript, so <b>JavaScript variables</b> are containers for storing data values.

All <b>JavaScript</b> variables must be identified with unique names. These names are called <b>Identifiers.</b>

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter
* Names can also begin with $ and _ (but we will not use it in this tutorial)
* Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names

Example of Variable in <b>JavaScript</b>: `var x = 'Javascript'`


## Data Types
JavaScript variables can hold numbers like 1234 and text values like "Quanit".

In every programming language, text values are called text strings, which itself is a <b>collection of Character</b>

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

`var pi = 3.14;`  This <b>pi</b> variable is number.
`var person = "M.Quanit";`  This <b>person</b> variable is string.
`var stringPi = '3.14';`  This <b>stringPi</b> variable is string because it's in single qoutes.

### Day - 02 Code Explanation
In this code, i have created html file named `index.html` and javascript file named `app.js`. <br />
I have linked or connected my Javascript file to html by using `<script src="./app.js"></script>`.  <br />
I have created an html element `<h1>` with an id of `header-1` & now i am going to show header from javascript.  <br />
Now in `app.js` file, I have created a variable `var h1 = document.getElementById('header-1');` and get the reference of html header in js. Now i am changing the content of header by js using `h1.innerText = "This is Header coming from Javascript";` <br />

Now what it will do it will change text of header by Javascript using `DOM` api.  <br />
DOM stands from Document Object Model which is basically a tree like structure in your web page for managing HTML Elements.


<hr />

You can access this code by just going to this Branch `day01-Js-Intro` and check the code.


I will create branch for every topic i cover.

If you want to access code:

You just have to follow these steps:

1) :octocat: Fork this github repository by typing in command propmt `git clone https://github.com/Mohammad-Quanit/Javascript-Maniac.git`.

2) :octocat: Checkout or switch to branch of topic you want to get code for `git checkout day01-Js-Intro`

You can suggest anything you want like how it should be or not. 

<b>Contributor/Teacher</b>: [Mohammad Quanit](https://mohammad-quanit.github.io/)

