const cardItems = [
    {
        "id": 1,
        "title": "Wireless Headphones",
        "description": "High quality over-ear wireless headphones with noise cancellation.",
        "price": 99.99,
        "image": "https://example.com/images/headphones.jpg",
        "rating": 4.5,
        "category": "Electronics",
        "quantity": 1
    },
    {
        "id": 2,
        "title": "Smart Watch",
        "description": "Stylish smartwatch with heart rate monitor and GPS tracking.",
        "price": 149.99,
        "image": "https://example.com/images/smartwatch.jpg",
        "rating": 4.3,
        "category": "Electronics",
        "quantity": 1
    },
    {
        "id": 3,
        "title": "Running Shoes",
        "description": "Comfortable running shoes for daily workouts and jogging.",
        "price": 79.99,
        "image": "https://example.com/images/shoes.jpg",
        "rating": 4.7,
        "category": "Footwear",
        "quantity": 1
    },
    {
        "id": 4,
        "title": "Coffee Maker",
        "description": "Automatic coffee maker with programmable timer and brewing options.",
        "price": 59.99,
        "image": "https://example.com/images/coffeemaker.jpg",
        "rating": 4.2,
        "category": "Home Appliances",
        "quantity": 1
    },
    {
        "id": 5,
        "title": "Backpack",
        "description": "Durable backpack with multiple compartments for travel and school.",
        "price": 39.99,
        "image": "https://example.com/images/backpack.jpg",
        "rating": 4.6,
        "category": "Accessories",
        "quantity": 1
    }
];


const subTotal = cardItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
}, 0);
// console.log(subTotal);



const players = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "age": 36,
        "nationality": "Argentina",
        "club": "Inter Miami",
        "position": "Forward",
        "goals": 700
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "age": 38,
        "nationality": "Portugal",
        "club": "Al Nassr",
        "position": "Forward",
        "goals": 850
    },
    {
        "id": 3,
        "name": "Kevin De Bruyne",
        "age": 32,
        "nationality": "Belgium",
        "club": "Manchester City",
        "position": "Midfielder",
        "goals": 150
    },
    {
        "id": 4,
        "name": "Virgil van Dijk",
        "age": 32,
        "nationality": "Netherlands",
        "club": "Liverpool",
        "position": "Defender",
        "goals": 35
    },
    {
        "id": 5,
        "name": "Kylian Mbappé",
        "age": 25,
        "nationality": "France",
        "club": "Paris Saint-Germain",
        "position": "Forward",
        "goals": 220
    }
];

const scorer = players.reduce((acc, player) => {
    if (acc.goals > player.goals) {
        return acc
    }

    return player
}, players[0]);
// console.log(scorer.name, "has the highest", scorer.goals, "goals");

const surveyResponse = ["A", "A", "B", "B", "B", "C", "C", "D", "D", "D", "E", "E", "F", "F", "F", "G", "G", "H", "H", "H", "I", "I", "J", "J", "J", "K", "K", "L", "L", "L", "M", "M", "N", "N", "N", "O", "O", "P", "P", "P", "Q", "Q", "R", "R", "R", "S", "S", "T", "T", "T", "U", "U", "V", "V", "V", "W", "W", "X", "X", "X", "Y", "Y", "Z", "Z"]

const count = surveyResponse.reduce((table, response) => {
    if (table[response]) {
        table[response] += 1
    } else {
        table[response] = 1
    }
    return table
}, {});
// console.log(count);

const words = ["apple", "banana", "apple", "mango", "banana", "apple", "grape"];

const wordsCount = words.reduce((acc, response) => {
    if (acc[response]) {
        acc[response] += 1
    } else {
        acc[response] = 1
    }
    return acc
}, {});
console.log(wordsCount);

