const numbers = [10, 25, 42, 7, 88];
const evenNumbers = numbers.some(number => number % 2 === 0);
// console.log(evenNumbers);

// Current user roles
const currentUserRole = ["user", "editor", "subscriber"];

// Features access roles
const featureAccessRole = ["admin", "contributor", "guest"];

const userCanAccess = currentUserRole.some(role => featureAccessRole.includes(role));
console.log(userCanAccess);

//array.form

// const arr = Array.from({ length: 10 }, (_, i) => i);
const arr = Array.from([1, 2, 3], (value, i) => value * value);
// console.log(arr);

const range = (start, stop, step) => Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
console.log(range(1, 51, 7));