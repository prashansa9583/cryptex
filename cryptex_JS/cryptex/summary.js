var document,element=null;

console.log("hello world")
// JS
// JavaScript is a powerful programming language that can add interactivity to a website

// VARIABLES

var a = 4;
var b = "hello world";
// vars can be global scoped and function scoped
// vars can be redeclared
// can be accessed before initialization

console.log(greeting1);
var greeting1 = "good morning";
// this is equivalent to

/*
var greeting;
console.log(greeting)
greeting="good morning"
*/

let c = 55;
let d = "this is a web development workshop";
// let and const were introduced in 2015
// let cannot be re-declared

/*
console.log(greeting2)
let greeting2="good afternoon"
*/

// here we have an error as let variables cannot be accessed before initialization

const e = 99;
const f = "this is a completely hands-on workshop";

// const cannot be re-declared

console.log(a, "\n", b, "\n", c, "\n", d, "\n", e, "\n", f);

// DATA TYPES

// number
let g = 6;

// string
let h = "this is a sample string";

// boolean
let i = true;
let k=false;

// array
let array1 = [1, 2, 3, 4, 5];
let array2 = ["hello", "my", "name", "is", "rahul"];
let array3 = [1, 2, 3, "hello", "there"];

// object

let object1 = {
  name: "John",
  age: 30,
  city: "New York",
};
// console.log(object1.name,object1.age,object1.city)

// OPERATORS

// arithmetic
// +,-,/,*,%

// assignment
// =

// equality
// ===

// not
// !

// not equal to
//!==

// CONDITIONALS
condition = true;

if (condition) {
  // code
} else if (condition) {
  // code
} else {
  // code
}

// FUNCTIONS

// regular function
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// arrow function
const add = (a, b) => {
  a + b;
};

// generator function
function* generateNumbers() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

//   input and display

// alert("hello there!")
// prompt("enter your name")



// LOOPS

/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


cons of for loop and why for each loop

for (var number in numbers) {
  console.log(number);
}
*/


// EVENTS AND LISTENERS
/*
Any change that happens in your web page is an event.

Ex:

The user selects, clicks, or hovers the cursor over a certain element.
The user chooses a key on the keyboard.
The user resizes or closes the browser window.
A web page finishes loading.
A form is submitted.
A video is played, paused, or ends.
An error occurs.
*/




// DOM
/* 
The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications. 
*/



document.querySelector()
/* 
The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
*/

document.querySelectorAll()
/* 
The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
*/ 

element.innerHTML
/* 
The Element property innerHTML gets or sets the HTML or XML markup contained within the element. 
*/
 

element.setAttribute()
/*Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.  */


element.getAttribute()
/*The getAttribute() method of the Element interface returns the value of a specified attribute on the element*/


element.addEventListener("event",()=>{
// code
})
/*The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.  */