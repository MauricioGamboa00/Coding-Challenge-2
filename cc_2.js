// Task 1 Working With Arrays
let products = ["Phone", "Mouse", "Laptop", "Headset", "Desktop Computer"];

products.push("Webcam");

products.pop();

console.log("Updated List of Available Products:", products);

// Task 2 Accessing and Modifying Arrays
let scores = [98, 81, 70, 93, 42];
scores[1] = 86;
let averageScore = (scores[0] + scores[1] + scores[2] + scores[3] + scores[4])/scores.length;

console.log("Updated List of Scores:", scores);
console.log("Average Of the Scores:",averageScore);

// Task 3 Working With Objects
let employee = {
    name: "Mark Hill",
    age: 29,
    department: "Marketing",
    isActive: true
};
employee.department = "Sales";
employee.position = "Associate";
console.log("Updated Employee Record:", employee);

// Task 4 Array of Objects
let customers = [
    { name: "Jane Johnson", email: "Janejohnson2@gmail.com", purchaseAmount: 150 },
    { name: "Tyreek Hill", email: "TyreekHill@gmail.com", purchaseAmount: 340 },
    { name: "Hank Myers", email: "Hankmyers76@gmail.com", purchaseAmount: 122 }
]; 
customers.push({ name: "Walter Black", email: "BlackWalter02@gmail.com", purchaseAmount: 455 });
console.log("Customer List:", customers);

// Task 5 Object Methods
let order = {
    orderID: 91,
    customerName: "Frank Ocean",
    amount: 750,
    calculateTax: function() {
        return this.amount * .10;
    }
    
};
    
console.log("Order Details:", `Order ID: ${order.orderID}, Customer: ${order.customerName}, Amount: ${order.amount}, Tax: ${order.calculateTax()}`);
