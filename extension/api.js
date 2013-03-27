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
				var index = data.indexOf("total_count");
				callback( index == -1 ? "" : data.substring(index+12,index+13));
			}else{
				callback(false);
			}
		});

	};

})();