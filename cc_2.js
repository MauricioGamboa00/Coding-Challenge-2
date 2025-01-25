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

