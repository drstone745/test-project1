//Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were your born... Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(
        'You are ' + ageInDayss + ' days old.'
    );
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//challenge 2 Cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src =
        'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}

//challenge 3 Rock, scissor, paper
function rpsGame(yourChoice) {
    console.log('Your choice:', yourChoice.id);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice); //[0,1] human lost, bot won
    console.log(results);

    message = finalMessage(results); // {'message' :You Won! 'color' : 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        rock: { scissors: 1, rock: 0.5, paper: 0 },
        paper: { rock: 1, paper: 0.5, scissors: 0 },
        scissors: { paper: 1, scissors: 0.5, rock: 0 },
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { message: 'You lose!', color: 'red' };
    } else if (yourScore === 0.5) {
        return { message: 'You tied!', color: 'orange' };
    } else {
        return { message: 'You win!', color: 'green' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDAtabase = {
        rock: document.getElementById('rock').src,
        paper: document.getElementById('paper').src,
        scissors: document.getElementById('scissors').src,
    };

    //let's remove all the images

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML =
        "<image src='" +
        imagesDAtabase[humanImageChoice] +
        "'width =150 height=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML =
        "<h1 style='color: " +
        finalMessage['color'] +
        "; font-size: 60px; padding: 30px;'>" +
        finalMessage['message'] +
        '</h1>';
    botDiv.innerHTML =
        "<image src='" +
        imagesDAtabase[botImageChoice] +
        "'width =150 height=150 style='box-shadow: 0px 10px 50px rgba(247,33,24,1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: Change the color of All Buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    console.log(buttonThingy.value);
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'yellow') {
        buttonYellow();
    } else if (buttonThingy.value === 'green') {
        buttonGreen();
    } else if (buttonThingy.value === 'blue') {
        buttonBlue();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonYellow() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}

function buttonGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonBlue() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//challenge 5 : blackjack

let blackJackGame = {
    'you': { 'scoreSpan': '#your-blackjack-result', 'div': '#Your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11] },
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnOver': false,
    'isHit': false,
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];

const hitsound = new Audio('static/sounds/swish.m4a');
const winsound = new Audio('static/sounds/cash.mp3');
const lostsound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackhit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);

function blackjackhit() {
    blackJackGame['isHit'] = true;
    if (blackJackGame['isStand'] === false) {
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        //console.log(YOU['score']);
        //showCard(DEALER);
    }
}

function randomCard() {
    let radnomIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][radnomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/image/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitsound.play();
    }
}

function blackJackDeal() {
    // let winner = computeWinner();
    // showResult(winner);
    // showResult(computeWinner());
    if (blackJackGame['turnOver'] === true) {

        blackJackGame['isStand'] = false;
        let yourImages = document.querySelector('#Your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-result').textContent = "Let's Play!";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackJackGame['turnOver'] = false;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        // if adding 11 keeps me below 21, add 11. Otherwise, add 1.
        if (activePlayer['score'] + blackJackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackJackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackJackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {

    if (blackJackGame['isHit'] === true) {

        blackJackGame['isStand'] = true;

        while (DEALER['score'] < 16 && blackJackGame['isStand'] === true) {
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER);
            showScore(DEALER);
            await sleep(550);
            //showResult();

        }
        blackJackGame['turnOver'] = true;
        let winner = computeWinner();
        showResult(winner);
    }
    blackJackGame['isHit'] = false;
}

//compute the winner and return who just won
// update the wins, draws and losses
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        //condition: higher score than dealer or when dealer busts but you're 21 or under
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackJackGame['wins']++;
            //console.log('You won!');
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            blackJackGame['losses']++;
            //console.log('You lost!');
            winner = DEALER;
        } else if (YOU['socre'] === DEALER['socre']) {
            blackJackGame['draws']++;
            //console.log('You drew!');
        }

        //condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        blackJackGame['losses']++;
        console.log('You lost!');
        winner = DEALER

        // condition: whne you AND the dealer busts
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackJackGame['draws']++;
        console.log('You drew!');
    }

    console.log(blackJackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackJackGame['turnOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackJackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winsound.play();

        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackJackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lostsound.play();

        } else {
            document.querySelector('#draws').textContent = blackJackGame['draws'];

            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}