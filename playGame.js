    

const getUserChoice = (userInput) =>{
    userInput = document.getElementById('userInput').value.toLowerCase();

    if (userInput === 'pedra' || userInput === 'papel' || userInput === 'tesoura' || userInput === 'sabre de luz'){
      return userInput;
    } else {
      alert("Parece que você escreveu errado. Digite pedra, papel ou tesoura.")
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber){
      case 0:
        return 'pedra'
        break;
      case 1:
        return 'papel'
        break;
      case 2:
        return 'tesoura'
        break;
    };
  };
  
  const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === 'sabre de luz'){
      return "Secreat Weapon hahaha! Você ganhou! :)" 
    };
    
    if (userChoice === computerChoice){
      return 'Jogo Empatado! :/'
    };
  
    if (userChoice === 'pedra'){
      if (computerChoice === 'papel'){
        return "Você perdeu :("
      } else {
        return "Você ganhou! :)"
      }
    }
  
    if (userChoice === 'papel'){
      if (computerChoice === 'tesoura'){
        return "Você perdeu :("
      } else {
        return "Você ganhou! :)"
      }
    }
  
    if (userChoice === 'tesoura'){
      if (computerChoice === 'pedra'){
        return "Você perdeu :("
      } else{
        return "Você ganhou! :)"
      }
    }
  };
  

  

  const playGame = () =>{
    const userChoice = getUserChoice(userInput);
  
    const computerChoice = getComputerChoice();
  
    console.log(`Você escolheu: ${userChoice}`);
    console.log(`Computador escolheu: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));

    //display at HTML
    const robotChoice = document.getElementById('robotChoice');
    robotChoice.innerHTML = computerChoice;

    const results = document.getElementById('results');
    results.innerHTML = determineWinner(userChoice, computerChoice);
  };
  
  