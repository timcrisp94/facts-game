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
}, {fact: `Wayne Gretzky retired with 51 NHL records.`, category: 'sports', points: 50,
answer: ('false'), mess: `Gretzky held 61 NHL records when he retired in 1999.`
}]
console.log(data)
console.log(data[0].fact)


/*-------------------------------- Variables --------------------------------*/
let player, score, strikes, trivia, points, answer
// The reason I'm going to store that message in a variable is so that I can set it during any number of different functions that I write and then once that function invokes render, we can display whatever that message is in our render. I set message as a variable and then render this message to an element that we set as a CER, whenever my render function is invoked. 

/*------------------------ Cached Element References ------------------------*/
const notecard = document.querySelector(".notecard")
const displayCategory = document.querySelector("#category")
const displayFact = document.querySelector("#trivia")
const displayScore = document.querySelector("#display-score")
const displayStrikes = document.querySelector("#display-strikes")
const displayMessage = document.querySelector("#message")
const form = document.querySelector(".buttons")
const trueBtn = document.querySelector("#true")
const falseBtn = document.querySelector("#false")

console.log(notecard, displayCategory, displayFact, displayScore, displayStrikes, displayMessage, trueBtn, falseBtn)
// console.log(form)



/*----------------------------- Event Listeners -----------------------------*/
trueBtn.addEventListener("click", function(evt) {
    console.log(evt.target);
    evt.preventDefault(); 

});
falseBtn.addEventListener("click", function(evt){
    console.log(evt.target);
    evt.preventDefault();
});     

/*-------------------------------- Functions --------------------------------*/

init();
function init(){
    console.log('init invoked')
    score = 0;
    strikes = 0;
    displayStrikes.setAttribute("hidden", true)
    displayMessage.setAttribute("hidden", true)
    getFacts();
    // score
    render();
    
}   

function getFacts() {
    let getFact = data[Math.floor(Math.random()*data.length)]
    isTrue = getFact.answer;
    console.log(getFact.points)
    displayFact.textContent = getFact.fact;
    displayCategory.textContent += (' ' + getFact.category);
    displayMessage.textContent = getFact.mess
    render()
}

function render() {
    console.log('render invoked')
    //displayMessage.removeAttribute("hidden")
    console.log(isTrue);
    // if isTrue === btn => add points
    // if isTrue !== btn => add strike



}

function handleButtonClick() {

}

function answerCheck() {
    if (isTrue === "true"){ 
        console.log("true") 
        //displayScore.textContent += (' ' + getFact.points)
    } else {
        console.log("false")
    }
   render()
} 

answerCheck()



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