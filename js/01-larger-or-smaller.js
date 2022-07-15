let x = parseInt(prompt(`Please enter the first integer number`));
let y = parseInt(prompt(`Please enter the second integer number`));
// Methode 1 
if (x > y) {
    alert(`The larger of the two numbers is ${x}`);
} ;
if (x < y) {
        alert(`The larger of the two numbers is ${y}`);
} ;
if (x === y) {
        alert(`The two numbers are equal, please re-enter them.`)        
};

// Method 2
if (x > y && x != y) {
    alert(`The larger of the two numbers is ${x}`);
} else if (x < y && x != y) {
        alert(`The larger of the two numbers is ${y}`);
} else if (x === y) {
        alert(`The two numbers are equal, please re-enter them.`)        
};
