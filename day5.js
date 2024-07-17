//Day 5: Functions
//Acheivements:
// 1. Understand and define functions using function declarations, expressions, and arrow functions.
// 2. Use function parameters and default values effectively.
// 3. Create and utilize higher-order functions.
// 4. Apply functions to solve common problems and perform calculations.
// 5. Enhance code reusability and organization using functions.

//Activity 1: Function Declaration
//Task 1:
function evenodd (num) {
    if (num % 2 == 0)
        console.log ("The number is even");
    else
        console.log("The number is odd.");
}
let num = 5;
evenodd(num);

//Task 2:
function square (num) {
    result = num * num;
    console.log("The square of the number is", result);
}
square(num);

//Activity 2: Function Expression
//Task 3:
function max (num1, num2) {
    if (num1 >= num2)
        console.log("The maximum number is", num1);
    else
        console.log("The maximum number is", num2);
}
let num1 = 4;
let num2 = 8;
max (4, 8);

//Task 4:
function concat (str1, str2) {
    let result = str1 + str2;
    console.log(result);
}
str1 = "Hello, world! ";
str2 = "Don't panic!";
concat (str1, str2);
console.log(result);

//Activity 3: Arrow Functions
//Task 5:
let sum = (num1, num2) => {
    console.log (num1 + num2);
}
sum(num1, num2);

sum = (num1, num2) => console.log(num1 + num2);
sum(num1, num2);

//Task 6:
let checkchar = (char, str1) => {
    for (let i = 0; i < str1.length; i++){
        if (str1[i] != char)
            continue;
        else
            return false;
    }
    return true;
}
console.log(checkchar ('a', str1));
console.log(checkchar ('a', str2));

//Activity 4: Function Parameters and Default Values
//Task 7:
function product (num1, num = 6) {
    console.log(num1 * num);
}
product(num1, num);
product(num1);
product(num1, num2);

//Task 8:
function greeting (name, age = 15) {
    console.log ("Hello, " + name + "!" + " Congratulations on turning " + age + ".");
}
greeting ("John");
greeting ("Jane", 12);

//Activity 5: Higher-Order Functions
//Task 9:
function multicall (calledfunction, n) {
    for (i = 0; i < n; i++){
        called();
    }
}
function called() {
    console.log("This function has been called.");
}
multicall (called, 5);

//Task 10:
function multifunc (func1, func2, n) {
    return func2(func1 (n));
}
function square2 (n) {
    return n * n;
}
function factorial (n) {
    for (i = n - 1; i >= 2; i--)
        n *= i;
    return n;
}
console.log(multifunc (square2, factorial, 2));

//Feature Requests:
// 1. Even or Odd Function Script
// 2. Square Calculation Function Script
// 3. Concatenation Function Script
// 4. Sum Calculation Arrow Function Script
// 5. Higher-Order Function Script