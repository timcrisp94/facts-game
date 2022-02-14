// X // AAU I will be presented with a fact
//  AAU I will click a button for true or false. 
//      the buttons will animate green for true and red for false,
//      this animation will be delayed 1-2 seconds.
//  AAU I will see a message on the bottom lines of the card related t
//     to the above "fact" (player answer, state of the fact)
//     for an answer (true, true) = [congratulations]
//     for an answer (true, false) && (false, false)= [ammended]
//     for an answer (false, true) = [noSeriously]
//  AAU I will receive points for each correct answer
//  AAU the difficulty of the game will increase
//     from easy to medium to difficult
//  AAU I will receive a tick mark in the top right corner of the card for each incorrect answer
//  AAU the game will be over after three strikes


/*-------------------------------- Constants --------------------------------*/
const data = [
{fact: `'I am I because my little dog knows me.' Wrote Gertrude Stein.`, category: 'literature', points: 50,
answer: ('true'), mess: `The little dog, a poodle named basket.`,
}, 
{fact: `Wayne Gretzky retired with 51 NHL records.`, category: 'sports', points: 50,
answer: ('false'), mess: `Gretzky held 61 NHL records when he retired in 1999.`
}]
console.log(data)
console.log(data[0].fact)


/*-------------------------------- Variables --------------------------------*/

// The reason I'm going to store that message in a variable is so that I can set it during any number of different functions that I write and then once that function invokes render, we can display whatever that message is in our render. I set message as a variable and then render this message to an element that we set as a CER, whenever my render function is invoked. 
let player, score, strikes, fact, message, category, points, theAnswer, usedFacts
/*------------------------ Cached Element References ------------------------*/
const notecard = document.querySelector(".notecard")
const displayCategory = document.querySelector("#category")
const displayFact = document.querySelector("#fact")
const displayScore = document.querySelector("#display-score")
const displayStrikes = document.querySelector("#display-strikes")
const displayMessage = document.querySelector("#message")
const form = document.querySelector(".buttons")
const trueBtn = document.querySelector("#true")
const falseBtn = document.querySelector("#false")

console.log(notecard, displayCategory, displayFact, displayScore, displayStrikes, displayMessage, trueBtn, falseBtn)
// console.log(form)



/*----------------------------- Event Listeners -----------------------------*/
trueBtn.addEventListener("click", handleClickTrue)
falseBtn.addEventListener("click", handleClickFalse)
/*-------------------------------- Functions --------------------------------*/
init();
function init(){
    console.log('init invoked')
    score = 0   
    strikes = 0
    displayStrikes.setAttribute("hidden", true)
    getFacts();
    render();
    usedFacts = []
}   
function getFacts() {
    let getFact = data[Math.floor(Math.random()*data.length)]
    let idx = data.indexOf(getFact)
    console.log(idx)
    usedFacts = data.splice(idx, 1)
    console.log(usedFacts)
    fact = getFact.fact;
    category = getFact.category
    theAnswer = getFact.answer
    points = getFact.points
    message = getFact.mess
    
    render();
}
console.log(fact, category, theAnswer, points, message)

function render() {
    displayFact.textContent = fact;
    displayCategory.textContent = ('category: ' + category)
    displayScore.textContent = ("score: " + score)
    displayMessage.setAttribute("hidden", true)
    
}
function handleClickTrue(event) {
    event.preventDefault();
    console.log(event.target.id);
    console.log(theAnswer)
    if (theAnswer === "true") {
        score = score + points
        console.log(score)
        console.log(points)
    } else {
    displayStrikes.removeAttribute("hidden")
    strikes = strikes + 1   
    }
    secondRender();
}
function handleClickFalse(event) {
    event.preventDefault();
    console.log(event.target.id);
    console.log(theAnswer)
    if (theAnswer === "false") {
    score = score + points
    console.log(points)
    console.log(score)
    } else {
    displayStrikes.removeAttribute("hidden")
    strikes = strikes + 1
    }
    secondRender();
}

function secondRender() {
     displayScore.textContent = ("score: " + score)
     displayStrikes.textContent = ("strikes: " + strikes)
     setTimeout(function() {
        displayMessage.removeAttribute("hidden")
        displayMessage.textContent = message   
     }, 1000)
     setTimeout(function() { 
        getFacts();
        render();

    }, 3000)
}
// breaks - 35 min; ask for clarity; engineering


//render => take data and display
    // 
//(second render) => respond to player guess -- handleClick

// function handleClick(); 
   //true button
    // if theAnswer === true {
        // change button color
        // add to points
    // } else {
        // change false button color
        // add strike
    // false button
    // if theAnswer === false {
        // change button color
        // add to points
    // } else {
        // change false button color
        // add strike
  






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