"use strict";

var backend;

$(function () {
	backend = io('https://demosjarco.dev', {
		transports: ['websocket'],
		path: '/sockets'
	});

	backend.on('connect', function () {
		$('body main aside').css('display', 'block');
	});
});