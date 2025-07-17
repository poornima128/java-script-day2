var val=67;
let val2=37;
console.log(val);
console.log("12"==12);
console.log("12"===12);

const prompt = require("prompt-sync")();

let age = prompt("Enter your age:");
let name = prompt("Enter your name:");
console.log(age);
console.log(name);

//////////////////////arrays//////////////////////////////
let fruits=['apple', 'banana','orange'];
let numbers = [14,2,43,64,85];
let mixed = ['hello',42,true,null];

fruits.push('grape');
fruits.unshift('mango');
fruits.pop();
fruits.shift();

console.log(fruits[2]);
console.log(mixed.slice(0,2));

////////////////////////objects////////////////////////////
//Creating objects
let person = {
    name: "Raji",
    age:21,
    city: "New York",
    isStudent:false
};
//Accessing properties
console.log(person.name);
console.log(person["age"]);

//Adding/changing properties
person.job="Developer";
person.age=22;

//Removing properties
delete person.isStudent; 

console.log(person.age)