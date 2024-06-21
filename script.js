function startQuest() {
    let game = {};

    game.choice1 = prompt("You are traveling down a dirt path in a forest; you come to a fork in the road. Where do you want to go? Type left or right.");
    
    if(game.choice1 === "left") {
        game.choice2 = prompt("You come to a lake, there is a castle in the middle of the lake. Do you 'wait' and look for a boat or 'swim' across? Type wait or swim. ");
    }else if(game.choice1 === "right") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "red";
        gameParagraph.innerHTML = "You fell in a hole. Game Over!";
        gameParagraph.style.backgroundColor = "black";
        gameParagraph.style.color = "red"
    }
    if(game.choice2 === "wait") {
        game.choice3 = prompt("You find a raft and get to the castle unharmed. Inside the castle there are 3 doors; gold door, purple door and a green door. Which color do you choose?");
    }else if(game.choice2 === "swim") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "Navy";
        gameParagraph.innerHTML = "You were eaten by a shark. Game Over!";
        gameParagraph.style.backgroundColor = "navy";
        gameParagraph.style.color = "red";
    }
    if(game.choice3 === "gold") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "green";
        gameParagraph.innerHTML = `You chose the <strong>${game.choice3}</strong> door. You were cooked and eaten by the dragon!!`;
        gameParagraph.style.backgroundColor = "darkgreen";
        gameParagraph.style.color = "red"
    }else if(game.choice3 === "green") {
        gameHeader2.innerHTML = "Game Over";
        gameHeader2.style.color = "brown";
        gameParagraph.innerHTML = `You chose the <strong>${game.choice3}</strong> door. You fell into a fiery pit!!`;
        gameParagraph.style.backgroundColor = "brown";
        gameParagraph.style.color = "red"
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
