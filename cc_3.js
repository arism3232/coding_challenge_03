// Task 1 - Product Price Managagement Scenario

let prices = [10, 20, 30, 40, 50]; // Declaring an array prices.
prices.push(60); // Adding a new price to array.
prices.shift(); // Removing the first price from array.
console.log("Updated Price List:", prices); // Logging updated price list to console.


// Task 2 - Modifying Customer Orders Scenario

let orders = [12, 13, 14, 15, 16]; // Declaring an array orders.
orders[2] += 5; // Increasing third order by 5.
let totalNumberofOrders = orders.reduce((total, quantity) => total + quantity, 0); // Calculating total numbers of orders.
console.log("Updated Order List:", orders);
console.log("Total Number of Orders:", totalNumberofOrders); // Logging updated array and total order count to console.