<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Client</title>
    <link href="https://fonts.googleapis.com/css?family=Titan+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../resources/CssWelcomeTable.css">
    <style> 
    
    </style>
</head>
<body class="A1" onload="loadGame();">
    <div id="container">
        <div id="welcomeContent">
            <button id="closeBtn" onclick="eventClickBtnPopup(this)">Salir</button>
            <div id="style"></div>    
            <div id="areaP1" class="table"></div>
            <div id="areaTable"  class="table">
                <span id="textTurn">Tu turno</span>
                <img id="image" src="../resources/Images/flecha.png">
            </div>
            <div id="areaP2" class="table"></div>
            <div id="discartedDeck" class="discartedDeck" onClick="eventClickedPutOnDeck()"></div>
            <div id="principalDeck" class="principalDeck" ondblclick="eventDoubleClickedGrabDeck(this)"></div>
        </div>
        <div id="popupError" class="popupMessage">
            <h1 id="messageError"></h1>
        </div>
            
        <div id="overlayInputName">
            <div id="popupInputName">
                <h1 id="titlePopupInputName" class="littleInput">¡Has Ganado!</h1>
                <h1 id="finalScore" class="littleInput">Puntuacion : 1354</h1>
                <input type="text" placeholder="Ingrese su nombre" id="textInput">
                <span id="errorInput" class="littleInput">No ha ingresado su nombre</span>
                <button id="cancelInputName" class="buttonInputName" onclick="eventClickBtnPopup(this)">Cancelar</button>
                <button id="acceptInputName" class="buttonInputName" onclick="eventClickBtnPopup(this)">Registrar</button>
            </div>
        </div>

    </div>

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
            var currentTheme = "A1";

			var currentTurn = cookies[0];
    		var currentStyle = cookies[1];
    		var playerID = cookies[2];
    		var sessionID = cookies[3];
			
            document.body.classList.replace(currentTheme,currentStyle);
          
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
                	                   
                	setInterval(reLoad,20000);
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
        function eventClickBtnPopup(element){em.eventClickBtnPopup(element);}
    
    </script>

</body>
</html>