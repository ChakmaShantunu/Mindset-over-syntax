
//Step by step mindest
// 1. even numbers are those who are divided by 2
// 2. approach will be filter the array
// 3. filter method use because if you want to delete someting from the array.

// Filter method:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0).length
// console.log(evenNumbers);

//Nou counting the even nubmers

console.log(evenNumbers);

// Reduce method:
// the sum of the numbers
const nubmersArr = [10, 20, 30, 40];
const sums = nubmersArr.reduce((acc, current) => {
    return acc + current
}, 0)
console.log(sums);

// Extracting the total value from an object

const products = [
    { name: "Pen", price: 10 },
    { name: "Book", price: 40 },
    { name: "Bag", price: 100 },
]

const totalPrice = products.reduce((acc, current) => {
    return acc + current.price
}, 0);
console.log(totalPrice);

// To count the frequency from an array.

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
}, {})

console.log(count);

const pets = ["cat", "dog", "cat", "bird", "dog", "dog", "cat"];

const petsCount = pets.reduce((acc, pet) => {
    acc[pet] = (acc[pet] || 0) + 1
    return acc
}, {})

console.log(petsCount);

// Flattening an array

const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, nes) => {
    return acc.concat(nes)
}, []);

console.log(flat);

// Word Length Count

const words = ["cat", "elephant", "dog"];

const wordsCount = words.reduce((acc, word) => {
    return acc + word.length
}, 0)

console.log(wordsCount);