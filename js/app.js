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
const notecard = document.querySelector(".notecard")
const displayCategory = document.querySelector("#category")
const displayFact = document.querySelector("#fact")
const displayScore = document.querySelector("#display-score")
const displayMessage = document.querySelector("#message")
const form = document.querySelector(".buttons")
const trueBtn = document.querySelector("#true")
const falseBtn = document.querySelector("#false")
const gameOver = document.querySelector("#game-over")
gameOver.setAttribute("hidden", true);

console.log(notecard, displayCategory, displayFact, displayScore, displayMessage, trueBtn, falseBtn)
// console.log(form)



/*----------------------------- Event Listeners -----------------------------*/
trueBtn.addEventListener("click", handleClickTrue)
falseBtn.addEventListener("click", handleClickFalse)
/*-------------------------------- Functions --------------------------------*/
init();
function init(){
    console.log('init invoked')
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
    console.log(getFact)
    usedFacts.push(getFact)
    console.log(usedFacts)
    fact = getFact.fact;
    category = getFact.category
    theAnswer = getFact.answer
    message = getFact.mess
   
    render();
}
console.log(fact, category, theAnswer, message)


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
            // hasAnswered = true
            score = score + 1;
            console.log(score)
            console.log(turn)
            console.log(usedFacts.length)
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
        console.log(score)
        console.log(turn)
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
        console.log(turn)
        console.log(score)
        displayScore.textContent = ("score: " + score + "/" + turn);
        setTimeout(function () {
            displayMessage.removeAttribute("hidden")
            displayMessage.textContent = message

        }, 1000)

        setTimeout(function () {
            hasAnswered = false
            getFacts();
            render();

        }, 3000)
    } else {
        return
    }
}

// breaks - 35 min; ask for clarity; engineering

// create boolean value let hasanswered = false



//render => take data and display
    // 
//(second render) => respond to player guess -- handleClick




// this is a game called "facts"

// in this game, a player will be presented a card with a quote, number, or bit of information. the player determines whether the "fact" will be true or false. they earn points for answering correctly, and receive a strike for answering incorrectly, until the player earns a third strike, ending the game. point values increase as the game switches from easy, to medium, and difficult. 

// categories: music, movies, sports, quotes, academia

// here is what a card will look like in "facts"





// - Add the HTML for card and t/f buttons 
// - Add a container element for the card components to be appended to
// - Add cached element references for card and for each of the buttons
// - Add a cached element reference for the container element in the JS file
// - Add event listeners to each of the buttons
// - Write and export functions to access data
// - Import the functions that will access data
// - Ensure the functions that we have built will work as intended.
// - Tweak event listeners so that the quote is stored in a variable
// - Create a test card element with Bootstrap
// - Create a render function
// - Add a function to handle appending a card to the container element
// - Style each card differently, based on who the quote is from
// - Add a button to the card so that we can remove the quote from the array
// - When the delete button is clicked, remove the quote from the array
// - Add responsive design
// - Add Google Fonts
// - Add the HTML for a Light/Dark Mode button 
// - Add light/dark mode 