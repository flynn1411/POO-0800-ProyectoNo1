function CookieManager(){
	
	this.getCookies = function(){
		
		var parameters = [];
		var sendCookies = [];
		var cookies = document.cookie.trim().split(";");
		
		for(i = 0; i<cookies.length; i++){
			parameters.push(cookies[i].split("=")[1]);
		}
		var currentTurn = parameters[0];
		for(i=1; i<4 ;i++){
    		if(parameters[i].match(/_playerOne/g) || parameters[i].match(/_playerTwo/g)){
    			var playerID = parameters[i]
    		
    		}else if(parameters[i].match(/A/g)){
    			var currentStyle = parameters[i]
    		
    		}else{
    			var sessionID = parameters[i];
    		}
    	}
		
		sendCookies.push(currentTurn);
		sendCookies.push(currentStyle);
		sendCookies.push(playerID);
		sendCookies.push(sessionID);

		return sendCookies;
	}
}