let displayResult = document.querySelector('#result')
let displayUserChoice = document.querySelector('#userChoice')
let displayCompChoice = document.querySelector('#compChoice')

let displayScore = document.querySelector('#score')
let buttons = document.querySelectorAll('button')


let buttonRock = document.querySelector('#Rock')
let buttonPaper = document.querySelector('#Paper')
let buttonScissor = document.querySelector('#Scissor')



let userPoints = 0
let compPoints = 0

function determineCompChoice () {
    let computerChoice = Math.random()
    if (computerChoice < 0.33) {
        return "Rock"
    } else if (computerChoice < 0.66){
        return "Paper"
    } else {
        return "Scissor"
    }
}


function determineResult(userChoice) {
    let compChoice = determineCompChoice()
    displayUserChoice.innerText =  userChoice
    displayCompChoice.innerText = compChoice

    if (userChoice == "Rock" && compChoice == "Scissor" || userChoice == "Paper" && compChoice == "Rock" || userChoice == "Scissor" && compChoice == "Paper"){
        displayResult.innerText = "You Win"
        userPoints++

    } else if (userChoice == "Rock" && compChoice == "Paper" || userChoice == "Paper" && compChoice == "Scissor" || userChoice == "Scissor" && compChoice == "Rock"){
       displayResult.innerText = "Computer Wins"
       compPoints++

} else {
        displayResult.innerText = "You both tie!"

}

document.querySelector('#score').innerText = `${userPoints} : ${compPoints}`
}


