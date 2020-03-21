<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
    <link rel="stylesheet" href="CssWelcomeTable.css">
    <style> 
    
    </style>
</head>
<body id="contentBody">
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

    <script src="ElementManagerToGameTable.js"></script>
    <script src="../../jquery.js"></script>
    <script src="JsonCardManager.js"></script>
    <script src="DeckV2.js"></script>
    <script src="JsonToListV2.js"></script>
    <script src="MovementValidation.js"></script>
    <script src="Logic.js"></script>
    <script src="ListToJsonV2.js"></script>
    <script src="CssStyle.js"></script>

    <script>
        var val = new Validator(),
            ruler = new UNOLogic(),
            listToJson = new ListToJSON(),
            jsonToList = new JSONToList(),
            playerOne = new LinkedList(),
            playerTwo = new LinkedList(),
            putOnDeck = new LinkedList(),
            grabDeck =  new LinkedList(),
            em = new ElementsManager();
        
        em.loadContent();
            
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