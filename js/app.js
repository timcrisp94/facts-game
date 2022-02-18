/*-------------------------------- Constants --------------------------------*/

let data = [
{fact: `Though Aretha Franklin's version of "Respect" is the most well-known, it was originally recorded by the song's writer, Stevie Wonder.`, category: `music`, answer: `false`, mess: `That would be Otis Redding.`},
{fact: `General Relativity: 1915.`, category: `academia`, answer: `true`, mess: `Einstein's theory was confirmed by the total solar eclipse of May 29, 1919.`}, 
{fact: `'I am I because my little dog knows me.' Wrote Gertrude Stein.`, category: 'literature',
answer: 'true', mess: `The little dog was a poodle named Basket.`}, 
{fact: `The octave and major 5th were discovered by Pythagoras.`, category: 'music', answer: 'true', mess: 'The triangle guy!'},
{fact: `Wayne Gretzky retired with 51 NHL records.`, category: 'sports', answer: 'false', mess: `Gretzky held 61 NHL records when he retired in 1999.`}, 
{fact: `Jack Nicholson made a then-record $60 million for his role as the Joker in 1989's Batman.`, category: 'the movies', answer: 'true', mess: 'Nicholson earned points off the box office AND on merchandise.'},
{fact: `The famous bass lines from Seinfeld were performed by Red Hot Chili Peppers founding member Flea.`, 
category: 'television', answer: 'false', mess: 'Composer Jonathan Wolf actually used a synthesizer for his iconic theme.'}]

/*-------------------------------- Variables --------------------------------*/
let score, fact, message, category, theAnswer, usedFacts = []
let hasAnswered = false

let countdownEl = document.getElementById("countdown")
const timerEl = document.getElementById("timer")
/*------------------------ Cached Element References ------------------------*/
const displayCategory = document.querySelector("#category")
const displayFact = document.querySelector("#fact")
const displayScore = document.querySelector("#display-score")
const displayMessage = document.querySelector("#message")
const trueBtn = document.querySelector("#true")
const falseBtn = document.querySelector("#false")
const goBtn = document.querySelector("#go-button")
const countdown = document.querySelector("#countdown")
const trueBtnSays = new Audio("../audio/camera.wav")
const falseBtnSays = new Audio("../audio/typewriter.wav")
const goBtnSays = new Audio("../audio/click.wav")

/*----------------------------- Event Listeners -----------------------------*/
trueBtn.addEventListener("click", handleClickTrue)
falseBtn.addEventListener("click", handleClickFalse)
goBtn.addEventListener("click", handleClickGo);
/*-------------------------------- Functions --------------------------------*/
init();
function init(){
    score = 0  
    turn = 0
    trueBtn.setAttribute("hidden", true)
    falseBtn.setAttribute("hidden", true)
    getFacts();
    render();
}   

function handleClickGo(event) {
    let timeLeft = 60
    goBtnSays.volume = .10
    goBtnSays.play()
    goBtn.setAttribute("hidden", true)
    trueBtn.removeAttribute("hidden")
    falseBtn.removeAttribute("hidden")
    let timer = setInterval(function () {
        timerEl.textContent = timeLeft
        timeLeft = timeLeft - 1
        if (timeLeft < 0) {
            trueBtn.setAttribute("hidden", true)
            falseBtn.setAttribute("hidden", true)
            displayFact.setAttribute("hidden", true)
            displayCategory.setAttribute("hidden", true)
            displayMessage.textContent = ("You scored " + score + " out of 5! And that's a fact!")
            clearInterval(timer)
        }
    }, 1000)
}

function getFacts() {
    if (usedFacts.length >= 5) {
        countdown.style.color = "white"
        displayMessage.textContent = ("You scored " + score + " out of 5! And that's a fact!")
        displayMessage.style.color = "black"
    }
    let randomIndex = Math.floor(Math.random() * data.length)
    let getFact = data[randomIndex]
    data.splice(randomIndex, 1)
    usedFacts.push(getFact)
    fact = getFact.fact
    category = getFact.category
    theAnswer = getFact.answer
    message = getFact.mess
    render();
}

function render() {
    if(usedFacts.length > 5){
        trueBtn.setAttribute("hidden", true)
        falseBtn.setAttribute("hidden", true)
        displayFact.setAttribute("hidden", true)
        displayCategory.setAttribute("hidden", true)
        displayMessage.removeAttribute("hidden")
        displayMessage.textContent("You scored " + score + "out of 5 with " + timeLeft + "to spare!")  
    }
    displayFact.textContent = fact
    displayCategory.textContent = ('category: ' + category)
    displayMessage.setAttribute("hidden", true)
    trueBtn.style.backgroundColor = "#EFEFEF" 
    trueBtn.style.color = "black"
    falseBtn.style.backgroundColor = "#EFEFEF"
    falseBtn.style.color = "black"
    
}

function handleClickTrue(event) {
    event.preventDefault();
    trueBtnSays.volume = .10
    trueBtnSays.play()
    if (!hasAnswered) {
        if (theAnswer === "true") {
            score += 1;
            trueBtn.style.backgroundColor = "green"
            trueBtn.style.color = "white"
            displayMessage.style.color = "green"
        } else {
            falseBtn.style.backgroundColor = "red"
            falseBtn.style.color = "white"
            displayMessage.style.color = "red"
        }
        hasAnswered = true;
        secondRender();
    } else {
        return
    }
    
}

function handleClickFalse(event) {
    event.preventDefault();
    falseBtnSays.volume = .10
    falseBtnSays.play()
    if (!hasAnswered) {
        if (theAnswer === "false") { 
        score += 1;
        falseBtn.style.backgroundColor = "red" 
        falseBtn.style.color = "white"
        displayMessage.style.color = "red"
        } else {
        trueBtn.style.backgroundColor = "green" 
        trueBtn.style.color = "white"
        displayMessage.style.color = "green"
        }
        hasAnswered = true
        secondRender();
        } else {
            return
        }
    
}

function secondRender() {
    if (turn < usedFacts.length) {
        turn++
        displayScore.textContent = ("score: " + score + "/" + turn)
        setTimeout(function () {
            displayMessage.removeAttribute("hidden")
            displayMessage.textContent = message
        }, 1000)
        setTimeout(function () {
            hasAnswered = false
            getFacts();
            render();

        }, 4000)
    } else {
    return
    }
}

