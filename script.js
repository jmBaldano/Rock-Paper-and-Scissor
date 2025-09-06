        const score = {
        win: 0,
        loss: 0,
        draw: 0,
        }
   function playGame(userChoice){
        const randomNumber = Math.random();
        let computerChoice ="";
        let result = "";
// reset the hands
        const handResult = [
            "rockPlayer", "paperPlayer", "scissorPlayer",
            "rockComputer", "paperComputer", "scissorComputer"
        ];
        handResult  .forEach(id => {
            document.getElementById(id).style.display = "none";
        })
        

//generate random move based on random number 0 to 1
        if(randomNumber >= 0 && randomNumber < 1/3){
            computerChoice= "Rock";
        }
        else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerChoice ="Paper";
        }
        else{
            computerChoice = "Scissor"
        }

        document.getElementById("userChoice").innerHTML =(`You picked ${userChoice}`);
        document.getElementById("computerChoice").innerHTML=(`I picked ${computerChoice}`);

// checks if win, lose, or a draw
        if(userChoice === computerChoice)  {
            result = "Draw";
            score.draw += 1;     
        }
        else if(
            (userChoice === `Rock` && computerChoice === `Scissor`) || 
            (userChoice === `Paper` && computerChoice === `Rock`) ||
            (userChoice === `Scissor` && computerChoice === `Paper`)
        ){
            result = "You Win!!";
            score.win += 1;
            launchConfetti();
            
        }
        else{
            result = "You Lose :(";
            score.loss += 1;             
        }

// display the user hand move
        if(userChoice === `Rock`){
            document.getElementById("rockPlayer").style.display = "block";
        }

        else if(userChoice === `Paper` ){
            document.getElementById("paperPlayer").style.display = "block";
        }
        else if(userChoice === `Scissor` ){
            document.getElementById("scissorPlayer").style.display = "block";
        }
        
        
// display the computer move
        if(computerChoice === `Rock`){
              document.getElementById("rockComputer").style.display = "block";
        }
        else if(computerChoice === `Paper`){
            document.getElementById("paperComputer").style.display ="block";
        }
        else if(computerChoice === `Scissor`){
            document.getElementById("scissorComputer").style.display ="block";
        }

// pop up modal for winning or losing 10 times
        if(score.loss === 10){
            document.getElementById("modalL").style.display = "block";    
        }
        else if(score.win === 10){
            document.getElementById("modalW").style.display = "block";
        }
// score counter
       updateScore()
        document.getElementById("result").innerHTML = result;
}   

// play again button when the modal for winning or losing 10 times appeared
    function playAgain(){
        document.getElementById("modalL").style.display = "none";
        document.getElementById("modalW").style.display = "none";
        handResult = [
            "rockPlayer", "paperPlayer", "scissorPlayer",
            "rockComputer", "paperComputer", "scissorComputer"
        ];
        handResult.forEach(id => {
            document.getElementById(id).style.display = "none";
        })
         reset();
         document.getElementById("result").innerHTML = "Result";
    }

// update the scoreboard function
    function updateScore(){
        document.getElementById("loss").innerHTML = (`loss: ${score.loss}`);
        document.getElementById("win").innerHTML = (`win: ${score.win}`);
        document.getElementById("draw").innerHTML = (`draw: ${score.draw}`);
    }

// reset the scoreboard
    function reset(){
        
        score.loss = 0;
        score.win = 0;
        score.draw = 0;
        updateScore();
    }

// confetti effects
    function launchConfetti() {
    confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.5 }
    });
    confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 1 }
    });
    }

//add design, like a png image for hands
//add a feature: a surprise prize when they get 10 wins then add a plot twist,
//when they reached 9 wins and they about to win again, the computer will draw a thunder so that the player cannot reach 10 wins
//and not be able to get their surprise

// add a talking cartoon on the side so when the user win, lose or draw the cartoon will be changed and it's depends on the result