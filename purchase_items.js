// Taask 1:
let isLoggedIn = true; // user is logged in
let cart = [];

if (isLoggedIn) {
    console.log("Welcome! You can add items to your cart.");
} else {
    console.log("Please log in to add items to your cart.");
}

// Task 2:
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Headphones", price: 150 },
    { name: "Keyboard", price: 100 }
];

// Display products list
console.log("Available products:");
for (let i = 0; i < products.length; i++) {
    console.log(i + 1 + ". " + products[i].name + " - $" + products[i].price);
}

// EXTRA CREDIT: 

let userChoice = prompt("Enter the number of the product you'd like to add to your cart (or 'q' to quit):");

while (userChoice !== 'q') {
    let productIndex = parseInt(userChoice) - 1;
    if (productIndex >= 0 && productIndex < products.length) {
        cart.push(products[productIndex]);
        console.log(products[productIndex].name + " added to your cart.");
    } else {
        console.log("Invalid choice. Please select a valid product number.");
    }
    userChoice = prompt("Enter the number of the product you'd like to add to your cart (or 'q' to quit):");
}

cart.push(products[0]); // laptop
cart.push(products[2]); // headphones

console.log("Items in your cart:");
for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].name + " - $" + cart[i].price);
}

// Task 3:
let totalCost = 0;
for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].price;
}

console.log("Total cost of items in your cart: $" + totalCost);
