//Day 6: Arrays
//Achievements:
// 1. Create and manipulate arrays using various methods.
// 2. Transform and aggregate array data using Map, filter and reduce.
// 3. Iterate over arrays using loops and iteration methods.
// 4. Understand and work with multi-dimensional arrays.Create

//Activity 1: Array Creation and Access
//Task 1:
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++){
    console.log(arr1[i]);
}

//Task2:
console.log(arr1[0]);
console.log(arr1[4]);

//Activity 2: Array Methods (Basic)
//Task 3:
arr1.push (6, 7, 8);
for (i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
console.log(arr1);

//Task 4:
arr1.pop();
console.log(arr1);

//Task 5:
arr1.shift();
console.log(arr1);

//Task 6:
arr1.unshift(8);
console.log(arr1);

//Activity 3: Array Methods (Intermediate)
//Task 7:
let arr2 = arr1.map((x) => x * 2);
console.log(arr2);

//Task 8:
let arr3 = arr1.filter((x) => x % 2 == 0);
console.log(arr3);

//Task 9:
let sum = arr3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//Activity 4: Array Iteration
//Task 10: 
for (i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

//Task 11:
arr2.forEach (num => {console.log(num);});

//Activity 5: Multi-dimensional Arrays
//Task 12:
let arr4 = [[1, 2], [3, 4], [5, 6]];
console.log(arr4);
console.log(`arr4: ${arr4}`);

//Task 13:
console.log(arr4[2][1]);

//Feature Requests:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an Array
//    adding and removing elements using push, pop, shift and unshift methods.
// 2. Array Transformation Script: Create a script that uses map, filter and reduce methods
//    to transform and aggragate array data.
// 3. Array Iteration Script: Write a script that iterates over an array using both
//    for loop and forEach method and logs each element.
// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and 
//    manipulation of a two-dimensional array.