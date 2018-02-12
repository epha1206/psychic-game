var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var yourGeuss = [];
var lettersToGuess = null;

var computerGuess = computerChoices [math.floor(math.random() * computerChoices.length)];
var updateGuessesLeft = function() {
    document.querySelector('#guessLeft') .innerHTML = "Geusses left: " + guessesLeft;``
};

var updateLetterToGuess = function() {
    this.computerChoices[math.floor(math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector('#let').innerHTML = "Your guesses so far: " + yourGuess.join(', ');
};

var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    yourGuess = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();