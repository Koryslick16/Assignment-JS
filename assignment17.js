// Number Guesser


const secretNumber = 68


const guess = 50


if(guess === secretNumber){
    console.log("Congratulations! You guessed the number right!");
}
else if(guess > secretNumber){
    console.log("Sorry, your guess is too high. Try again!");
}
else{
    console.log("Sorry, your guess is too low. Try again");
}