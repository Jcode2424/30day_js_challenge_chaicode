// Day11: Promises and Async/Await
// Achivements:
// 1. Understand and create promises, including handling resolved and rejected states.
// 2. Chain multiple promises to perform sequential asynchronous operations.
// 3. Use async/await to handle asynchronous code more readably.
// 4. Fetch data from public APIs using  both proises and async/await.
// 5. Manage multple concurrent promises using Promise.all and Promise.race.

const { JSDOM } = require('jsdom');

const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
const { window } = dom;
const { document } = window;

// Activity 1: Understanding Promises
// Task1:
function createTimeoutPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('timeout');
        }, 2000);
    });
}
createTimeoutPromise().then((message) => {
    console.log(message);
    window.console.log(message);

    // const p = document.createElement('p');
    // p.textContent = message;
    // document.body.appendChild(p);

    // console.log(dom.serialize());
});
//Task 2:
function createTimeoutPromise2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('timeout error'));
        }, 2000);
    });
}

createTimeoutPromise2().then((message) => {
    window.console.log(message);
})
.catch((error) => {
    window.console.error(error.message);
})

//Activity 3: Chaining Promises
//Task 3:
function fetchDatafromServer(endpoint, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${endpoint}`);
        }, delay);
    });
}

fetchDatafromServer('endpoint1', 1000)
    .then((data) => {
        console.log(data);
        return fetchDatafromServer('endpoint2', 2000);
    })
    .then((data) => {
        console.log(data);
        return fetchDatafromServer('endpoint3', 1000);
    })
    .then((data) => {
        console.log(data);
        console.log('All data fetched in sequence.');
    })
    .catch((error) => {
        console.log(`Error fetching data: ${effor.message}`);
    });

// Activity 3: Using Async/Await
// Task 4:
function rejectedPromise () {
    return new Promise ((resolve, reject) => {
        reject(new Error('Error: Promise rejected.'))
    }, 2000);
}
rejectedPromise().then((message) => {
    console.log(message);
}).catch ((error) => {
    console.error(error.message);
});

//Activity 4: Fetching Data from an API
//Task 6:
const apiURL = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow';

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    reject(new Error ('Network response was not OK' + response.statusText));
                }
                return response.json();
            })
            .then (data => {
                resolve(data);
            })
            .catch (error => {
                reject(new Error('There was a problem with the fetch operation:', error));
            });
    });
}

fetchData(apiURL)
    .then(data => {
        console.log('Data from Task 6: \n', data);
    })
    .catch(error => {
        console.error(error.message);
    });

//Task 7:
function fetchData2(url) {
    return new Promise ((resolve, reject) => {
        fetch(url)
            .then (response => {
                if(!response.ok) {
                    reject(new Error("Network response not OK: " + response.statusText));
                }
                return response.json();
            })
            .then (data => {
                resolve (data);
            })
            .catch (error => {
                reject(error);
        });
    });
}
async function main(){
    const apiURL2 = 'https://jsonplaceholder.typicode.com/todos/1';
    try{
        const data = await fetchData2(apiURL2);
        console.log('Data from Task7: \n', data);
    }catch(error) {
        console.error('Error fetching data:', error.message);
    }
}
main();

//Activity 5: Concurrent Promises
//Task 8:
function fetchData3(endpoint, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${endpoint}`);
        }, delay);
    });
}

const promises = [
    fetchData3('endpoint1', 1000),
    fetchData3('endpoint2', 2000),
    fetchData3('endpoint3', 1500)
];

Promise.all(promises)
    .then((results) => {
        results.forEach((result,index) => {
            console.log(`Result ${index + 1}: ${result}`);
        });
    })
    .catch((error) => {
        console.error('one or more promises failed:', error);
    });

//Task 9:
function createPromiseWithDelay (value, delay) {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(value);
            }, delay);
        });
    }

const promise1 = createPromiseWithDelay('one', 500);
const promise2 = createPromiseWithDelay('two', 100);
Promise.race([promise1, promise2])
    .then((value) => {
        console.log(value);
    })
    .catch ((error) => {
        console.error(error);
    });

//Feature Requests:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises,
// including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and 
// logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises
// and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both
// promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle
// multiple promises concurrently and logs the result.
