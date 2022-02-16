// X // AAU I will be presented with a fact
// X AAU I will click a button for true or false. 
//      the buttons will animate green for true and red for false,
//  X    this animation will be delayed 1-2 seconds.
//  X AAU I will see a message on the bottom lines of the card related t

//  AAU the game will be over after three strikes


/*-------------------------------- Constants --------------------------------*/

const data = [
{fact: `fact`, category: `category`, answer: `true`, mess: `bye bye`},    
{fact: `'I am I because my little dog knows me.'\n\ Wrote Gertrude Stein.`, category: 'literature',
answer: 'true', mess: `The little dog was a poodle named basket.`}, 
{fact: `Wayne Gretzky retired with 51 NHL records.`, category: 'sports', answer: 'false', mess: `Gretzky held 61 NHL records when he retired in 1999.`}, 
{fact: `While Brian Cox was playing Hannibal Lector in Manhunter, Anthony Hopkins was playing King Lear on-stage in England. While Anthony Hopkins was playing Hannibal Lector in Silence of the Lambs, Brian Cox was playing King Lear on stage in England.`, category: 'the movies', answer: 'true', mess: 'Crazy, right?'},
{fact: `The famous bass lines from Seinfeld were performed by Red Hot Chili Peppers founding member Flea`, 
category: 'television', answer: 'false', mess: 'Composer Jonathan Wolf actually used a synthesizer for his iconic theme.'}]

console.log(data)
console.log(data[0].fact)


/*-------------------------------- Variables --------------------------------*/

// The reason I'm going to store that message in a variable is so that I can set it during any number of different functions that I write and then once that function invokes render, we can display whatever that message is in our render. I set message as a variable and then render this message to an element that we set as a CER, whenever my render function is invoked. 
let player, score, fact, message, category, theAnswer, usedFacts = []
let hasAnswered = false
/*------------------------ Cached Element References ------------------------*/
const notecard = document.querySelector(".grid-container")
const displayCategory = document.querySelector("#category")
const displayFact = document.querySelector("#fact")
const displayScore = document.querySelector("#display-score")
const displayMessage = document.querySelector("#message")
const form = document.querySelector(".buttons")
const trueBtn = document.querySelector("#true")
const falseBtn = document.querySelector("#false")
const gameOver = document.querySelector("#game-over")
gameOver.setAttribute("hidden", true);

/*----------------------------- Event Listeners -----------------------------*/
trueBtn.addEventListener("click", handleClickTrue)
falseBtn.addEventListener("click", handleClickFalse)
/*-------------------------------- Functions --------------------------------*/
init();
function init(){
    score = 0  
    turn = 0
    getFacts();
    render();
}   

function getFacts() {
    if(turn === 5) {
        gameOver.removeAttribute("hidden")
        form.setAttribute("hidden", true)
    }
    let getFact = data.pop()
    usedFacts.push(getFact)
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
            score = score + 1;
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

