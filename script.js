let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");


const genComputerChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = () =>{
   // console.log("Game was Draw.");
    msg.innerText = "Game was draw.Play again"; 
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) =>{
        if(userWin){
           // console.log("You Win");
            msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorePara.innerText = userScore;
        } 
        else{
           // console.log("You Lose");
            msg.innerText = `You Lose.     ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compScorePara.innerText = compScore;
        }
}

const playGame = (userChoice) =>{
  //  console.log("User Choice = ",userChoice);
    //Generate computer choice
    const compChoice = genComputerChoice();
 //   console.log("Comp Choice = ",compChoice);
    
    
    if(userChoice == compChoice){
        //Draw Game
        drawGame(); 
    }

    else{
        let userWin = true;
        if(userChoice == "rock"){

            userWin = compChoice == "paper" ? false : true; 
        }
        else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true;
        }
        else {
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",id);
        playGame(userChoice);
    });
});