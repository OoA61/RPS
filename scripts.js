var humanScore = 0
var compScore = 0

function getComputerChoice (){
    var random = Math.random();
    if (random >= 0 && random <= .3333) {
        return "r";
    }
    else if (random >= .3334 && random <= .6666) {
        return "p";
    }
    else if (random >= .6667 && random <= .9999) {
        return "s";
    }
}

function playerSelection (clicked_id) {
    let selection = clicked_id

    var selection1
    if (selection == "rock"){
        selection1 = "Rock"
    }
    if (selection == "paper"){
        selection1 = "Paper"
    }
    if (selection == "scissors"){
        selection1 = "Scissors"
    }

    document.getElementById("player_decision").innerHTML = selection1
    console.log(selection)
    let compSelection = getComputerChoice()
    var compSelection1
    if (compSelection == "r") {
        compSelection1 = "Rock"
    }
    if (compSelection == "p") {
        compSelection1 = "Paper"
    }
    if (compSelection == "s") {
        compSelection1 = "Scissors"
    }
    document.getElementById("computer_decision").innerHTML = compSelection1
    console.log(compSelection)
    if (selection == "rock") {
        if (compSelection == "r") {
            scoreTracker("tie")
            console.log("tie")
        }
        if (compSelection == "p") {
            scoreTracker("lose")
            console.log("lose")
        }
        if (compSelection == "s") {
            scoreTracker("win")
            console.log("win")
        }
    }
    if (selection == "paper") {
        if (compSelection == "r") {
            scoreTracker("win")
            console.log("win")
        }
        if (compSelection == "p") {
            scoreTracker("tie")
            console.log("tie")
        }
        if (compSelection == "s") {
            scoreTracker("lose")
            console.log("lose")
        }
    }
    if (selection == "scissors") {
        if (compSelection == "r") {
            scoreTracker("lose")
            console.log("lose")
        }
        if (compSelection == "p") {
            scoreTracker("win")
            console.log("win")
        }
        if (compSelection == "s") {
            scoreTracker("tie")
            console.log("tie")
        }
    }
}


function initiateScore () {
    humanScore = 0
    compScore = 0
    document.getElementById("score").innerHTML = humanScore + " : " + compScore
    console.log("Started Score")
    document.getElementById("resetDiv").style.display = "none"
    document.getElementById("result").style.display = "none"
}

function scoreTracker (result) {
    if (result == "win") {
        humanScore++
        document.getElementById("score").innerHTML = humanScore + " : " + compScore
        if (humanScore == 3) {
            document.getElementById("result").style.display = "block"
            document.getElementById("result").innerHTML = "You Won!"
            document.getElementById("resetDiv").style.display = "block"
        }
        return
    }
    if (result == "lose") {
        compScore++
        document.getElementById("score").innerHTML = humanScore + " : " + compScore
        if (compScore == 3) {
            document.getElementById("result").style.display = "block"
            document.getElementById("result").innerHTML = "You Lost!"
            document.getElementById("resetDiv").style.display = "block"
        }
        return
    }
}
