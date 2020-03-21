<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <title>Insert title here</title>
    <style> 
    </style>
</head>
<body id="contentBody" onload="start()">
    <div id="container">
        <div id="style"></div>    
        <div id="areaP1" class="table"></div>
        <div id="areaTable"  class="table"></div>
        <div id="areaP2" class="table"></div>
        <div id="discartedDeck" class="discartedDeck" onClick="eventDeck()"></div>
        <div id="principalDeck" class="discartedDeck" ondblclick="eventPrincipalDeck(this)"></div>
    </div>

    <script src="../scripts/ElementManagerToGameTableV2.js"></script>
    <script src="../scripts/jquery3.4.1.js"></script>
    <script src="../scripts/JsonCardManager.js"></script>
    <script src="../scripts/DeckV2.js"></script>
    <script src="../scripts/JsonToList.js"></script>
    <script src="../scripts/MovementValidation.js"></script>
    <script src="../scripts/Logic.js"></script>
    <script src="../scripts/ListToJsonV2.js"></script>

    <script>
        var val = new Validator();
        var ruler = new UNOLogic();
        var listToJson = new ListToJSON();
        var jsonToList = new JSONToList();

        var playerOne = new LinkedList();
        var playerTwo = new LinkedList();
        var putOnDeck = new LinkedList();
        var grabDeck =  new LinkedList();
        
        var prueba = document.cookie.split("=");
        var ID = prueba[1];
	   	console.log(prueba[1]);
	
    	
    	function start(){
	    	
	    	parameters= {"ID":prueba[1]}
    		$.post("../service.jsp",parameters,function(data){
    		
    			console.log(JSON.parse(data));
    			json = JSON.parse(data)
		        em.paintCards(json,ID);
     		
    		});
    		
    	}
    	
        var json = {"sessionID":{"sessionID_player1":{"deck":[{"symbol":"reverse","color":"blue"},{"symbol":7,"color":"yellow"},{"symbol":0,"color":"blue"},{"symbol":2,"color":"blue"},{"symbol":1,"color":"yellow"},{"symbol":4,"color":"yellow"},{"symbol":5,"color":"yellow"}],"score":null,"status":null},"sessionID_player2":{"deck":[{"symbol":4,"color":"green"},{"symbol":"reverse","color":"yellow"},{"symbol":9,"color":"yellow"},{"symbol":"block","color":"blue"},{"symbol":"change color","color":"black"},{"symbol":"+2","color":"red"},{"symbol":"block","color":"green"}],"score":null,"status":null},"putOnDeck":[{"symbol":7,"color":"green"}],"grabDeck":[{"symbol":6,"color":"red"},{"symbol":2,"color":"red"},{"symbol":1,"color":"red"},{"symbol":0,"color":"red"},{"symbol":8,"color":"red"},{"symbol":2,"color":"yellow"},{"symbol":3,"color":"yellow"},{"symbol":2,"color":"blue"},{"symbol":7,"color":"red"},{"symbol":9,"color":"red"},{"symbol":"+2","color":"yellow"},{"symbol":"+2","color":"blue"},{"symbol":9,"color":"blue"},{"symbol":4,"color":"red"},{"symbol":1,"color":"green"},{"symbol":3,"color":"blue"},{"symbol":3,"color":"red"},{"symbol":8,"color":"green"},{"symbol":"+4","color":"black"},{"symbol":9,"color":"green"},{"symbol":2,"color":"yellow"},{"symbol":"+4","color":"black"},{"symbol":1,"color":"red"},{"symbol":8,"color":"blue"},{"symbol":6,"color":"green"},{"symbol":7,"color":"green"},{"symbol":8,"color":"yellow"},{"symbol":"+4","color":"black"},{"symbol":"reverse","color":"green"},{"symbol":2,"color":"green"},{"symbol":"change color","color":"black"},{"symbol":"change color","color":"black"},{"symbol":4,"color":"red"},{"symbol":"reverse","color":"green"},{"symbol":5,"color":"green"},{"symbol":6,"color":"red"},{"symbol":"+2","color":"yellow"},{"symbol":8,"color":"red"},{"symbol":8,"color":"green"},{"symbol":1,"color":"green"},{"symbol":7,"color":"yellow"},{"symbol":"+2","color":"red"},{"symbol":5,"color":"blue"},{"symbol":7,"color":"blue"},{"symbol":"+2","color":"green"},{"symbol":1,"color":"blue"},{"symbol":3,"color":"green"},{"symbol":4,"color":"yellow"},{"symbol":8,"color":"yellow"},{"symbol":"block","color":"red"},{"symbol":6,"color":"green"},{"symbol":6,"color":"yellow"},{"symbol":5,"color":"green"},{"symbol":6,"color":"blue"},{"symbol":"reverse","color":"blue"},{"symbol":"+2","color":"green"},{"symbol":"block","color":"red"},{"symbol":9,"color":"blue"},{"symbol":5,"color":"red"},{"symbol":6,"color":"yellow"},{"symbol":2,"color":"green"},{"symbol":"reverse","color":"red"},{"symbol":"change color","color":"black"},{"symbol":0,"color":"yellow"},{"symbol":3,"color":"green"},{"symbol":"+2","color":"blue"},{"symbol":9,"color":"green"},{"symbol":4,"color":"blue"},{"symbol":"reverse","color":"yellow"},{"symbol":4,"color":"blue"},{"symbol":7,"color":"red"},{"symbol":0,"color":"green"},{"symbol":6,"color":"blue"},{"symbol":1,"color":"blue"},{"symbol":3,"color":"blue"},{"symbol":"+4","color":"black"},{"symbol":3,"color":"yellow"},{"symbol":1,"color":"yellow"},{"symbol":5,"color":"red"},{"symbol":4,"color":"green"},{"symbol":"block","color":"blue"},{"symbol":7,"color":"blue"},{"symbol":"block","color":"yellow"},{"symbol":"reverse","color":"red"},{"symbol":"block","color":"green"},{"symbol":5,"color":"blue"},{"symbol":2,"color":"red"},{"symbol":9,"color":"yellow"},{"symbol":8,"color":"blue"},{"symbol":9,"color":"red"},{"symbol":5,"color":"yellow"},{"symbol":3,"color":"red"},{"symbol":"block","color":"yellow"}]}}
        var em = new ElementsManager();
        function eventT(element){
            em.eventT(element);
        }
        
        function eventDeck(element){
            em.eventDeck(element);
        }
                
        style.innerHTML =  em.getStyle();
    </script>

</body>
</html>