//Day2: Operators
//Achievements:
// 1. Understand and use arithmetic operators to perform basic calculations.
// 2. Use assignment operators to modify variable values.
// 3. Compare values using comaprison operators.
// 4. Use the ternary operator for concise conditional expressions.

//Activity 1: Arithmetic Operations
let num1 = 8;
let num2 = 3;
//Task 1:
console.log(num1+num2);
//Task2:
console.log(num1-num2);
//Task3:
console.log(num1*num2);
//Task4:
console.log(num1/num2);
//Task5:
console.log(num1%num2);

//Activity 2: Assignment Operators
//Task 6:
num1 += 1;
console.log("num1:", num1);
//Task 7:
num2 -= 2;
console.log("num2:", num2);

//Activity 3: Comparison Operators
//Task 8:
console.log("Comparison >:", num1 > num2);
console.log("Comparision <:", num1 < num2);
//Task 9:
console.log("Comparision <=:", num1 <= num2);
console.log("Comparision >=:", num1 >= num2);
//Task 10:
console.log("Comparision ==:", num1 == num2);
console.log("Comparision ===:", num1 === num2);

//Activity 4: Logical Operators
let num3 =1 ;
//Task 11:
console.log("Logical &&:", num2 && num3);
//Task 12:
console.log("Logical ||:", num1 || num3);
//Task 13:
console.log("Logical !:", !num2);
console.log(num1 && num3);
console.log(!num1 || num3);
console.log(!num1 || !num3);
console.log(!num1 && num1);

//Activity 5: Ternary Operator
console.log("Ternary:", num1 > 6 ? num1 : num3);

//Feature Request:
//1. Arithmetic Operation Script:
console.log("num2 + num3 = ", num2 + num3);
console.log("num2 - num3 = ", num2 - num3);
console.log("num2 * num3 = ", num2 * num3);
console.log("num2 / num3 = ", num2 / num3);
console.log("num2 % num3 = ", num2 % num3);

//2. Comparision and Logical Operators Script:
//num3 = 4
console.log("num2 > num3:", num2 > num3);
console.log("num2 < num3:", num2 < num3);
console.log("num2 == num3:", num2 == num3);
console.log("num2 === num3:", num2 === num3);
console.log("num2 >= num3:", num2 >= num3);
console.log("num2 <= num3:", num2 <= num3);
console.log("num2 || num3:", num2 || num3);
console.log("num2 && num3:", num2 && num3);

//3. Ternary Operator Script:
console.log(num2 > 9? "pansy" : "rosy");