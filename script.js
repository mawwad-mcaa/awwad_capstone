const colors = ["yellow", "red", "blue", "green"];
const values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const cards = 'colors, values';

let cardDeck = [];
let myHand = [];
let theirHand = [];
let trashpile = [];

function startgame() {
    cardDeck = [];
        cards.forEach((cards) => {
            cardDeck.push({ cards });
            if (cards !=="0") cardDeck.push({ cards });
    });
}

{
shuffle(cardDeck);

myHand = cardDeck.splice(0, 7);
theirHand = cardDeck.splice(0, 7);
}