const arr = [1, 2, 2, 3, 3, 4, 4];

// const removeDuplicate = (arr) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(removeDuplicate(arr))

//Brute Force

const removeDuplicate = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    });
    return newArr
}
console.log(removeDuplicate(arr));

const set = new Set(arr);
console.log(set);