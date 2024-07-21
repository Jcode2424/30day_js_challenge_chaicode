//Day 8: ES6 + Features
//Achievements:
// 1. Understand and use template literals for string interpolation and multi-line strings.
// 2. Apply destructuring to extract values from arrays and objects.
// 3. Utilize spread and rest operators for array manipulation and function arguments.
// 4. Define functions with default parameters.
// 5. Create objects using enhanced object literals, including methods and computer property names.

//Activity 1: Template Literals
//Task 1:
let person = {
    Name: "John",
    Age: 36
}
let str1 = `Name: ${person.Name}, Age: ${person.Age}.`;
console.log(str1);

//Task 2:
let templit1 = 
`Name: John
Age: 36`
console.log(templit1);

//Activity 2: Destructuring
//Task 3:
let arr1 = [1, 2, 3, 4, 5];
let [x, y] = arr1;
console.log("This is the first element: " + x);
console.log("This is the second element: " + y);

//Task 4:
let book = {
    Title: "John Doe's Diary",
    Author: "John Doe",
    Year: 1985
}
let {Title, Author} = book;
console.log(Title, Author);

//Activity 3: Spread and Rest Operators
//Task 5:
let arr2 = [0, ...arr1, 6];
console.log(arr2);

//Task 6:
function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
 }
console.log(sum(...arr1));
console.log(sum(...arr2));

//Activity 4: Default Parameters
//Task 7:
function prod (a, b = 1) {
    return a * b;
}
console.log(prod(1, 2));
console.log(prod(1));

//Activity 5: Enhanded Object Literals
//Task 8:
let obj = {
    Name : "John Doe",
    Age : 33,
    Address : "California",
    intro () {
        console.log(`Hi, my name is ${this.Name}, my age is ${this.Age}, and I live in ${this.Address}.`);
    }
}
console.log(obj);
obj.intro();

let Name = "John Doe";
let Age = 34;
let Address = "California";
let intro = function () {
    console.log(`Hi, my name is ${Name}, my age is ${Age}, and I live in ${Address}.`);
}
obj = {Name, Age, Address, intro};
console.log(obj);
obj.intro();

//Task 9:
let prop1 = "Name";
let prop2 = "Age";
let prop3 = "Address";
intro = function () {
    console.log(`Hi, my name is ${this.Name}, my age is ${this.Age}, and I live in ${this.Address}.`);
}

let obj2 = {
    [prop1]: "Jane Doe",
    [prop2]: 23,
    [prop3]: "Bangkok",
    intro
}
console.log(obj2);
obj2.intro();

//Feature Requests:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals
//    to create and log strings with embdedded variables and multi-line strings.
// 2. Destructuring Script: Create a script that uses array and object destructuring to
//    extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread
//    operator to combine arrays and the rest operator to handle multiple function arguments.
// 4. Default Parameters Script: Create a script that defines a function with default parameters
//    and log the results by calling it with different arguments.
// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to
//    create and log an object with methods and computed property names.