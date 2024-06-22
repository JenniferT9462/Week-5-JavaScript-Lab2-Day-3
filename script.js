function startQuest() {
    //Create an empty object for the game choices
    let game = {};
    //Accessing the object and saving choice1 and getting user to make a choice through the prompt
    game.choice1 = prompt("You are traveling down a dirt path in a forest; you come to a fork in the road. Where do you want to go? Type left or right.");
    //Checking to see if the user choice1 is left
    if(game.choice1 === "left") {
        //If their choice1 was "left" then prompt the user to choice2 and saves it to the game object
        game.choice2 = prompt("You come to a lake, there is a castle in the middle of the lake. Do you 'wait' and look for a boat or 'swim' across? Type wait or swim. ");
    //Checking to see if choice1 is "right" if it is then game over
    }else if(game.choice1 === "right") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "red";
        gameParagraph.innerHTML = "You fell in a hole. How embarrassing for you!";
        gameParagraph.style.backgroundColor = "black";
        gameParagraph.style.color = "red"
    }
    //Checking to see if choice2 is "wait"
    if(game.choice2 === "wait") {
        //If choice2 is "wait" them prompt the user to make third choice and saves the response to game object as choice3
        game.choice3 = prompt("You find a raft and get to the castle unharmed. Inside the castle there are 3 doors that are gold, purple and green. Which color do you choose? Type gold, purple or green.");
    //Checking to see if choice2 is "swim" if it is game over
    }else if(game.choice2 === "swim") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "Navy";
        gameParagraph.innerHTML = "You were eaten by a shark. Blood everywhere!";
        gameParagraph.style.backgroundColor = "navy";
        gameParagraph.style.color = "red";
    }
    //Checking to see if choice3 is "gold" if it is game over
    if(game.choice3 === "gold") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "green";
        gameParagraph.innerHTML = `You chose the <strong>${game.choice3}</strong> door. You were cooked and eaten by the dragon!!`;
        gameParagraph.style.backgroundColor = "green";
        gameParagraph.style.color = "red"
    //Checking to see if choice3 is "green" if it is game over
    }else if(game.choice3 === "green") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "brown";
        gameParagraph.innerHTML = `You chose the <strong>${game.choice3}</strong> door. You fell into a fiery pit!!`;
        gameParagraph.style.backgroundColor = "brown";
        gameParagraph.style.color = "red"
    //Checking to see if choice3 is "purple" user WON
    }else if(game.choice3 === "purple") {
        gameHeader2.innerHTML = "Victory";
        gameParagraph.innerHTML = `You chose the <strong>${game.choice3}</strong> door. You found the princess and together you defeated the dragon!`;
        gameParagraph.style.backgroundColor = "purple";
        gameParagraph.style.color = "gold";
        gameHeader2.style.backgroundColor = "gold";
        gameHeader2.style.color = "purple";
        
    }
        


}
startQuestButton.onclick = startQuest;


function guessingGame() {
    // Generate a random number
    let getRandom = Math.floor(Math.random()*10) + 1;  
    
    //Keeping track of guesses     
    let guess = 1;

    // Getting user to guess a number and converting their response to a number
    let number = parseInt(prompt("Guess a number from 1 to 10: "));

    // While the random number and user number are different
    while (number != getRandom) {
        // Check to see if the user number is greater than the random number
        if (number > getRandom) {
            number = parseInt(prompt("OOPS Sorry!! try a smaller number")); //Asks user to try a smaller number and saves it to number variable
            guess++; //Adds to the guess count
        }
        //Check to see if user number is less than the random number
        else if (number < getRandom) {
            number = parseInt(prompt("OOPS! Sorry!! Try a greater number")); //Asks user to try  a greater number and saves it to number variable
            guess++; //Adds to the guess count
        }
    } 
    //If the numbers are not different anymore and are equal to each other print out the html that the user won and how many guesses it took them
    if (number === getRandom) {
        guessingGameHeader.innerHTML = "You Won!!!";
        guessingGameParagraph.innerHTML = `You guessed the right number in ${guess} guesses!`;
    }
}
guessingGameButton.onclick = guessingGame;

