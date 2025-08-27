  
   
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
            
        }
        else{
            result = "You Lose :( ";
            ++loss;
            
        }
        document.getElementById("loss").innerHTML = (`loss: ${loss}`);
        document.getElementById("win").innerHTML = (`win: ${win}`);
        document.getElementById("draw").innerHTML = (`draw: ${draw}`);
        document.getElementById("result").innerHTML = result;
}   

function reset(){
    
    win = 0;
    loss = 0;
    draw = 0;
    document.getElementById("loss").innerHTML = (`loss: ${loss}`);
    document.getElementById("win").innerHTML = (`win: ${win}`);
    document.getElementById("draw").innerHTML = (`draw: ${draw}`);
}