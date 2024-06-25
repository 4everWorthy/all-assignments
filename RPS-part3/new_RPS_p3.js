// Array of possible hand options
const hands = ['rock', 'paper', 'scissors'];

// Function to get a random hand
function getHand() {
    // Generate a random number between 0 and 2 and use it to return a random hand
    return hands[parseInt(Math.random() * 10) % 3];
}

// Object representing player1
const player1 = {
    name: "John", // Player's name
    score: 0, // Player's score, starts at 0
    getHand: getHand // Assign the getHand function to player1
};

// Object representing player2
const player2 = {
    name: "Jane", // Player's name
    score: 0, // Player's score, starts at 0
    getHand: getHand // Assign the getHand function to player2
};

// Function to play a round of the game
function playRound() {
    // Get a hand for each player
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    // Initialize the result message
    let resultMessage = `${player1.name} plays ${hand1}, ${player2.name} plays ${hand2}. `;

    // Determine the result of the round
    if (hand1 === hand2) {
        // It's a tie
        resultMessage += "It's a tie!";
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        // Player1 wins
        player1.score++; // Increment player1's score
        resultMessage += `${player1.name} wins!`;
    } else {
        // Player2 wins
        player2.score++; // Increment player2's score
        resultMessage += `${player2.name} wins!`;
    }

    // Update the result message in the HTML
    document.getElementById('result').innerText = resultMessage;
    // Update player1's score in the HTML
    document.getElementById('player1-score').innerText = `${player1.name}: ${player1.score}`;
    // Update player2's score in the HTML
    document.getElementById('player2-score').innerText = `${player2.name}: ${player2.score}`;
}

// Add an event listener to the button to play a round when clicked
document.getElementById('play-round').addEventListener('click', playRound);
