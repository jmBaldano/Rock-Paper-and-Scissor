  
   
    let win = 0;
    let loss = 0;
    let draw = 0;
   
    
    function playGame(userChoice){
        const randomNumber = Math.random();
        let computerChoice ="";
        let result = "";
        


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

        if(userChoice === computerChoice)  {
            result = "It's a Draw";
            ++draw;
            
        }
        else if(
            (userChoice === `Rock` && computerChoice === `Scissor`) || 
            (userChoice === `Paper` && computerChoice === `Rock`) ||
            (userChoice === `Scissor` && computerChoice === `Paper`)
        ){
            result = "You Win!!";
            ++win;
            launchConfetti()
            
        }
        else{
            result = "You Lose :(";
            ++loss;
            document.getElementById("modalL").style.display = "flex";                 
        }

        if(userChoice === `Rock`){
            document.getElementById("rockPlayer").style.display = "flex";
        }

        // else if(userChoice === `Paper` ){
        //     document.getElementById("paperComputer").style.display = "flex";
        // }


        if(computerChoice === `Rock`){
              document.getElementById("rockComputer").style.display = "flex";
        }

        document.getElementById("loss").innerHTML = (`loss: ${loss}`);
        document.getElementById("win").innerHTML = (`win: ${win}`);
        document.getElementById("draw").innerHTML = (`draw: ${draw}`);
        document.getElementById("result").innerHTML = result;
}   

    function playAgain(){
        document.getElementById("modalL").style.display = "none";
    }

    function reset(){
        
        win = 0;
        loss = 0;
        draw = 0;
        document.getElementById("loss").innerHTML = (`loss: ${loss}`);
        document.getElementById("win").innerHTML = (`win: ${win}`);
        document.getElementById("draw").innerHTML = (`draw: ${draw}`);
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
//add a feature: a surprise prize when they get 10 wins then add a plotwist,
//when they reached 9 wins and they about to win again, the computer will draw a thunder so that the player cannot reach 10 wins
//and not be able to get their surprise