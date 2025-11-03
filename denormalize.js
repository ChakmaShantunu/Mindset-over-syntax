//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
    { id: 103, name: "Charlie" },
];

const posts = [
    { id: 1, userId: 102, title: "My first post" },
    { id: 2, userId: 101, title: "React Hooks" },
    { id: 3, userId: 101, title: "Data Structures" },
    { id: 4, userId: 103, title: "CSS is fun" },
    { id: 5, userId: 102, title: "Node.js streams" },
];

const postByUserId = posts.reduce((table, post) => {
    const { userId } = post
    if (!table[userId]) {
        table[userId] = []
    }
    table[userId].push(post)
    return table
}, {});

const userWithPost = users.map(user => {
    return {
        ...user, posts: postByUserId[user.id] || []
    }
})
// console.log(JSON.stringify(userWithPost));
//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]


const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Keyboard" },
];

const reviews = [
    { id: 101, productId: 2, rating: 5, text: "Excellent!" },
    { id: 102, productId: 1, rating: 4, text: "Pretty good" },
    { id: 103, productId: 1, rating: 5, text: "Loved it" },
    { id: 104, productId: 3, rating: 3, text: "Average" },
    { id: 105, productId: 2, rating: 4, text: "Good value" },
];

const productByProductId = reviews.reduce((table, review) => {
    const { productId } = review
    if (!table[productId]) {
        table[productId] = []
    }
    table[productId].push(review)
    return table
}, {});

const postWithReview = products.map(product => {
    return {
        ...product, reviews: productByProductId[product.id] || []
    }
})
console.log(JSON.stringify(postWithReview));