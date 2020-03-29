<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
    <link rel="stylesheet" href="../resources/CssWelcomeTable.css">
    <style> 
    
    </style>
</head>
<body id="contentBody" onload="start();">
    <div id="container">
        <div id="welcomeContent">
            <div id="style"></div>    
            <div id="areaP1" class="table"></div>
            <div id="areaTable"  class="table"></div>
            <div id="areaP2" class="table"></div>
            <div id="discartedDeck" class="discartedDeck" onClick="eventClickedPutOnDeck()"></div>
            <div id="principalDeck" class="principalDeck" ondblclick="eventDoubleClickedGrabDeck(this)"></div>
        </div>

        <div id="cardsContainer">
            
        </div>
    </div>

    <script src="../scripts/ElementManagerToGameTable.js"></script>
    <script src="../scripts/jquery.js"></script>
    <script src="../scripts/JsonCardManager.js"></script>
    <script src="../scripts/DeckV2.js"></script>
    <script src="../scripts/JsonToListV2.js"></script>
    <script src="../scripts/MovementValidation.js"></script>
    <script src="../scripts/Logic.js"></script>
    <script src="../scripts/ListToJsonV2.js"></script>
    <script src="../scripts/CssStyle.js"></script>

    <script>
    	function start(){
    		//console.log(document.cookie);
    		var cookies = document.cookie.trim().split(";");
        	var parameters = [];
        	for(i = 0; i<cookies.length; i++){
        		parameters.push(cookies[i].split("=")[1]);
        	}
        	var sessionID = parameters[0];
        	var playerID = parameters[1];
        	var parameters = {"command":"loadData","sessionID":sessionID};
    		$.post("../gameService.jsp",parameters,function(data){

                var json = JSON.parse(data)
                if(playerID.match(/(_playerOne)/g)){
	                
                	em.loadContent(json, sessionID,"1");
	                console.log("hi");
	                	                
                }else{
                	em.loadContent(json, sessionID,"2");
                	console.log("hi2");
                	
                }
	                em.setCookies(sessionID, playerID);

            });
    	}
    
        var val = new Validator(),
            ruler = new UNOLogic(),
            listToJson = new ListToJSON(),
            jsonToList = new JSONToList(),
            playerOne = new LinkedList(),
            playerTwo = new LinkedList(),
            putOnDeck = new LinkedList(),
            grabDeck =  new LinkedList(),
            em = new ElementsManager();
            
        function eventClickedCard(element){
            em.eventClickedCard(element);
        }
        
        function eventClickedPutOnDeck(element){
            em.eventClickedPutOnDeck(element);
        }

        function eventDoubleClickedGrabDeck(){
            em.eventDoubleClickedGrabDeck();
        }
    
    </script>

</body>
</html>