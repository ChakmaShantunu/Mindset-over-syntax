const books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

const lookUpTable = books.reduce((table, book) => {
    table[book.id] = book
    return table;
}, {});
console.log(lookUpTable);

// const post = books.find(book => book.id === parseInt(3));  {o(n)}
const post = lookUpTable[3]
console.log(post);