//Day 3: Control Structures

//Achievements:
// 1. Implement and understand basic if-else control flow.
// 2. Use nested if-else statements to handle multiple conditions.
// 3. Utilize switch cases for control flow based on specific values.
// 4. Apply the ternary operator for concise condition checking.
// 5. Combine multiple conditions to solve more complex problems.

//Activity 1: If-Else Statements
//Task1:
let num1 = 5;
if (num1  > 0)
    console.log("The number is positive.");
else if (num1 < 0)
    console.log("The number is negative.");
else
    console.log("The number is zero.");

//Task2:
let age = 19;
if (age >= 18)
    console.log("This person is eligible to vote.");
else
    console.log("This person is not eligible to vote.");

//Activity 2: Nested If-Else Statements
//Task 3:
num1 = 3;
let num2 = 7;
let num3 = 2;
if (num1 >= num2)
    if (num1 >= num3)
        console.log("The largest number is ", num1);
    else
        console.log("The largest number is ", num3);
else
    if (num2 >= num3)
        console.log("The largest number is ", num2);
    else
        console.log("The largest number is ", num3);

//Task 4:
let dow = 3;
switch (dow) {
    case 1:
        console.log("Today is Sunday.");
        break;
    case 2:
        console.log("Today is Monday.");
        break;
    case 3:
        console.log("Today is Tuesday.");
        break;
    case 4:
        console.log("Today is Wednesay.");
        break;
    case 5:
        console.log("Today is Thursday.");
        break;
    case 6:
        console.log("Today is Friday.");
        break;
    case 7:
        console.log("Today is Saturday.");
        break;
    default:
        console.log("Enter today's day of the week.");
}

//Task 5:
let grade = 55;
switch (grade) {
    case (grade >= 90):
        console.log("Your grade is A.");
        break;
    case (grade >= 80):
        console.log("Your grade is B.");
        break;
    case (grade >= 70):
        console.log("Your grade is C.");
        break;
    case (grade >= 60):
        console.log("Your grade is D.");
        break;
    default:
        console.log("Your grade is F.");
    }

    //Activity 4: Conditional (Terary) Operator
    //Task 6:
    let num5 = 4;
    let rem = num5 % 2;
    console.log(rem == 1? "Even" : "Odd");

    //Activity 5: Combining Conditions
    //Task 7:
    let year = 2000;
    if (year % 4 == 0) {
        if (year % 400 == 0)
            console.log("This is a leap year.");
        else if (year % 100 == 0)
            console.log("This is not a leap year.");
    }
    else
        console.log("This is not a leap year.");

    //Feature Request:
    //1. Number Check Script
    //2. Voting Eligibility Script
    //3. Day of the Week Script
    //4. Grade Assignment Script
    //5. Leap Yeaer Check Script

