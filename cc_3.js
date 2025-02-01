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
    employee.promotionEligible = false;
}; // Adding new property promotionEligible with boolean value.
console.log("Updated Employee Performance Tracking: ", employee); // Logging updated employee object to console.



// Task 4 - Customer Feedback Records Scenario

let feedback = [
    {customerName: "Lee Chaeryeong", feedbackText: "Really great service.", rating: 9},
    {customerName: "Hwang Yeji", feedbackText: "Good service but needs more inventory.", rating: 7},
    {customerName: "Choi Jisu", feedbackText: "Always pleasant shopping here, the staff is really friendly and helpful!", rating: 10}
]; // Declaring array feedback containing three objects with properties. 
feedback.push(
    {customerName: "Shin Yuna", feedbackText: "They never have the things I need.", rating: 3}
); // Adding new feedback object to array.
console.log("Customer Feedback Records: ", feedback); // Logging entire feedback list to console. 



// Task 5 - Inventory Management System Scenerio

let inventory = {
    itemName: "Perfume",
    stockCount: 15,
    price: 40,
}; // Declaring object inventory with properties. 
inventory.calculateTotalValue = function() {
    return this.stockCount * this.price;
}; // Adding method calculateTotalValue that returns total value.
console.log("Inventory Details: ", inventory); 
console.log("Total Value: ", inventory.calculateTotalValue()); // Logging inventory details and total value to console.