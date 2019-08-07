"use strict";

const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
	if (message.createRoom) {
		console.log(message.createRoom);
	}
});