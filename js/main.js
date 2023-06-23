// LOGGING OUTPUT
// alert("Hello World"); // Do not use for debugging.
console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;

// DATA TYPES - String, Number, Boolean, null, undefined
const name = "John";
const age1 = 39;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);
console.log(typeof name);
console.log(typeof age1);

// STRINGS

// Concatenation
console.log("My name is " + name + " and I am " + age1);
// Template literal (better)
console.log(`My name is ${name} and I am ${age1}`);

// String methods & properties
const s = "Hello World";
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split("");

// ARRAYS - Store multiple values in a variable
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apples", "oranges", "pears", "grapes"];
console.log(numbers, fruits);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = "blueberries";

// Add value using push()
fruits.push("strawberries");

// Add to beginning
fruits.unshift("mangos");

// Remove last value
fruits.pop();

// Check if array
console.log(Array.isArray(fruits));

// Get index
console.log(fruits.indexOf("oranges"));

// OBJECT LITERALS
const person = {
  firstName: "Varun",
  age: 29,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "Waghodia Road",
    city: "Vadodara",
    state: "GJ",
  },
};

// Get single value
console.log(person.firstName);

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = "varun.s@uplers.in";

// Array of objects
const todos = [
  {
    id: 1,
    text: "Coffee",
    isComplete: false,
  },
  {
    id: 2,
    text: "Code",
    isComplete: false,
  },
  {
    id: 3,
    text: "Repeat",
    isComplete: true,
  },
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));

// LOOPS

// For
for (let i = 0; i <= 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for (let i = 0; i < todos.length; i++) {
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for (let todo of todos) {
  console.log(todo.text);
}

// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function (todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function (todo) {
  return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function (todo) {
  // Return only todos where id is 1
  return todo.id === 1;
});

// CONDITIONALS

// Simple If/Else Statement
const xx = 30;

if (xx === 10) {
  console.log("x is 10");
} else if (xx > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

// Switch
color = "blue";

switch (color) {
  case "red":
    console.log("color is red");
  case "blue":
    console.log("color is blue");
  default:
    console.log("color is not red or blue");
}

// Ternary operator / Shorthand if
const zz = color === "red" ? 10 : 20;

// FUNCTIONS
function greet(greeting = "Hello", name) {
  if (!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}

// ARROW FUNCTIONS
const greetAr = (greeting = "Hello", name = "There") => `${greeting} ${name}`;
console.log(greet("Hi"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "There";
// ul.lastElementChild.innerHTML = "<h1>Hii</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = 'red';

// EVENTS

// Mouse Event
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById("my-form").style.background = "#ccc";
  // document.querySelector("body").classList.add("bg-dark");
  // ul.lastElementChild.innerHTML = "<h1>Changed</h1>";

  //get data from dummy API using async await
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);

  //load data using forEach
  data.products.forEach(function (product, index) {
    console.log(product.title, index);
    $(".items").append('<li class="item">' + product.title + " </li>");
  });

  // data.products.map((product, index) => {
  //   console.log(product.title);
  //   $(".items").append('<li class="item">' + product.title + " </li>");
  // });

  //.each functoin to access DOM elements
  $(".items li").each(function (index) {
    console.log(this, index);
  });
});
