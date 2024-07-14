// Achievements:
// 1. Know how to declare variables using var, let, and const.
// 2. Understand the different datat types in JavaScript.JavaScript
// 3. Be able to use the typeof operator to identify the data type of a variable.
// 4. Understand the concept of variable reassignment and the immutability of const variables

//Day 1: Variables and Data Types

//Activity 1: Variable Declaration
//Task 1:
var num1 = 5;
console.log(num1);
//Task 2:
let string1 = "Hello, World";
console.log(string1);

//Activity 2: Constant Declaration
//Task 3:
const bool1 = true;
console.log(bool1);

//Activity 3: Data Types
//Task 4:
var num2 = 3
var string2 = "Don't panic!";
var bool2 = false;
var obj1 = {num2, string2, bool2};
var arr1 = [num2, string2, bool2];
console.log(typeof(num2));
console.log(typeof(string2));
console.log(typeof(bool2));
console.log(typeof(obj1));
console.log(typeof(arr1));

//Activity 4: Reassigning Variables
//Task 5:
let num3 = 3;
console.log(num3);
num3 = 2;
console.log(num3);

//Activity 5: Understanding const
//Task 6:
//const num4 = 1;
//num4 = 6;

//Feature Request
//1. Variable Types Console log: Write a script that declares variables
//of different data types and logs both the value and type of each variable
//to the concsole
var num5 = 9;
console.log(typeof(num5), num5);
var bool3 = true;
console.log(typeof(bool3), bool3);
var string3 = "Hello World, don't panic!";
console.log(typeof(string3), string3);
var arr2 = [num5, bool3, string3];
console.log(typeof(arr2), arr2);
var obj2 = {num5, bool3, string3};
console.log(typeof(obj2), obj2);

//2. Reassignment Demo: Create a script that demonstrates the difference in behavior
//between let and const when it comes to reassignment
let num6 = 9;
num6 = 8;
console.log(num6);

const num7 = 7;
num7 = 5;
console.log(num7);