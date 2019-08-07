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

	backend.emit('createRoom', {
		roomName: $('body main aside form input[type=text]').val(),
		gameVisibility: $('body main aside form input[type=radio][name=gameVisibility]').val(),
		cardType: $('body main aside form input[type=radio][name=cardType]').val(),
		gameType: $('body main aside form input[type=radio][name=gameType]').val(),
		players: $('body main aside form input[type=range]').val(),
		midJoinType: $('body main aside form input[type=radio][name=midJoinType]').val(),
		tokens: $('body main aside form input[type=number]').val(),
	});
}