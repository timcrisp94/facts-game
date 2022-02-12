console.log("hi")


/*-------------------------------- Constants --------------------------------*/
const data = [
{fact: `'I am I because my little dog knows me.' Wrote Gertrude Stein.`,
answer: ('true'), mess: `The little dog, a poodle named basket.`,
}, {fact: `Wayne Gretzky retired with 51 NHL records.`, 
answer: ('false'), mess: `Gretzky held 61 NHL records when he retired in 1999.`
}]
console.log(data)
console.log(data[0].fact)


/*-------------------------------- Variables --------------------------------*/
let player, score, strikes


/*------------------------ Cached Element References ------------------------*/
const notecard = document.querySelector(".notecard")
const displayCategory = document.querySelector("#category")
const displayFact = document.querySelector("#display-fact")
const displayScore = document.querySelector("#display-score")
const displayStrikes = document.querySelector("#display-strikes")
const message = document.querySelector("#message")
const form = document.querySelector(".buttons")
const trueBtn = document.querySelector("#true-btn")
const falseBtn = document.querySelector("#false-btn")

console.log(notecard, displayCategory, displayFact, displayScore, displayStrikes, message, trueBtn, falseBtn)
// console.log(form)



/*----------------------------- Event Listeners -----------------------------*/
// trueBtn.addEventListener("click", handleClick);
// falseBtn.addEventListener("click", handleClick);


/*-------------------------------- Functions --------------------------------*/

init();
function init(){
    
    displayStrikes.setAttribute("hidden", true)
    getFacts();
    
}    

function getFacts() {
    for (let i = 0; i < data.length - 1; i++) {
        let getFact = data[Math.floor(Math.random()*data.length)]
        displayFact.innerText = (getFact.fact);
        }
    
}


//     return (data.fact)[Math.floor((Math.random()*data.length))]
//     console.log(getFacts);
//     }

// getFacts();

// function handleClick(event){

// }

// function render() {
//     // message
//     // score
//     // strike
//     // timer
//     // init
// }




// this is a game called "facts"

// in this game, a player will be presented a card with a quote, number, or bit of information. the player determines whether the "fact" will be true or false. they earn points for answering correctly, and receive a strike for answering incorrectly, until the player earns a third strike, ending the game. point values increase as the game switches from easy, to medium, and difficult. 

// categories: music, movies, sports, quotes, academia

// here is what a card will look like in "facts"


// *------------------------------------------------------------------*//

//                              "facts"
//       _____________________________________________________
//      |                                      | |           |
//      | category: (category)                 score: 75,000 |
//      | ___________________________________________________|
//      |                                                    |
//      |                                                    |
//      |      "I am I because my little dog knows me,"      |
//      |       wrote Gertrude Stein.                        |
//      |                                                    |
//      |                         (True) (False)             |
//      |                                                    |
//      |  * message                                         |
//      |____________________________________________________|


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