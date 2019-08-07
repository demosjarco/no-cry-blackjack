"use strict";

function playerSliderChanged(numPlayers = 2) {
	const sanitizedNumPlayers = parseInt(numPlayers);
	$('body main aside form span#players').text(sanitizedNumPlayers);
	$('body main aside form span#numOfSets').text(1 + sanitizedNumPlayers);
	$('body main aside form span#numOfCards').text((1 + sanitizedNumPlayers) * 52);
	$('body main aside form span#resetCards').text(sanitizedNumPlayers * 7);
}

function createRoom() {
	event.preventDefault();
}