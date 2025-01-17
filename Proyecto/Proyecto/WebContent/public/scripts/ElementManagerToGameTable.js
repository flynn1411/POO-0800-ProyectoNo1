function ElementsManager(){
	var currentClickedCard,                //Almacena el objeto/div de la carta seleccionada.
    currentzIndex = -299,
    arrIDs = [],                    //Arreglo de los IDs.
    count = 1;                      //Contador de la cantidad de cartas.
    turn = 1;
    currentPlayer = 1;
           
    //Carga el contenido inicial.
    this.loadContent  = function(json, sessionID,n, currentTurn){
        this.paintCards(json, sessionID,n);
        document.cookie = "currentTurn= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = `currentTurn=${currentTurn}`;
    }
    
    //Obtiene los ids(string) creados en la tabla.
    this.getArrIDs = function(){
        return arrIDs;
    }

    //Creacion de los objetos/divs cartas mediante LL.
    this.paintCards = function(json, sessionID,n){
        
        jsonToList.parseToList(json, sessionID);                                //Convierte el json del server a LL.                                           //Convierte el json del servidor a LL.
        var decksArray = [playerOne,playerTwo,putOnDeck,grabDeck];              //Guarda en arr las 4 barajas de cartas.
            
        for(j in decksArray){
            var viewCard = 1;
            for(let i=1; i<= decksArray[j].amount(); i++){
                currentNode = decksArray[j].search(i);
                let symbol = currentNode.value.symbol;
                var color = currentNode.value.color;
                
                if(n == "1"){ //Jugador 1
                	if(j == 1 || j == 3){color = "black";viewCard = "hide";}
                	
                }else{ //Jugador 2
                	if(j == 0 || j == 3){color = "black";viewCard = "hide";}
                }
                
                let result = this.createCard(symbol,color,i,viewCard);                   //  [html,id]  
    
                currentNode.id = result[1];

                //Asignacion de las cartas en sus respectivos contenedores/areas.
                if(n == "1"){
                	//Cuando Jugador uno entra.
                	if(j == 0)areaP1.innerHTML += result[0];
                	if(j == 1)areaP2.innerHTML += result[0];
                	
                }else{
                	//Cuando Jugador dos entra.
                	if(j == 0)areaP2.innerHTML += result[0];
                	if(j == 1)areaP1.innerHTML += result[0];
                	
                }
                //Crear el area de la Mesa.
                if(j == 2 || j == 3){
                	areaTable.innerHTML += result[0];
                }
                count = count + 1;
            }
        }
        count = 1;     
        this.distributeAllDeck();
    }    
    
   //Element es el div de la carta. Lo mismo si usara getElementById
    this.eventClickedCard = function(element){
    	//Buscamos el jugador y de quien es el turno 
    	var cookies = ck.getCookies();		
    	var currentTurn = cookies[0];
    	var currentStyle = cookies[1];
    	var playerID = cookies[2];
    	var sessionID = cookies[3];
    	
    
    	//Accion de hacer click en una carta
    	function clickCard(status,deck){
    		if(status == true){
    			for(i=1; i <= deck.amount() ; i++){
    				current = deck.search(i).id;
    				selectedElement = element.getAttribute("id");
    				
    				if(selectedElement == current){
    					if(currentClickedCard == null){                                     //Si no hay una carta seleccionada.
    						currentClickedCard = element;                                   //Se almacena la nueva carta seleccionada.
    						currentClickedCard.style.transition = "all 0.2s ease 0s"
   							currentClickedCard.style.boxShadow = "1px 1px 1px #777, 0px 0px 30px 30px #B43B37";
    					}else{
    						currentClickedCard.style.boxShadow = "none";
    						currentClickedCard = element;
    						currentClickedCard.style.transition = "all 0.2s ease 0s"
   							currentClickedCard.style.boxShadow = "1px 1px 1px #777, 0px 0px 30px 30px #B43B37";
    					}
    				}
    			}
    		}else{
                //let last = grabDeck.search(grabDeck.amount());
                //document.getElementById(last.id).style.animation = "grabAnimation 1s infinite";
                image.style.visibility = "visible";
                image.style.animation = "grabAnimation 1s infinite";

                setTimeout(function(){image.style.visibility = "hidden";},2000);
                //this.showMessage("Agarre una carta.");
    		}
    	}

    	//Especificamos de quien es el turno
	    if(playerID == currentTurn){
	    	//para jugador 1
	    	if(playerID.match(/(_playerOne)/g)){
	    		//validacion de si tiene un movimiento
	    		var status = val.movementValidator(playerOne,putOnDeck);
	    		clickCard(status,playerOne);

	    	//para jugador 2 	
	    	}else{
	    		//validacion de si tiene un movimiento
	    		var status = val.movementValidator(playerTwo,putOnDeck);
	    		clickCard(status,playerTwo);
	    	}
	    }else{
	    	this.showMessage("No es su turno."); 
	    }
    }
    
    //Evento al clickear en la carta encima de la baraja descartada.
    this.eventClickedPutOnDeck = function(){
        
        if(currentClickedCard != null){
            
            //Atributo 'name' del objeto div almacena la posicion del elemento respecto a la lista.
        	var position = parseInt(currentClickedCard.getAttribute('name'));           //Obtiene una carta respecto a la posicion en la LL.
                    	
            var cookies = ck.getCookies();		
        	var currentTurn = cookies[0];
        	var currentStyle = cookies[1];
        	var playerID = cookies[2];
        	var sessionID = cookies[3];
        	
        	//Verificar que jugador es. 
        	 if(playerID.match(/(_playerOne)/g)){
        		 var validation = ruler.logic(position, "1"); //Jugador uno
        		 
        		 if(playerOne.amount() == 1){
        			 this.eventClickBtnPopup(closeBtn, "¡Has ganado!");
        		 }
	                	                
             }else{
            	 var validation = ruler.logic(position, "2"); //Jugador dos
            	 if(playerTwo.amount() == 1){
        			 this.eventClickBtnPopup(closeBtn, "¡Has ganado!");
        		 }
             }
        	
            if(validation == true){
                	
            	//Envio al servidor.
                var parameters = {"command":"validate", "playerID": playerID, "sessionID": sessionID, "card": position};
                $.post("../gameService.jsp", parameters, function(response){
                	loadGame();
                });
                //Limpiar LL y HTML
                this.empty();
                                
            }else{
              
            	//Cuando un moviminento no es validado.
                this.showMessage("Movimiento no valido.");
            }
            currentClickedCard = null;
        }else{
            this.showMessage("No hay carta seleccionada.");
        }
    }
    
    //Evento a hacer doble click a la baraja principal para obtener una carta.
    this.eventDoubleClickedGrabDeck = function(){
           
        	//Buscamos el jugador y de quien es el turno 
	    	var cookies = ck.getCookies();		
	    	var currentTurn = cookies[0];
	    	var currentStyle = cookies[1];
	    	var playerID = cookies[2];
	    	var sessionID = cookies[3];
	        
	    	if(playerID == currentTurn){
		    		
	    		//Envio al servidor.
	    		var parameters = {"command":"grab", "playerID":playerID, "sessionID":sessionID};
	    		$.post("../gameService.jsp", parameters, function(response){
	    			loadGame();
	    		});
	    		//Limpiar LL y HTML
	    		this.empty();
	    		
	    	}else{
	    		this.showMessage("No es su turno.")
	    	}
        }
    
    //Llama la distribucion de cartas de la LL de manera individual.
    this.distributeAllDeck = function(){
       
       	this.distributeDeck(playerOne,1); 
       	this.distributeDeck(playerTwo,2);
        this.distributeDeck(putOnDeck,3);
        this.distributeDeck(grabDeck,4);
    }

    //Reparte las cartas de un deck(LL) dado.
    this.distributeDeck = function(deck,option){
        var valueMoveP1 = 20,                                               //Valor de desplazamiento horizontal inicial.
            valueDelayDistributed = 0.5,
            top,
            left;
        
        if(deck.amount() <= 3){valueMoveP1 = 40;}
        if(deck.amount() == 4){valueMoveP1 = 35;}    
        if(deck.amount() == 5){valueMoveP1 = 30;}
        if(deck.amount() == 6){valueMoveP1 = 25;}    
        if(deck.amount() == 8){valueMoveP1 = 15;}
        if(deck.amount() == 9){valueMoveP1 = 10;}
        if(deck.amount() > 9){valueMoveP1 = 2;}

        if(option == 1){                                                    //Jugador 1.
            top="20%";
        
        }if(option == 2){                                                   //Jugador 2.
            top="5%";              
        }
        if(option == 3){                                                    //Carta descartada.
            left = "30.25%";
        } 
        if(putOnDeck.amount() == 1){
            discartedDeck.style.boxShadow = "1px 1px 1px #777, 0px 0px 0px 0px #5B5858";
        }else{
            discartedDeck.style.boxShadow = "1px 1px 1px #777, 10px 10px 0px 0px #5B5858";
        }
        if(grabDeck.amount() == 1){
            principalDeck.style.boxShadow = "1px 1px 1px #777, 0px 0px 0px 0px #5B5858";
        }else{
            principalDeck.style.boxShadow = "1px 1px 1px #777, 10px 10px 0px 0px #5B5858";
        } 

        for (let i=1; i<=deck.amount(); i++){   
            
            let currentNode = deck.search(i),                               //Nodo-carta actual de la LL.
                id = currentNode.id,                                        //ID de la carta.
                currentDiv = document.getElementById(`${id}`);              //Objeto carta del document.

            //Cambios de propiedades al css del objeto carta.
            currentDiv.style.animation = "distributeDeck .8s ease .5s forwards";
            currentDiv.style.animationDelay = `${valueDelayDistributed}s`;
            currentDiv.style.animationDuration = "0.5s";    
            currentDiv.style.transition = `all ${valueDelayDistributed}s ease 0s`;
            currentDiv.style.top = top;

            //En caso que sea el deck del jugador #1 o jugador #2.
            if(option == 1 || option == 2){
                currentDiv.style.left =`${valueMoveP1}vw`;
                valueMoveP1 = valueMoveP1 + 10;
                valueDelayDistributed = valueDelayDistributed + 0.3;
            }
            
            //En caso que sea el deck descartado.
            if(option == 3){
                currentDiv.style.left = left;
            }
        }
    }
    
    //Funcion para crear cartas.
    this.createCard = function(symbol,color,position,viewCard){
        let result = [],
        ID = `${symbol}_${color}_${count}`,
        html,
        nameClass = color;

    if(color == "black"){        
        if(symbol == "change color" || symbol == "+4"){
            if(viewCard != "hide"){
                if(symbol == "change color"){
                    nameClass = "change_color";
                }else{
                    nameClass = "plus4";
                }
            }
        }
    }
    
    //Creacion del html que contrendra el objeto/div carta.
    html = `<div id="${ID}" class="${nameClass} card" name="${position}" onclick="eventClickedCard(this);">
                <span>
                    <h1 id="textCard">${symbol}</h1>
                </span>
            </div>\n`;

    result.push(html,ID);                               //[html,ID]
    return result;
    }

    //Muestra un mensaje en un pop up con un texto dado.
    this.showMessage = function(message){
        messageError.innerHTML = message;
        popupError.classList.add('active');
        setTimeout(function(){popupError.classList.remove('active')},2000);
    }

    this.activeTurn = function(state){
        if(state == true){
            document.getElementById('textTurn').classList.add('active');
        }
        if(state == false){
            document.getElementById('textTurn').classList.remove('active');
        }
    }
    
    //Limpiar
    this.empty = function(){
		//Se limpian las LL de las cartas.
        playerOne.clear();
        playerTwo.clear();
        putOnDeck.clear();
        grabDeck.clear();
        
        //Se limpia el html de los 'contenedores'.
        areaP1.innerHTML = "";
        areaP2.innerHTML = "";
        areaTable.innerHTML = "";
    }
    
    this.eventClickBtnPopup = function(element, message=""){ 
        if(element.getAttribute('id') == 'closeBtn'){
        	
        	var cookies = ck.getCookies();		
	    	var currentTurn = cookies[0];
	    	var currentStyle = cookies[1];
	    	var playerID = cookies[2];
	    	var sessionID = cookies[3];
        	
        	let parameters = {
        		"command":"checkScore",
        		"sessionID":sessionID,
        		"playerID":playerID
        	};
        	
        	$.post("../gameService.jsp", parameters, function(response){
        		
        		let result = JSON.parse(response);
        		
        		if(result.IsAHighScore){
        			let score = result.score;
        			titlePopupInputName = message;
        			finalScore.innerHTML = `Puntuacion: ${score}`;
        			overlayInputName.classList.add('active');
        			popupInputName.classList.add('active');
        			
        		}else{
        			window.location = "../index.jsp";
        		}
        	});
        	
        }
        if(element.getAttribute('id') == 'cancelInputName'){
            overlayInputName.classList.remove('active');
            popupInputName.classList.remove('active');
        }
        if(element.getAttribute('id') == 'acceptInputName'){
        	
            var userName = textInput.value;
            if(userName != ""){
                textInput.value = "";
                
                var cookies = ck.getCookies();		
    	    	var sessionID = cookies[3];
    	    	var playerID = cookies[2];
            	
            	let parameters = {
            		"command":"addHighScore",
            		"sessionID":sessionID,
            		"playerID":userName
            	};
            	
            	$.post("../gameService.jsp",parameters, function(response){
            		result = JSON.parse(response);
            		if(result.status == "success"){
            			window.location = `../gameService.jsp?command=disconnect&playerID=${playerID}&sessionID=${sessionID}`;
            		}
            	});
                
            }else{
                errorInput.style.visibility = "visible";
                setTimeout(function(){errorInput.style.visibility="hidden";},2000);
            }
        }
    }
}