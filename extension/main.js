(function() {
	'use strict';

	function render( badge, color, title ) {
		chrome.browserAction.setBadgeText({
			text: badge
		});
		chrome.browserAction.setBadgeBackgroundColor({
			color: color
		});
		chrome.browserAction.setTitle({
			title: title
		});
	}

	function update() {
		OSChinaNotifCount(function( count ) {
			if(count !== false){
				render( count, [65, 131, 196, 255], 'OSChina Notifier' );
			}else{
				render( ':(', [166, 41, 41, 255], 'You have to be connected to the internet and logged into OSChina' );
			}
		});
	}

	var UPDATE_INTERVAL = 1000 * 60 * 5;

	setInterval( update, UPDATE_INTERVAL );

	chrome.browserAction.onClicked.addListener(function() {
		window.open('http://www.oschina.net/');
	});

	update();

})();
