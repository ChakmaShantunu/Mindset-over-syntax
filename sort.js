const numbers = [10, 25, 42, 7, 88];
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(sortedNumbers);

fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);

//nested array

const mixedNumberArray = [
    5,
    [10, 15],
    20,
    [25, 30, [35, 40]],
    45
];

const flatArr = mixedNumberArray.flat(Infinity);
console.log(flatArr);


const techTopics = [
    ["JavaScript", "TypeScript", "ES6"],
    ["HTML", "Semantic HTML", "Forms"],
    ["CSS", "Flexbox", "Grid", "Animations"],
    ["Node.js", "Express.js", "API", "Middleware"]
];

const flatTech = techTopics.flat(Infinity);
console.log(flatTech);

const filterTag = new Set(techTopics.flat(Infinity));
console.log(filterTag);


