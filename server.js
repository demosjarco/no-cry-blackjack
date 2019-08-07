"use strict";

const Pool = require('worker-threads-pool')
const wtp = new Pool({ max: require('os').cpus().length });
const { SHARE_ENV } = require('worker_threads');

require('dotenv').config();
// process.env.VARIABLE

var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(process.env.WEBSOCKET_PUBLIC_PORT);

const publicLobby = io.of('/public/lobby').on('connection', function (socket) {
	
});

io.of('/public/roomCreate').on('connection', function (socket) {
	console.log('connected');
	wtp.acquire('./threads/public/createLobby.js', { env: SHARE_ENV }, function (err, worker) {
		worker.on('error', (err2) => {
			console.error(err2);
		});
		worker.on('message', (value) => {
			console.log(value);
		});
		socket.on('createRoom', function (gameInfo) {
			console.log(gameInfo);
			worker.postMessage(gameInfo);
		});
	});
});