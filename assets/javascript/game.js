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

document.onkeyup = function(event) {
    guessesLeft--;
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
yourGuess.push(userGuess);
updateGuessesLeft();
updateGuessesSoFar();

    if (guessesLeft > 0){
        if (userGuess == letterToGuess){
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("You are a psychic!");
            reset();
        }
    }else if(guessesLeft == 0){
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, you are not a psychic!");
        reset();
    }
};