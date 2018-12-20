$(document).ready(function(){
	//Clear all cookies except first 3 and most recent in TAG
	var cookieIndex = 0;
	var maxCookie = 0;
	document.cookie.split(";").forEach(function(c) {
		maxCookie++;
		
	});
	maxCookie = maxCookie - 1;
	//console.log("maxCookie: " + maxCookie);
	document.cookie.split(";").forEach(function(c) {
		//console.log("cookie index " + cookieIndex + ": " + c);
		if (!(cookieIndex == 0 || cookieIndex == 1 || cookieIndex == 2 || cookieIndex == 3 || cookieIndex == maxCookie)) {
			document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
			//console.log("Deleting index " + cookieIndex);
		}
		cookieIndex++;
	});
});