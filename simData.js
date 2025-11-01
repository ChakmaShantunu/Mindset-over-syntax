function generateSimData(size) {
    const itemPool = [
        "apple",
        "banana",
        "mango",
        "orange",
        "grape",
        "strawberry",
        "cherry",
        "blueberry",
        "watermelon",
        "waltermelon",
        "apple",
        "mango"
    ];

    const generatedData = [];
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * itemPool.length);
        generatedData.push(itemPool[randomIndex])
    }

    return generatedData
}

const hugeDataSet = generateSimData(500000);

console.log("Data Size", hugeDataSet.length);

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    });
    return newArr
}
console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();

console.log(`Arry implementatin took ${arrEndTime - arrStartTime}`);

const setStartTime = performance.now();
const removeDupSet = (arr) => {
    const set = new Set(arr)
    return Array.from(set)
};
console.log(removeDupSet(hugeDataSet))
const setEndTime = performance.now();

console.log(`Set implementatin took ${setEndTime - setStartTime}`);