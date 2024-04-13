// Q no-44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Array as a Parameter

function mySandwich(...items: string []){
    console.log("\nI want Sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow Enjoy Sandwich")
};

// Call the function 3 times with different arguments

mySandwich("Ham", "Cheeze", "Lettuce");

mySandwich("Turkey", "Swiss");

mySandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Tomato", "Lettuce");


