function startQuest() {
    let game = {};

    game.choice1 = prompt("You are traveling down a dirt path in a forest; you come to a fork in the road. Where do you want to go? Type left or right.");
    
    if(game.choice1 === "left") {
        game.choice2 = prompt("You come to a lake, there is a castle in the middle of the lake. Do you 'wait' and look for a boat or 'swim' across? Type wait or swim. ");
    }else if(game.choice1 === "right") {
        gameParagraph.innerHTML = "You fell in a hole. Game Over!";
    }
    if(game.choice2 === "wait") {
        game.choice3 = prompt("You find a raft and get to the castle unharmed. Inside the castle there are 3 doors; gold door, purple door and a green door. Which color do you choose?");
    }else if(game.choice2 === "swim") {
        gameParagraph.innerHTML = "You were eaten by a shark. Game Over!";
    }
    if(game.choice3 === "gold") {
        gameParagraph.innerHTML = `You chose the ${game.choice3} door. You were cooked and eaten by the dragon!!`;
    }else if(game.choice3 === "green") {
        gameParagraph.innerHTML = `You chose the ${game.choice3} door. You fell into a fiery pit!!`;
    }else if(game.choice3 === "purple") {
        gameParagraph.innerHTML = `You chose the ${game.choice3} door. You found the princess and together you defeated the dragon!`;
    }
        


}
startQuestButton.onclick = startQuest;
