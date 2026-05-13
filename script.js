const colors = ["yellow", "red", "blue", "green"];
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const cards = 'colors, values';

let cardDeck = [];
let myHand = [];
let theirHand = [];
let trashPile = [];
let turn = true;

function startGame() {
    cardDeck = [];
        cards.forEach((cards) => {
            cardDeck.push({ cards });
            if (cards !=="0") cardDeck.push({ cards });
    });

shuffle(cardDeck);

myHand = cardDeck.splice(0, 7);
theirHand = cardDeck.splice(0, 7);

let firstCard = cardDeck.find((x) => !isNaN(x.value));
cardDeck.splice(cardDeck.indexOf(firstCard), 1);
trashPile.push(firstCard);

updateUI();

}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const c = Math.floor(Math.random() * (i +1));
        [array[i], array[c]] = [array[c], array[i]];
    }
}

function playingCard(index) {
    if (!turn) return;

    const cardPlay = myHand[index];
    const topCard = trashPile[trashPile.length -1];

    if (
        cardPlay.color === topCard.color ||
        cardPlay.values === topCard.values
    ) {
        executePlay(index, cardPlay);
    } else {
      alert("Nope, Card needs to be the same color or value")
    }
}

function draw() {
    if (!turn) return;
    if (cardDeck.length === 0) reshuffle();

    if (cardDeck.length > 0) {
        myHand.push(cardDeck.pop());
        updateUI();

        turn = false;
        setTimeout(theirTurn, 1500);
    } else {
      alert("No more cards :(")
    }
    
}

function reshuffle() {
            if (trashPile.length <= 1) {
                console.log("Can't reshuffle");
                return;
    }
} 