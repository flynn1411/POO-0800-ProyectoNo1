function CookieManager(){
	
	this.getCookies = function(){
		var cookies = document.cookie.trim().split(";");
		var parameters = [];
		for(i = 0; i<cookies.length; i++){
			parameters.push(cookies[i].split("=")[1]);
		}
		return parameters;
	}
}