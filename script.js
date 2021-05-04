'use strict';

let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let btnnew = document.querySelector('.btn--new');
let btnhold = document.querySelector('.btn--hold');
let btnRoll = document.querySelector('.btn--roll');
let current1El = document.querySelector('#current--1');
let current0El = document.querySelector('#current--0');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

//Initial Conditions or looks
score1El.textContent =0;
score0El.textContent =0;
let currentscore =0;
let activeplayer = 0;
let scores = [0,0];
let dice =0;

//diceEl.classList.add('hidden');
diceEl.hidden = true;

//Rolling Dice Functionality
btnRoll.addEventListener('click',Roll);

//Function Switch Player
function switchPlayer(){
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Function Rolling
function Roll() { 
     //1. Generating a random dice roll
    dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);     //2. Display Dice Number in Console
    //diceEl.classList.remove('hidden');
    diceEl.hidden = false;
    diceEl.src = `Images/dice-${dice}.png`;    
    //3. Check for Rolled 1; If true ,switch to next Player
    if(dice !== 1){ 
         currentscore += dice;
        //static value selector for player0
        //current0El.textContent = currentscore;
        //Now giving value and selecting Dynamically  
        document.querySelector(`#current--${activeplayer}`).textContent = currentscore;
    }
    else{
        switchPlayer();
    }
}

//Hodling Functionality 
btnhold.addEventListener('click',hold);
function hold(){
    //1. Add Current score to active Player's Scoreboard + //2. Check if Player's score is >= 100   
        scores[activeplayer] += currentscore;
        console.log(scores[activeplayer]);
        if(scores[activeplayer] < 20){document.querySelector( `#score--${activeplayer}` ).textContent = scores[activeplayer];}
        else{
            {
            document.querySelector( `#score--${activeplayer}` ).textContent = scores[activeplayer];}
            document.querySelector(`.player--${activeplayer}` ).classList.add('player--winner');
            document.querySelector(`#name--${activeplayer}`).textContent = `Player ${activeplayer + 1} won`;
            btnhold.disabled= true;
            btnRoll.disabled = true; 
            diceEl.classList.remove('.dice');
        }    
    //3. Switching to the next Player
        switchPlayer();
}

btnnew.addEventListener('click',init);
function init() {
    //Initial Conditions or looks
    score1El.textContent =0;
    score0El.textContent =0;
    currentscore =0;
    activeplayer = 0;
    scores = [0,0];
    dice =0;

    //diceEl.classList.add('hidden');
    diceEl.hidden = true;

    //Removing Winning Class
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('#name--1').textContent = "Player 2";
    document.querySelector('#name--0').textContent = "Player 1";
    btnhold.disabled= false;
    btnRoll.disabled = false;
}
