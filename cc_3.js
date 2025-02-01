// Task 1 - Product Price Managagement Scenario

let prices = [10, 20, 30, 40, 50]; // Declaring an array prices.
prices.push(60); // Adding a new price to array.
prices.shift(); // Removing the first price from array.
console.log("Updated Price List: ", prices); // Logging updated price list to console.



// Task 2 - Modifying Customer Orders Scenario

let orders = [12, 13, 14, 15, 16]; // Declaring an array orders.
orders[2] += 5; // Increasing third order by 5.
let totalNumberofOrders = orders.reduce((total, quantity) => total + quantity, 0); // Calculating total numbers of orders.
console.log("Updated Order List: ", orders);
console.log("Total Number of Orders: ", totalNumberofOrders); // Logging updated array and total order count to console.



// Task 3 - Employee Performance Tracking Scenario

let employee = {
    name: "Shin Ryujin",
    role: "Sales Person",
    performanceScore: 80,
    isActive: true,
}; // Declaring object employee with properties.
employee.performanceScore = 85; // Updating the performanceScore property.
employee.promotionEligible = true; 
if (employee.performanceScore <= 90) {
    employee.promotionEligible = false
}; // Adding new property promotionEligible with boolean value.
console.log("Updated Employee Performance Tracking: ", employee); // Logging updated employee object to console.
