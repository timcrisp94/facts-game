// X // AAU I will be presented with a fact
// X AAU I will click a button for true or false. 
//      the buttons will animate green for true and red for false,
//  X    this animation will be delayed 1-2 seconds.
//  X AAU I will see a message on the bottom lines of the card related t

//  AAU the game will be over after three strikes


/*-------------------------------- Constants --------------------------------*/

let data = [
{fact: `Though Aretha Franklin's version of "Respect" is the most well-known, it was originally recorded by the song's writer, Stevie Wonder.`, category: `category`, answer: `false`, mess: `That would be Otis Redding.`},    
{fact: `'I am I because my little dog knows me.'\n\ Wrote Gertrude Stein.`, category: 'literature',
answer: 'true', mess: `The little dog was a poodle named basket.`}, 
{fact: `Wayne Gretzky retired with 51 NHL records.`, category: 'sports', answer: 'false', mess: `Gretzky held 61 NHL records when he retired in 1999.`}, 
{fact: `Jack Nicholson made a then record $60 million for his role as the Joker in 1989's Batman`, category: 'the movies', answer: 'true', mess: 'Nicholson earned points off the box office AND on merchandise'},
{fact: `The famous bass lines from Seinfeld were performed by Red Hot Chili Peppers founding member Flea`, 
category: 'television', answer: 'false', mess: 'Composer Jonathan Wolf actually used a synthesizer for his iconic theme.'}]

console.log(data)
console.log(data[0].fact)


/*-------------------------------- Variables --------------------------------*/

let player, score, fact, message, category, theAnswer, usedFacts = []
let hasAnswered = false

let countdownEl = document.getElementById("countdown")
const timerEl = document.getElementById("timer");
const goBtn = document.getElementById("go-button");



goBtn.addEventListener("click", handleClickGo);

function handleClickGo(event) {
    let timeLeft = 60;
    console.log(timeLeft);
    let timer = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft = timeLeft - 1;
        if (timeLeft < 0) {
            countdownEl.textContent = `That's it bubba!`
            clearInterval(timer)
        }
        console.log(timeLeft);


    }, 1000)
    goBtn.setAttribute = ("hidden", true)
}


/*------------------------ Cached Element References ------------------------*/
const notecard = document.querySelector(".grid-container")
const displayCategory = document.querySelector("#category")
const displayFact = document.querySelector("#fact")
const displayScore = document.querySelector("#display-score")
const displayMessage = document.querySelector("#message")
const form = document.querySelector(".buttons")
const trueBtn = document.querySelector("#true")
const falseBtn = document.querySelector("#false")
const timerBtn = document.querySelector("#timer-btn")


/*----------------------------- Event Listeners -----------------------------*/
trueBtn.addEventListener("click", handleClickTrue)
falseBtn.addEventListener("click", handleClickFalse)
// timerBtn.addEventListener("click", handleClickTimer)
// console.log(timerBtn);
/*-------------------------------- Functions --------------------------------*/
init();
function init(){
    score = 0  
    turn = 0
    getFacts();
    render();
}   


function getFacts() {
    if(usedFacts.length === 5) {
        trueBtn.setAttribute("hidden", true)
        falseBtn.setAttribute("hidden", true)
    } 
    let randomIndex = Math.floor(Math.random()*data.length)
    let getFact = data[randomIndex]
    console.log(getFact);
    data.splice(randomIndex, 1);
    usedFacts.push(getFact)
    console.log(usedFacts)
    fact = getFact.fact;
    category = getFact.category
    theAnswer = getFact.answer
    message = getFact.mess
    
    render();
}

function render() {
    displayFact.textContent = fact;
    displayCategory.textContent = ('category: ' + category)
    displayMessage.setAttribute("hidden", true)
    trueBtn.style.backgroundColor = "#EFEFEF" 
    trueBtn.style.color = "black"
    falseBtn.style.backgroundColor = "#EFEFEF"
    falseBtn.style.color = "black"
    
    
}
function handleClickTrue(event) {
    event.preventDefault();
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
        hasAnswered = true;
        secondRender();
        } else {
            return
        }
    
}

function secondRender() {
    if (turn < usedFacts.length) {
        turn++
        displayScore.textContent = ("score: " + score + "/" + turn);
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

