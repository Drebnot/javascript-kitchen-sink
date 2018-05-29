// Name variable
var myName = "Jesse";
// How many states variable
const states = 50;
// five plus 4 variable
var num9 = (5 + 4);

// Name starts with L
var inputName = "";

if (inputName.charCodeAt(0) > 76) {
    alert("back of the line!");
} else {
    alert("Next!");
}
// Write a function called sayHello that displays an alert that says Hello World!
function sayHello() {
    alert("Hello World!");
}
// Call the sayHello function.
sayHello();

// Write a function called checkAge that takes two arguments: one for a name and one for an age. If the age is less than 21, display an alert that says "Sorry {{{toMarkdown}}}name{{{toMarkdown}}}, you aren't old enough to view this page!"

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

// Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.

let charles = {
    name: "Charles",
    age: 21
};

let abby = {
    name: "Abby",
    age: 27
};
let james = {
    name: "James",
    age: 18
};
let john = {
    name: "John",
    age: 17
};
// Call the checkAge function 4 times with the following people: Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);
// Create an array of your favorite vegetables and name it accordingly.
var veggies = ["potato", "spinach", "avocado", "tomatoe", "kale"];
// Use a loop to display each of your favorite vegetables to the developer console.
for (let i=0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
// Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+.

var friends = [
    {
        name: "Joe",
        age: 20
    },
    {
        name: "Jake",
        age: 30
    },
    {
        name: "Jeff",
        age: 19
    },
    {
        name: "Janice",
        age: 25
    },
    {
        name: "God",
        age: 25
    }
];
// Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.
for (i =0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
// Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
function getLength(word) {
    return word.length;
}
// Call the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.

var world = getLength("Hello World");

// Check the number in the variable from the previous objective. If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.

if (world % 2 === 0) {
    alert("The world is nice and even!");
} else {
    alert("The world is an odd place!");
}
