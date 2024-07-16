//Day 4: Loops
//Achievements:
// 1. Understand and use for loops to iterate over a sequence of numbers.
// 2. Utilize whle loops for iteration based on a condition.
// 3. Apply do...while loops to ensure the loop body is executed at least once.
// 4. Implement nested loops to solve more complex problems.
// 5. Use loop control statements (break and continue) to control the flow of loops

//Activity 1: For Loop
//Task 1:
let num1 = 0;
for (let i = 0; i <= 10; i++)
    console.log(i);

let str1 ="";
for (let i = 1; i <= 10; i++){
    str1 = str1 + i;
}
console.log(str1);

//Task 2:
let num2 = 5;
for (let i = 1; i < 10; i++)
    console.log(i * 5);

let str2 = "5";
for (let i = 2; i < 10; i++)
    str2 = str2 + " " + i * 5;
console.log(str2);

//Activity 2: While Loop
//Task 3:
let num3 = 0;
let i = 1;
while (i <= 10) {
    num3 = num3 + i;
    i++;
}
console.log(num3);

//Task 4:
let num4 = 10;
i = 0;
while (i <= 9){
    console.log(10 - i);
    i++;
}

let str3 = "10";
i = 9;
while (i >= 1){
    str3 = str3 + " " + i;
    i--;
}
console.log(str3);

//Activity 3: Do...While Loop
//Task 5:
let num5 = 1;
do {
    console.log(num5);
    num5++;
} while (num5 < 6)

let str4 = "1";
i = 2
do {
    str4 = str4 + " " + i;
    i++; 
} while (i < 6)
console.log(str4);

//Task 6:
let num6 = 1;
let fnum = 9;
i = 1;
do {
    num6 = num6 * i;
    i++;
} while (i <= fnum)
console.log(num6);

//Activity 4: Nested Loops
//Task 7:
i = 0;
do {
    var str5 = "*";
    for (let j = 1; j < i+1; j++){
        str5 = str5 + " " + "*";
    }
    console.log(str5);
    i++;
} while (i < 5) 

//Activity 5: Loop Control Statements
//Task 8:
for (i = 1; i<= 10; i++){
    if (i != 5)
        console.log(i);
    else
        continue;
}

let str6 = "1";
for (i = 2; i <= 10; i++) {
    if (i != 5)
        str6 = str6 + " " + i;
    else
        continue;
}
console.log(str5);
console.log(str6);

//Task 9:
for (i = 1; i <= 10; i++) {
    if (i != 7)
        console.log(i);
    else
        break
}

let str7 = "1";
for (i = 2; i <= 9; i++) {
    if (i != 7)
        str7 = str7 + " " + i;
    else
        break;
}
console.log(str7);