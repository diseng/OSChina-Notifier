(function() {
	'use strict';

	var xhr = function() {
		var xhr = new XMLHttpRequest();
		return function( method, url, callback ) {
			xhr.onreadystatechange = function() {
				if ( xhr.readyState === 4 ) {
					callback( xhr.responseText );
				}
			};
			xhr.open( method, url );
			xhr.send();
		};
	}();

	window.OSChinaNotifCount = function( callback ) {

		var NOTIFICATIONS_URL = 'http://www.oschina.net/';
		xhr( 'GET', NOTIFICATIONS_URL, function( data ) {
			if(data != ""){
				var reg = /total_count:([0-9]*)/;
				var result = reg.exec(data);
				callback(result[1]);
			}else{
				callback(false);
			}
		});

	};

})();