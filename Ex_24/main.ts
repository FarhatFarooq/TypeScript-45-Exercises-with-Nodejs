// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
// -------------------------------------------------------------------------------

//  • Tests for equality and inequality with strings
let mango = "mango";

console.log("Is mango is equal to mango?");
console.log(mango == "mango");

console.log("\nIs mango is not equal to mango?");
console.log(mango != "mango");


// • Tests using the lower case function
let uppercaseMango = "MANGO";

console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() == "mango");

console.log("\nIs MANGO is not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;

// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//  Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

//  Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty > 10);

// Greater than or Equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or Equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);


// • Tests using "and" and "or" operators

// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

//  Using || (or)
console.log("\n 20 is greater than 40 OR 20 is equal to 20");
console.log(20 > 40 || 20 == 20);

console.log("\n 20 is greater than 40 OR 20 is not equal to 20");
console.log(20 > 40 || 20 != 20);


// • Test whether an item is in a array
let fruits = ["mango", "apple", "orange"];

console.log("\n Is apple include in my fruits array");
console.log(fruits.includes("apple"));

// Not Include 
console.log("\n Is apple not include in my fruits array");
console.log(!fruits.includes("apple"));
