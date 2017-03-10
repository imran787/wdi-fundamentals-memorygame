
var cardOne = "queen", cardTwo = "queen", cardThree = "king", cardFour = "king";

// if (cardTwo === cardFour){
// 	alert("You found a match!")
// } else {
// 	alert("Sorry, try again.")
// }

var gameBoard = document.getElementById('game-board');

var createCards = function(){
	for (var i = 0; i < 4; i++){
	
	var cardElement = document.createElement('div')
	cardElement.className = 'card';
	
	gameBoard.appendChild(cardElement);
}
}


createCards();