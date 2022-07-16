let PromptPlay = prompt("Are you ready to play the game?");
let isDirection, rateGame;

if (PromptPlay.toUpperCase() == 'YES') {
    alert("Please continue,and pay attention to the alert information for game rules.");
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');
    isDirection = prompt('Which direction would you like to head (please enter forward, left, or right).');
    switch (isDirection) {
        case "left":
            alert("alert, Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
            break;
        case "forward":
            alert("alert, You walk 100 yards and safely make your way out of the cave.");
            break;
        case "right":
            alert("alert, You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
            break;
        default:
            alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
    }; // End switch()
    rateGame = parseInt(prompt("Please rate the game between 1 and 10."));
    if (rateGame< 1 || rateGame > 10) {
        alert("Thank you, you will quit. See you next time.");
    } else if (rateGame >= 6 && rateGame <= 10) {
        alert("Thank you. Please play it again.");
    } else if (rateGame >= 1 && rateGame <=5) {
        alert("Thank you. We are working hard to improve the game.")
    }; // End if...nested else if for rate game
} else {
    document.write ("Thank you! Welcome back to  play again sometime");
}  // End if...else for playing or not playing the game





