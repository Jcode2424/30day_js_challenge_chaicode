//Day 7: Objects
//Achievements:
// 1. Create and manipulate object with properties and methods.
// 2. Understand and use the this keyword in object methods.
// 3. Work with nested obujects and arrays of objects.
// 4. Iterate over an object's properties using loops and built-in methods.

//Activity 1: Object Creation and Access
//Task 1:
let book = {
                Author: "John Doe",
                Title: "John Doe's Diary",
                Year: 1996
}
console.log(book);

//Task 2:
console.log(book.Title, book.Author);
console.log(`"${book.Title}" by ${book.Author}.`);

//Activity 2: Object Methods
//Task 3:
let ti_au = (book) => book.Title + " by " + book.Author;
console.log(ti_au(book));

function tiau() {
    return this.Title + " by " + this.Author;
}
tiau(book);

let book2 = {
    Title: "Jane Doe's Diary",
    Author: "Jane Doe",
    Year: 1997,
    bookIntro: function() {
        return book2.Title + " by " + book2.Author;
    },
    updateYear: function(newYear) {
        this.Year = newYear;
    }
}
console.log(book2.bookIntro());

//Task 4:
book2.updateYear(1987);
console.log(book2);

//Activity 3: Nested Objects
//Task 5:
let library = {
    name: "International Library",
    books: [ {
        Author: "John Doe",
        Title: "John Doe's Diary",
        Year: 1997
    },
    {
        Author: "Jane Doe",
        Title: "Jane Doe's Diary",
        Year: 1987
    }],
    members: [{
        Name: "Lily",
        Age: 38,
        Address: "Florida, USA"
    },
    {
        Name: "Bob",
        Age: 54,
        Address: "Paris, France"
    }]

}
console.log(library);

//Task 6:
console.log(library.name);
for (i = 0; i < library.books.length; i++) {
    console.log(library.books[i].Title);
}

//Task 7:
book = {
    Author: "John Doe",
    Title: "John Doe's Diary",
    Year: 1996,
    bookInfo: function() {
        return `${this.Title} is written by ${this.Author}.`;
    }
}
console.log(book.bookInfo());

//Activity 5: Object Iteration
//Task 8:
for (const property in book) {
    console.log(`${property}: ${book[property]}`);
}

//Task 9:
console.log(Object.keys(book));
console.log(Object.values(book));

console.log(Object.keys(library));
console.log(Object.values(library));

//Feature Requests:
// 1. Book Object Script: Write a script that creates a book object,
//    add methods to instanceof, and logs its properties and method results.
// 2. Library Object Script: Create a script that defines a library object
//    containing an array of book objects and logs the lbrary's details. 
// 3. Object Iteration Script: Write a script that demonstrates iterating over
//    an object's properties using for...in loop and Object.keys/Object.values.