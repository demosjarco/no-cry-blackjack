"use strict";

const { Worker, SHARE_ENV } = require('worker_threads');

require('dotenv').config();
// process.env.VARIABLE

var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(process.env.WEBSOCKET_PUBLIC_PORT);

io.on('connection', function (socket) {
	console.log('test 1 connected');
	const playerThread = new Worker('./threads/public/createLobby.js', { env: SHARE_ENV });
	playerThread.on('error', (err2) => {
		console.error(err2);
	});
	playerThread.on('message', (value) => {
		console.log(value);
	})
	playerThread.on('close', () => {
		console.log('closed');
	});
	socket.on('createRoom', function (gameInfo) {
		//console.log(gameInfo);
		playerThread.postMessage({ createRoom: gameInfo });
	});
});