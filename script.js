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

    const topCard = trashPile.pop();
    cardDeck = [...trashPile];
    trashPile = [topCard];
    shuffle(cardDeck);
    console.log("Reshuffled")
} 

function theirTurn() {
  const topCard = discardPile[discardPile.length - 1];
  const validCards = theirHand.filter(
    (card) =>
      card.color === topCard.color ||
      card.value === topCard.value ||
  );

  if (validCards.length > 0) {
    const cardPlay = validCards[0];
    const handIndex = theirHand.indexOf(cardPlay);
    }

    theirHand.splice(handIndex, 1);
    discardPile.push(cardToPlay);
    updateUI();

    if (deck.length > 0) {
      theirHand.push(deck.pop());
      updateUI();
    }
    isPlayerTurn = true;
  }
}

function handleWin(winner) {
  const playAgain = confirm(
    `UNO! ${winner} wins!`,
  );
  if (playAgain) {
    isPlayerTurn = true;
    pendingWildCardIndex = -1;
    initializeGame();
  } else {
    isPlayerTurn = false;
    document.getElementById("player-hand").innerHTML =
      `<h3 class="text-center w-100 mt-4">Game Over</h3>`;
    document.getElementById("discard-pile").innerHTML = "<h2>UNO</h2>";
    document.getElementById("discard-pile").className =
      "uno-card card-back d-flex align-items-center justify-content-center mx-auto";
  }
}

window.onload = initializeGame;