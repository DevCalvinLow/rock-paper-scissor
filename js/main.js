let displayResult = document.querySelector('#result')
let displayCompChoice = document.querySelector('#compChoice')
let displayScore = document.querySelector('#score')

let userPoints = 0
let compPoints = 0

function rockPaperScissor () {
    let computerChoice = Math.random()
    if (computerChoice < 0.33) {
        return "Rock"
    } else if (computerChoice < 0.66){
        return "Paper"
    } else {
        return "Scissor"
    }
}

function playGame() {
    let compChoice = rockPaperScissor()
    displayCompChoice.innerText = compChoice


   // let userChoice = document.querySelector('button').value


    if (userChoice == "Rock" && compChoice == "Scissor" || userChoice == "Paper" && compChoice == "Rock" || userChoice == "Scissor" && compChoice == "Paper"){
        displayResult.innerText = "You Win"

    } else if (userChoice == "Rock" && compChoice == "Paper" || userChoice == "Paper" && compChoice == "Scissor" || userChoice == "Scissor" && compChoice == "Rock"){
       displayResult.innerText = "Computer Wins"


} else {
        displayResult.innerText = "You both tie!"

}

}



document.querySelector('#Rock').addEventListener('click',playGame)
document.querySelector('#Paper').addEventListener('click',playGame)
document.querySelector('#Scissor').addEventListener('click',playGame)

