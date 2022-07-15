let choice = prompt(`Please select heads or tails`);
let randomNum = Math.round(Math.random());  // produce a random number and use round() to get a integer number
let coinFlip = randomNum;

console.log(coinFlip); 

// Method 1: if...else if nested if ... else if 
if (coinFlip <= 0) {
    document.write ('It\'s heads. ');
    if (choice === `heads`) {
        alert('The flip was heads and you chose heads...you win!');
    } else if (choice === `tails`) {
        alert('The flip was heads but you chose tails...you lose!');
    }; // End if...else for heads
}  else if (coinFlip >= 1 ) {
    document.write ('It\'s tails. ');
    if (choice ===`tails`) {
        alert('The flip was tails and you chose tails...you win!');
    } else if (choice === `heads`) {
        alert('The flip was tails but you chose heads...you lose!');
    }; //End if...else for tails
} // End if for tails

// Method 2: if nested if...else if
if (coinFlip <= 0) {
    document.write ('It\'s heads. ');
    if (choice === `heads`) {
        alert('The flip was heads and you chose heads...you win!');
    } else if (choice === `tails`) {
        alert('The flip was heads but you chose tails...you lose!');
    }; // End if...else for heads
}  // End if for heads
if (coinFlip >= 1 ) {
    document.write ('It\'s tails. ');
    if (choice ===`tails`) {
        alert('The flip was tails and you chose tails...you win!');
    } else if (choice === `heads`) {
        alert('The flip was tails but you chose heads...you lose!');
    }; //End if...else for tails
} // End if for tails

