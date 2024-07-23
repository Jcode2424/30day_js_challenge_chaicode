//Day 9: DOM Manipulation
//Achievenments:
// 1. Select and manipulate DOM elements using JavaScript.
// 2. Create and append new elements to the DOM.
// 3. Remove elements from the DOM.
// 4. Modify attributes and classes of HTML elements.
// 5. Add and handle events to make web pages interactive.


const fs = require('fs').promises;
const { JSDOM } = require('jsdom');

(async () => {
    try{
        //Activity 1: Selecting and Manipulating Elements
        //Task 1:
        let html = await fs.readFile('day9.html', 'utf8');

        let { window } = new JSDOM(html);
        let { document } = window;

        let text = document.getElementById('first');
        console.log(text);
        if (text) {
            text.innerHTML = "Born to code.";
        } else {
            console.error("Element with ID 'first' not found.");
        }
        console.log(document.body.innerHTML);
        console.log("First write to day9.html for changing the text of a div by ID completed.");

        //Task 2:
        let elements = document.querySelectorAll('.second');
        elements.forEach(element => {
            element.style.backgroundColor = 'lightcoral';
        });
        console.log("Second write to day9.html for changing the background color by class completed.");

        //Activity 2: Creating and Appending Elements
        //Task 3:
        let newDiv = document.createElement('div');
        newDiv.textContent = "This is a new div element.";
        document.body.appendChild(newDiv);
        console.log("Third write to day9.html for adding a div element completed.")
    
        //Task 4:
        html = await fs.readFile('day9.html', 'utf8');

        updatedWindow = new JSDOM(html).window;
        updatedDocument= updatedWindow.document;

        let newLi = document.createElement('li');
        newLi.textContent = "added list item";
        let ul = document.getElementsByTagName('ul');
        if (ul.length > 0) {
            ul[0].appendChild(newLi);
            console.log("Fourth write to day9.html for appending li element completed.");
        } else {
            console.error("UL element not found.");
        }

        //Activity 3: Removing Elements
        //Task 5:
        let removeels = Array.from(document.getElementsByTagName('div'));
        console.log(removeels);
        if (removeels.length > 0) {
            removeels.forEach (removeel => {
                console.log(removeel.textContent);
                removeel.remove();
            });
        } else {
            console.error("HTML element not found.")
        }
        console.log("Fifth write to day9.html of removing an element was completed.")

        //Task 6:
        let remlastels = Array.from(document.getElementsByTagName('li'));
        if (remlastels.length > 0) {
            console.log(remlastels[remlastels.length-1].textContent);
            remlastels[remlastels.length-1].remove();
        }
        console.log("Sixth write to day9.html which is to remove the last element completed.")

        //Activity 4: Modifying Attributes and Classes
        //Task 7:
        let newImg = document.getElementsByTagName('img');
        console.log (newImg);
        let imgSrc = newImg[0].getAttribute('src');
        console.log(imgSrc);
        if (imgSrc == 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg'){
            newImg[0].setAttribute('src', 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg');
            newImg[0].setAttribute('alt', 'A Lizzard');
            console.log("Seventh write to day9.html, of changing attribute complete.")
        } else if (imgSrc == 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg') {
            newImg[0].setAttribute('src', 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg');
            newImg[0].setAttribute('alt', 'A cool cat');
            console.log("Seventh write to day9.html, of changing attribute complete.")
        }

        //Task 8:
        let elemrems = Array.from(document.getElementsByTagName('ul'));
        elemrems[0].classList.add('third');

        let elems = Array.from(document.getElementsByTagName('li'));
        elems.forEach (elem => {
            elem.classList.remove('third');
        })
        console.log("Eight write to day9.html, of adding and removing a CSS class completed.");
        
        //Activity 5:
        //Task 9:
        // const button = document.getElementById('myButton');
        // if (button) {
        //     button.addEventListener('click', () => {
        //         button.textContent = 'Clicked!';
        //     });
        // } else {
        //     console.error("Button does not exist");
        // }

        // jsdom is great for server-side DOM manipulation and testing, 
        // but it doesn’t handle interactive features like event listeners as a web browser would.
        // For testing click events and other browser-specific interactions, 
        // include your JavaScript directly in the HTML file and open it in a real web browser.
        console.log("Ninth write to day9.html, to add an eventlistener that changes the text upon clicking, completed. ");

        //Task 10:
        console.log("Tenth write to day9.js, to add a mouseover evenelistener that changes border color, completed.")


        await fs.writeFile('day9.html', document.documentElement.outerHTML);
        console.log("All tasks completed and written to day9.html.");
    } catch (err) {
        console.error("Error processing the HTML file:", err);
    }
    })();

// fs.writeFile('day9.html', document.documentElement.outerHTML, (err) => {
//     if (err) {
//         console.error("Error writing the modified HTML file:", err);
//     } else {
//         console.log("day9.html has been modified.");
//     }
// });

//Feature Requests:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// 4. Attribute Modification Script: Create a script that chnges the attributes of an HTML element.
// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content
//    or style based on user interactions.