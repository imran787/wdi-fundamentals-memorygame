
// var cardOne = "queen", cardTwo = "queen", cardThree = "king", cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var gameBoard = document.getElementById('game-board');
//  var cardElement = document.createElement('div');

 // var createBoard = function(){
 // 	for(var i = 0; i < cards.length; i++ ){
 // 		cardElement.setAttribute('data-card', cards[i]);
 // 	}
 // }

 var createCards = function(){

var gameBoard = document.getElementById('game-board');
var cardElement = null;
 	 for (var i = 0; i < cards.length; i++){
 	 cardElement = document.createElement('div');
 	cardElement.className = 'card';
 	gameBoard.appendChild(cardElement);
 	
 	cardElement.setAttribute('data-card', cards[i]);
 	cardElement.addEventListener("click", isTwoCards);
 };
};

var isMatch = function(cardsInPlay){
	if (cardsInPlay[0] == cardsInPlay[1]){;
	console.log("cards match yes")
	alert("The cards match!!")

}



}




var isTwoCards = function(){
cardsInPlay.push(this.getAttribute('data-card'));
cardImage(this);
// check to see if you have two cards in play
if (cardsInPlay.length === 2){
	isMatch(cardsInPlay);
	// clear cards in play array reset
	cardsInPlay = [];
}

}

var cardImage = function(x){
	if(x.getAttribute('data-card')=='king'){
		x.innerHTML = '<img src = "king.png">'
	} else if (x.getAttribute('data-card')== 'queen'){
		x.innerHTML = '<img src="queen.png">'
	} else {
		console.log("something is wrong!!!")
	}
}


var resetCards = function(){
	var cards = document.getElementsByClassName('card');
	for (var i = 0; i<cards.length; i++){
		cards[i].innerHTML = " ";
	}
	for (var i = 0; i < cards.length; i++){
		cards[i].removeEventListener('click', isTwoCards, true)
	}
}

createCards();
resetCards();

// / var gameBoard = document.getElementById('game-board');

// var createCards = function(){
// 	for (var i = 0; i < 4; i++){
	
// 	var cardElement = document.createElement('div')
// 	cardElement.className = 'card';

// 	gameBoard.appendChild(cardElement);
// }
// }


// =================================================

		// var gameBoard = document.getElementById('game-board');

 	// 	var createBoard = function () {
 	// 	 for (var i = 0; i < cards.length; i++) {
 	// 	   var newCard = document.createElement('div');
 		   
 	// 	   newCard.className = "card";
 	// 	   newCard.setAttribute('data-card', cards[i]);
 	// 	   newCard.addEventListener('click', isTwoCards);
 	// 	   gameBoard.appendChild(newCard);
 
 	// 		 }
 	// 	};
 				
 	// 			function isTwoCards() {
 	// 				  cardsInPlay.push(this.getAttribute('data-card'));
 	// 			  this.innerHTML = '<img src="' + this.getAttribute('data-card') + '.png">'
 	// 				    if (cardsInPlay.length === 2) {
 	// 				    	 isMatch(cardInPlay);
 	// 				    	 cardsInPlay = [];
 
 	// 			}
 	// 			};
 	// 			var isMatch = function(array){
 	//      (array[0] === array[1]) ?   alert("You found a match!") :  alert("Sorry, try again.");
 	//      for (var i = 0; i < cards.length; i++) {
 	//     document.getElementsByClassName('card')[i].innerHTML = " ";
 	// }
 	// };
 
 
 
 	// createBoard();

// ======================================================

// var createBoard = function(){
// 	for (var i = 0; i < cards.length; i++){
// 		var card = document.createElement('div');
// 		card.setAttribute('data-card', cards[i]);
// 		card.className = 'card';
// 		card.addEventListener('click', isTwoCards);
// 		gameBoard.appendChild(card);
// 	}
// }

// var isMatch = function(array){
// 	if (array[0] === array[1]) {
// 		alert('youve found a match!')
// 	} else {
// 		alert('Sorry, try again')
// 	}
// 		for(var i = 0; i <cards.length; i++){
// 			document.getElementsByClassName('card')[i].innerHTML = " ";
// 		}
// }
// var isTwoCards = function(){
// 	cardsInPlay.push(this.getAttribute('data-card'));
// 	// this.innerHTML = '<img src="' + this.getAttribute('data-card') + 'king.jpg">'
// 	console.log(this.getAttribute('data-card'));
// 	// if(this.getAttribute('data-card') === 'king'){
// 	// 	this.innerHTML = "<img src='king.png'>";
// 	// } else {
// 	// 	this.innerHTML = "<img src='queen.png'>";
// 	// }
// 	if (cardsInPlay.length === 2){
// 		isMatch(cardsInPlay);
// 		cardsInPlay = [];
// 	}
// }



// // if(this.getAttribute('data-card') === 'king'){
// // 		this.innerHTML = '<img src="king.pg">';
// // 	} else {
// // 		this.innerHTML = '<img src="queen.ppg">';
// // 	}

// // 	cardsInPlay.push(this);
		
// // 	if(cardsInPlay.length === 2){
// // 		compareCards(cardsInPlay[0], cardsInPlay[1]);
// // 	};



// var gameBoard = document.getElementById('game-board');

// var createCards = function(){
// 	for (var i = 0; i < 4; i++){
	
// 	var cardElement = document.createElement('div')
// 	cardElement.className = 'card';

// 	gameBoard.appendChild(cardElement);
// }
// }




// // if (cardTwo === cardFour){
// // 	alert("You found a match!")
// // } else {
// // 	alert("Sorry, try again.")
// // }

// createCards();