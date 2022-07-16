let score = parseFloat(prompt('Please enter a numbert within 1 to 100'));

if (score < 0 || score > 100) {
    alert(`The number is not withn 1 to 100, please re-enter a number!`);
} else if (score >= 90 ) {
    console.log(`You received an A`);
} else if (score >= 80 ) {
    console.log(`You received a B`);    
} else if (score >= 70) {
    console.log(`You received a C`);    
} else if (score >= 60) {
    console.log(`You received a D`);
} else if (score < 60 ) {
    alert(`You received an F`);
} // End if ...else if for grade