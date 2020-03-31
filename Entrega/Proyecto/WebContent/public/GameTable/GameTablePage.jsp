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
<body class="minimalistCards" onload="loadGame();">
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

    <script src="../scripts/CssStyle.js"></script>
    <script src="../scripts/DeckV2.js"></script>
    <script src="../scripts/ElementManagerToGameTable.js"></script>
    <script src="../scripts/jquery.js"></script>
    <script src="../scripts/JsonCardManager.js"></script>
    <script src="../scripts/JsonToListV2.js"></script>
    <script src="../scripts/ListToJsonV2.js"></script>
    <script src="../scripts/Logic.js"></script>
    <script src="../scripts/MovementValidation.js"></script>
    <script src="../scripts/CookieManager.js"></script>
    
    <script>
    	function loadGame(){
			document.cookie = "currentTurn=0";

			ck = new CookieManager();
			var cookies = ck.getCookies();			
        	var sessionID = cookies[1];
        	var playerID = cookies[2];
        	
        	
            var parameters = {"command":"loadData","sessionID":sessionID};
    		$.post("../gameService.jsp",parameters,function(data){

    			//console.log(data);
                var json = JSON.parse(data);
                
                var currentTurn = json[sessionID]["currentTurn"];
                
                if(playerID.match(/(_playerOne)/g)){
	                em.loadContent(json, sessionID,"1",currentTurn);
                }else{
                	em.loadContent(json, sessionID,"2",currentTurn);
                }
	           		
                //Se pide informacion de tener el turno.
                if(currentTurn != playerID){
                	                   
                	setInterval(reLoad,10000);
                	function reLoad(){
                		em.empty();
	                    loadGame();
                	}                	
                }

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
            em = new ElementsManager(),
            ck = new CookieManager();
        
        
        //console.log("La clase actual es:",document.body.className);
        function eventClickedCard(element){em.eventClickedCard(element);}
        function eventClickedPutOnDeck(element){em.eventClickedPutOnDeck(element);}
        function eventDoubleClickedGrabDeck(){em.eventDoubleClickedGrabDeck();}
    
    </script>

</body>
</html>