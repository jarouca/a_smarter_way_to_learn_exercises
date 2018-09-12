// variables, alerts
var message = "it's a secret to everybody";
alert(message);
var num = 19;
var newNum = num + 200;
var remainder = 45 % 6;
var newerNum = newNum + remainder;
var product = ((2 * 4) * 4) + (3 * 4);
alert(product);
var name = "Tom Bombadil";
var greeting = "Hello, " + name + "!";
alert(greeting);
// prompts
var bluesGuitar = prompt("What's your favorite guitar to play the blues on?", "Gibson ES-335");
// if statements
if (bluesGuitar === "Gibson ES-335") {
  alert("Mine too!");
}
// equality operators
if (ticketNumber !== 1234) {
  alert("Better luck next time.")
}
// if, else, els if statements
var correctAnswer = "everybody";
var answer = prompt("who is it a secret to?");
if (answer === correctAnswer) {
  alert("correct");
}
else {
  alert("wrong!");
}

// conditions with and/or
if ((age > 65 || age < 21) && res === "U.S.") {
  alert("Hello");
}

// nested if statements
if (c === d) {
  if (x=== y) {
    g = h;
  }
  else if (a === b) {
    g = h;
  }
  else {
    e = f;
  }
}
else {
  e = f;
}

// arrays

var cities = ["Boston", "Los Angeles", "Guadalajara", "Juarez"];

// delete last element

cities.pop();

// add elements to array

cities.push("Mexico City", "Quebec City");

// remove element from beginning of arrays

cities.shift();

// add element to beginning of arrays

cities.unshift("New Orleans", "Seattle");

// insert elements into arrays

cities.splice(2, 0, "Porto");

// copy elements from one array into another, leaving original array unchanged

var mexicanCities = cities.slice(2, 3);

// for loops

var cityCheck = prompt("Enter city to check if it is in Mexico.");

for (var i = 0; i < 2; i++) {
  if (cityCheck === mexicanCities[i]) {
    alert("Yes, this city is in Mexico.")
  }
}


// for loop with break, boolean, account for negative search result
var numElements = mexicanCities.length;
var matchFound = false;

for (var i = 0; i < numElements; i++) {
  if (cityCheck === mexicanCities[i]) {
    matchFound = true;
    alert("Yes, this city is in Mexico!");
    break;
  }
}

if (matchFound === false) {
  alert("No, this city is not in Mexico.")
}

var numbers = [1,2,3,4,5,6,7,8,9];
var numElements = numbers.length;

for (var i = 0; i < numElements; i++) {
  if (numbers[i] % 2 === 0) {
    matchFound = true;
    alert("Yes, this number is even.");
    break;
  }
}

if (matchFound === false) {
  alert("No, this number is not even :(")
}

// nested for loops

var firstNames = ["Hulk", "Jake", "Andre", "Hacksaw"];

var lastNames = ["Hogan", "Roberts", "Giant", "Duggan"];

var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; i++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
