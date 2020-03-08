<%@page import="SessionManager.RandomGenerator"%>
<%@page import="SessionManager.FileManager"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	
	<body onload="start();">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script type="text/javascript">
			
			function start(){
				var action = "service.jsp";
				var parameters = "";
				
				var callback = function(response){
					let json = JSON.parse(response);
					console.log(json);
					let grabDeck = json["sessionId"]["grabDeck"];
					deck = "";
					console.log(grabDeck);
					for(i = 0; i<grabDeck.length; i++){
						deck = `\${deck}\${grabDeck[i]['symbol']},\${grabDeck[i]['color']};`;
					}
					
					//console.log(deck);
				};
				
				$.get(action, parameters, callback);
			}
			
			
		</script>
	</body>
</html>