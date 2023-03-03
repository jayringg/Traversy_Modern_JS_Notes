// String Challenge

// My first solution! 
// const myString = 'developer'; 
// const firstChar = myString.charAt(0);
// const uppercaseChar = firstChar.toUpperCase();
// const myNewString = `${uppercaseChar}eveloper`;
// console.log(myNewString);

//Brad's first Solution 

// const myString = 'developer';
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// console.log(myNewString);

// Number Challenge My First Solution

// const x = Math.floor(Math.random() * 100 + 1); 
// const y = Math.floor(Math.random() * 50 + 1); 
// const sumOutput = `${x} + ${y} = ${x + y}`;
// const differenceOutput = `${x} - ${y} = ${x - y}`;
// const productOutput = `${x} * ${y} = ${x * y}`;
// const quotientOutput = `${x} / ${y} = ${x / y}`;
// const rmOutput = `${x} % ${y} = ${x % y}`;
// console.log(rmOutput);

// const post = {
//     id: 1,
//     title: 'post One',
//     body: 'This is the body',
// };

// const str = JSON.stringify(post);

// const obj = JSON.parse(str);

// console.log(obj.body);

// const posts = [
//     {
//         id: 1,
//         title: 'Post One',
//         body: 'This is the body',
//     },
//     {
//         id: 2,
//         title: 'Post Two',
//         body: 'This is the body',
//     }
// ];

// const str2 = JSON.stringify(posts);

// Object Challenge 

// const library = [
//     {
//         title: "1984",
//         author: "George Orwell",
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         },
//     },
//     {
//         title: "Animal Farm",
//         author: "George Orwell",
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         },
//     },
//     {
//         title: "The Great Gatspy",
//         author: "F. Scott Fitzgerald",
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         },
//     },
// ];

// Solution 1
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// Solution 2 

// for (const i = 0; i < library.length; i++) {
//     library[i].status.read = true; 
// }

// Solution 3 
// library.forEach(function(book) {
//     book.status.read = true;
// })

// Destructure 
//const { title: firstBook } = library[0]; 

// const libraryJSON = JSON.stringify(library);

// console.log(libraryJSON);


// Destructuring 

// const todo = {
//     id: 1,
//     title: 'Take out trash',
//     user: {
//         name: "John",
//     }
// }

// const { id: todoId } = todo; 
 

// console.log(todoId);

// const numbers = [23, 67, 33, 49];

// const [first, second, third, fourth] = numbers;

// console.log(third, fourth);

// Function Challenege! 

// getCelcius = function(temp) {
//   console.log((temp - 32) * .5556);
// }

// getCelcius(212);

// const getCelcius = temp => (temp-32) * .5556;

// console.log(`The temperature is ${getCelcius(212)}\xB0C`);

// const arr = [1, 2, 3, 4, 5];

// function newObj() {
//   return Math.min(...arr);
// }

// console.log(newObj());

// const text = "Hello World";

// function reverse() {
//     const splitString = text.split("");
//     const reverseArray = splitString.reverse();
//     const joinArray = reverseArray.join("");
//     return joinArray;
// }

// console.log(reverse());


// My Function challenge 2 solution
//  minMax = (arr) => {
//   const minimum = Math.min(...arr)
//   const maximum = Math.max(...arr)
//   const final = {
//     min: minimum,
//     max: maximum,
//   };
//   return final;
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// Brads Solution

// minMax = (arr) => {
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     return {
//       min,
//       max,
//     };
//   }
  
//   console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3 

// ( (length, width) => {
//     const rectangle = length * width;
//     console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${rectangle}`);
// }) (3, 7);

// Calculator Challenge 
// My first solution
// const calculator = function(num1, num2, operator) {
//   if (operator === "+") {
//     console.log(num1 + num2);
//   } else if (operator === "-") {
//         console.log(num1 - num2);
//       } else if (operator === "*") {
//         console.log(num1 * num2);
//       } else if (operator === "/") {
//         console.log(num1 / num2);
//       } else {
//         console.log("error");
//       }
//   }
// console.log(calculator(3, 3, "*"));

// Brad's solution

// function calculator(num1, num2, operator) {
//     let result;

//     switch (operator) {
//         case "+":
//           result = num1 + num2;
//           break;
//         case "-":
//             result = num1 - num2;
//           break;
//         case "*":
//             result = num1 * num2;
//           break;
//         case "/":
//             result = num1 / num2;
//           break;
//         default:
//             result = "Invalid Operator";  
//     }

//     console.log(result);
//     return result;
// }

// calculator(5, 2, "*")
// let a = 3;
// let b = 700;
//  const lessThan100 = a + b < 100 ? true : false;
// console.log(lessThan100);


// Challenge 
// const num = 4;
// sum = 0;

// for (let i = 1; i <= num; i + sum) {
//     console.log(sum += i);
  
//   }

// for (let i = 1; i <= 12; i ++) {
//     console.log("Number " + i);

//     for (let j = 1; j <=12; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// Challenge add all numbers up to that number function 

// function addUp(num) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//  console.log(addUp(10));

// Challenge 7
// function sumPolygon(n) {
//     let degrees = (n-2) * 180;
//     return degrees;
// }

// console.log(sumPolygon(7));

// Challenge 8 

// function calcAge(age) {
// 	let days = `${age * 365} days`;
//     return days;
// }
// console.log(calcAge(20));

// Posting Sarah is the best!
// const names = ["Brad", "Sam", "Sarah", "John", "Tim", "Jeremy"];

// for (let i = 0; i < names.length; i ++) {
//     if (i === 2) {
//     console.log(`${names[2]} is the best!`);
// } else {
//     console.log(names[i]);
// }
// }


// Good O'l FizzBuzz Challenge
// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz"); 
//     } else {
//         console.log(i);
//     }
// }

// FizzBuzz with While Loop 

// let j = 1; 

// while (j <= 100) {
//     if (j % 3 === 0 && j % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (j % 5 === 0) {
//         console.log("Buzz");
//     } else if (j % 3 === 0) {
//         console.log("Fizz"); 
//     } else {
//         console.log(j);
// }

// j++;
// }

// Using For of Loop for an easier cleaner array iteration 

// const items = ["Book", "Table", "Chair", "Kite"];

// for (const item of items) {
//     console.log(item);
// }

//  Doing the same with objects in an array 

// const users = [{name: "Brad"}, {name: "Kate"}, {name: "Steve"}];

// for (const user of users) {
//     console.log(user.name);
// }

// How can we loop through strings? 

// const str = "Hello World"

// for (const letter of str) {
//     console.log(letter);
// }

// Loop over Maps 

// const map = new Map(); 
// map.set("name", "John");
// map.set("age", 30);

// for (const [key,value] of map) {
//     console.log(key, value);
// }

// How can we loop through object literal values? We use the For In Loop 

// const colorObj = {
//     color1: "red",
//     color2: "blue",
//     color3: "orange",
//     color4: "green",
// }; 

// for (const key in colorObj) {
//     console.log(key, colorObj[key]);
// }

// Use for in loop on an array 

// const colorArr = ["Red", "Blue", "Orange", "Green"];

// for (const key in colorArr) {
//     console.log(key, colorArr[key]);
// }

// High order array methods = nubmer 1 forEach() they all use callback functions where a function takes another function as an argument 

// const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"]; 

// console.log(socials.__proto__);

// socials.forEach(function(item) {
//   console.log(item);
// })

// progress to arrow function 

// socials.forEach((item) => {
//     console.log(item);
// })

// refine the arrow function more because it is a one line expression 

// socials.forEach((item, index, arr) => console.log(item, index, arr));

// create a named function that logs each item of my array 

// function logSocials(social) {
//     console.log(social);
// }

// socials.forEach(logSocials);


// for each with objects does it need to be wrapped in an array? - yes it does these are high order array methods they only work on arrays 

// const socialObjs = [
//     {name: "Twitter", url: "https//twitter.com"},
//     {name: "Facebook", url: "https//Facebook.com"},
//     {name: "Linkedin", url: "https//Linkedin.com"},
//     {name: "Instagram", url: "https//instagram.com"},
// ]

// socialObjs.forEach((item) => console.log(item.url));

// High order array method filter will actually return something rather than forEach that just prints

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// })

// console.log(evenNumbers);

// reduce function size Why don't we use return in this version?

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const oddNumbers = numbers.filter(number => number % 2 !== 0); 

// console.log(oddNumbers);

// More complicated Array filter

// const companies = [
//     { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//     { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//     { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//     { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//     { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//     { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//     { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//     { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//     { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
//   ];

//   get only retail companies 

// const retailCompanies = companies.filter(company => company.category === "Retail");


// console.log(retailCompanies);

// get the companies that started in or after 1980 in or before 2005 

// const companyAge = companies.filter(age => age.start >= 1980 && age.end  <= 2005);

// console.log(companyAge);

// longer version 
// const companyAge = companies.filter(function(age) {
//     return age.start >= 1980 && age.end  <= 2005;
// })

// console.log(companyAge);

// companies that lasted 10 years or more 

// const longCompanies = companies.filter(function(age) {
//     if (age.end - age.start >= 10) {
//         return companies;
//     }
// })

// console.log(longCompanies);

// Shorter version 

// const longCompanies = companies.filter(age => age.end - age.start >= 10);
// console.log(longCompanies);

// const numbers = [1, 2, 3, 4, 5]; 
// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers);

// same with forEach() 

// const doubledNumbers2 = [];

// numbers.forEach(number => {
//     doubledNumbers2.push(number * 2);
// });
// console.log(doubledNumbers2);

// const companies = [
//     { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//     { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//     { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//     { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//     { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//     { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//     { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//     { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//     { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
//   ];

//   create array with company name only 

// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// create an array with just company and category didn't work quite right
// const companyCategoryName = companies.map(company => `{ name: ${company.name}, category: s${company.category} },`);
// console.log(companyCategoryName);

// Brads version 
// const companyInfo = companies.map((company) => {
//     return {
//         name: company.name,
//         category: company.category,
//     };
// });

// console.log(companyInfo);

// create an array of objects with the name and length of each company in years 

// const companyLength = companies.map((company) => {
//     return {
//         name: company.name,
//         length :company.end - company.start + " years",
//     }
// })

// console.log(companyLength);

// Chain map methods
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt *2);
// console.log(squareAndDouble);


// long version
// const squareAndDouble2 = numbers.map(function (number) {
//     return Math.sqrt(number);
// })
// .map(function (sqrt) {
//     return sqrt * 2;
// })
// .map(function (sqrtDoubled) {
//     return sqrtDoubled * 3;
// });
// console.log(squareAndDouble2);

// Chaining with other methods 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenDouble = numbers.filter((number) => number % 2 === 0)
// .map((number) => number * 2);
// console.log(evenDouble);

// reduce method 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);


// console.log(sum);

// Adding all the values in an array using a for loop for a reminder 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log(sum);

// shorter version of the reduce method 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// console.log(sum2);

// Brad's version of using a for of loop to do the same thing 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum3 = () => {
//     let acc = 0;
//     for (const cur of numbers) {
//         acc += cur;
//     }
//     return acc;
// } 
// console.log(sum3());

// Shopping cart example of using reduce() 

// const cart = [
//     { id: 1, name: "Product 1", price: 130 },
//     { id: 2, name: "Product 2", price: 150 },
//     { id: 3, name: "Product 3", price: 175 },
// ];

// const total = cart.reduce(function (acc, product) {
//     return acc + product.price;
// }, 0);

// console.log(total);

// Array challenges 

// const people = [
//     {
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john@gmail.com',
//       phone: '111-111-1111',
//       age: 30,
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Poe',
//       email: 'jane@gmail.com',
//       phone: '222-222-2222',
//       age: 25,
//     },
//     {
//       firstName: 'Bob',
//       lastName: 'Foe',
//       email: 'bob@gmail.com',
//       phone: '333-333-3333',
//       age: 45,
//     },
//     {
//       firstName: 'Sara',
//       lastName: 'Soe',
//       email: 'Sara@gmail.com',
//       phone: '444-444-4444',
//       age: 19,
//     },
//     {
//       firstName: 'Jose',
//       lastName: 'Koe',
//       email: 'jose@gmail.com',
//       phone: '555-555-5555',
//       age: 23,
//     },
//   ];

//   Brad's answer
//   const youngPeople = people.filter(person => {
//     return person.age <= 25;
//  })
//   .map(person => ({
//     name: person.firstName + " " + person.lastName,
//     email: person.email,
//   }));
//   console.log(youngPeople);

// My Answer

//   const youngPeople = people.filter(person => {
//     return person.age <= 25;
//  })
//   .map(person => {
//     return {
//         firstName: person.firstName,
//         lastName: person.lastName,
//         email: person.email,
//     }
//   })
//   console.log(youngPeople);

//   Challenge 2 My Answer!

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// let positiveSum = 0;
// const positiveInt = numbers.filter( positive => {
//     return positive >= 0;
// }); 
// positiveInt.forEach( num => {
//     positiveSum += num;
// })

// console.log(positiveSum);

// Brad's Solution 

// const positiveSum = numbers. filter((number) => number > 0).reduce((acc, cur) => acc + cur, 0);

// console.log(positiveSum);

// Challenge 3 Brad's solution ******* I need more work with these challenges / did not solve this one 

// const words = ["coder", "programmer", "developer"]; 

// const cWords = words.map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
// });
// console.log(cWords);

// Document Element Properties 

// let output; 
// console.log(document.getElementById("app-title").id);
// console.log(document.getElementById("app-title").getAttribute("id"));

// Set Attributes
// document.getElementById("app-title").title = "Shopping List";

// document.getElementById("app-title").setAttribute("class", "title");
// console.log(document.getElementById("app-title"))

// const title = document.getElementById("app-title");

// console.log(title);

// Get / change content 

console.log(title.textContent);

// Taversing the DOM - Elements 

// const parent = document.querySelector(".parent");
// output = parent.children;
// parent.children[1].innerText = "Child Two";
// parent.children[0].style.color = "green";
// parent.children[0].style.fontSize = "30px";
// parent.children[1].style.color = "yellow";
// parent.children[2].style.color = "red";
// parent.firstElementChild.innerText = "Child One"
// parent.lastElementChild.innerText = "Child Three"

// const child = document.querySelector(".child");
// output = child.parentElement;
// child.parentElement.style.border = "1px solid #ccc";
// child.parentElement.style.padding = "10px";
// console.log(output);

// // sibling elements 

// const secondItem = document.querySelector(".child:nth-child(2)");
// output = secondItem;
// output = secondItem.nextElementSibling;
// secondItem.nextElementSibling.style.color = "blue";
// secondItem.previousElementSibling.style.color = "orange";

// console.log(output);