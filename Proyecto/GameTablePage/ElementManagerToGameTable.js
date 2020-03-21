function ElementsManager(){
    var currentClickedCard,                //Almacena el objeto/div de la carta seleccionada.
    currentzIndex = -299,
    arrIDs = [],                    //Arreglo de los IDs.
    count = 1;                      //Contador de la cantidad de cartas.
    turn = 1;
    currentPlayer = 1;

    //Carga el contenido inicial.
    this.loadContent  = function(){
        let json ={"sessionID":{"sessionID_player1":{"deck":[{"symbol":"reverse","color":"blue"},{"symbol":7,"color":"yellow"},{"symbol":0,"color":"blue"},{"symbol":2,"color":"blue"},{"symbol":1,"color":"yellow"},{"symbol":4,"color":"yellow"},{"symbol":5,"color":"yellow"}],"score":null,"status":null},"sessionID_player2":{"deck":[{"symbol":4,"color":"green"},{"symbol":"reverse","color":"yellow"},{"symbol":9,"color":"yellow"},{"symbol":"block","color":"blue"},{"symbol":"change color","color":"black"},{"symbol":"+2","color":"red"},{"symbol":"block","color":"green"}],"score":null,"status":null},"putOnDeck":[{"symbol":7,"color":"green"}],"grabDeck":[{"symbol":6,"color":"red"},{"symbol":2,"color":"red"},{"symbol":1,"color":"red"},{"symbol":0,"color":"red"},{"symbol":8,"color":"red"},{"symbol":2,"color":"yellow"},{"symbol":3,"color":"yellow"},{"symbol":2,"color":"blue"},{"symbol":7,"color":"red"},{"symbol":9,"color":"red"},{"symbol":"+2","color":"yellow"},{"symbol":"+2","color":"blue"},{"symbol":9,"color":"blue"},{"symbol":4,"color":"red"},{"symbol":1,"color":"green"},{"symbol":3,"color":"blue"},{"symbol":3,"color":"red"},{"symbol":8,"color":"green"},{"symbol":"+4","color":"black"},{"symbol":9,"color":"green"},{"symbol":2,"color":"yellow"},{"symbol":"+4","color":"black"},{"symbol":1,"color":"red"},{"symbol":8,"color":"blue"},{"symbol":6,"color":"green"},{"symbol":7,"color":"green"},{"symbol":8,"color":"yellow"},{"symbol":"+4","color":"black"},{"symbol":"reverse","color":"green"},{"symbol":2,"color":"green"},{"symbol":"change color","color":"black"},{"symbol":"change color","color":"black"},{"symbol":4,"color":"red"},{"symbol":"reverse","color":"green"},{"symbol":5,"color":"green"},{"symbol":6,"color":"red"},{"symbol":"+2","color":"yellow"},{"symbol":8,"color":"red"},{"symbol":8,"color":"green"},{"symbol":1,"color":"green"},{"symbol":7,"color":"yellow"},{"symbol":"+2","color":"red"},{"symbol":5,"color":"blue"},{"symbol":7,"color":"blue"},{"symbol":"+2","color":"green"},{"symbol":1,"color":"blue"},{"symbol":3,"color":"green"},{"symbol":4,"color":"yellow"},{"symbol":8,"color":"yellow"},{"symbol":"block","color":"red"},{"symbol":6,"color":"green"},{"symbol":6,"color":"yellow"},{"symbol":5,"color":"green"},{"symbol":6,"color":"blue"},{"symbol":"reverse","color":"blue"},{"symbol":"+2","color":"green"},{"symbol":"block","color":"red"},{"symbol":9,"color":"blue"},{"symbol":5,"color":"red"},{"symbol":6,"color":"yellow"},{"symbol":2,"color":"green"},{"symbol":"reverse","color":"red"},{"symbol":"change color","color":"black"},{"symbol":0,"color":"yellow"},{"symbol":3,"color":"green"},{"symbol":"+2","color":"blue"},{"symbol":9,"color":"green"},{"symbol":4,"color":"blue"},{"symbol":"reverse","color":"yellow"},{"symbol":4,"color":"blue"},{"symbol":7,"color":"red"},{"symbol":0,"color":"green"},{"symbol":6,"color":"blue"},{"symbol":1,"color":"blue"},{"symbol":3,"color":"blue"},{"symbol":"+4","color":"black"},{"symbol":3,"color":"yellow"},{"symbol":1,"color":"yellow"},{"symbol":5,"color":"red"},{"symbol":4,"color":"green"},{"symbol":"block","color":"blue"},{"symbol":7,"color":"blue"},{"symbol":"block","color":"yellow"},{"symbol":"reverse","color":"red"},{"symbol":"block","color":"green"},{"symbol":5,"color":"blue"},{"symbol":2,"color":"red"},{"symbol":9,"color":"yellow"},{"symbol":8,"color":"blue"},{"symbol":9,"color":"red"},{"symbol":5,"color":"yellow"},{"symbol":3,"color":"red"},{"symbol":"block","color":"yellow"}]}}
        this.paintCards(json);
    
    }
    //Obtiene los ids(string) creados en la tabla.
    this.getArrIDs = function(){
        return arrIDs;
    }

    //Creacion de los objetos/divs cartas mediante LL.
    this.paintCards = function(json){

        jsonToList.parseToList(json);                                           //Convierte el json del server a LL.                                           //Convierte el json del servidor a LL.
        var decksArray = [playerOne,playerTwo,putOnDeck,grabDeck];              //Guarda en arr las 4 barajas de cartas.
            
        for(j in decksArray){
            var viewCard = 1;
            for(let i=1; i<= decksArray[j].amount(); i++){
                currentNode = decksArray[j].search(i);
                let symbol = currentNode.value.symbol;
                var color = currentNode.value.color;
                
                if(j == 1 || j == 3){
                    color = "black";
                    viewCard = 2;
                }

                let result = this.createCard(symbol,color,i,viewCard);                   //  [html,id]  
    
                currentNode.id = result[1];

                //Asignacion de las cartas en sus respectivos contenedores/areas.
                if(j == 0){
                    areaP1.innerHTML += result[0];
                }
                if(j == 1){
                    areaP2.innerHTML += result[0];
                }
                if(j == 2 || j == 3){
                    areaTable.innerHTML += result[0];
                }
    
                count = count + 1;
            }
        }
        count = 1;     
        this.distributeAllDeck();                                               //Distribuye todos los decks.  
    }    
    
   //Element es el div de la carta. Lo mismo si usara getElementById
    this.eventClickedCard = function(element){
        var status = val.movementValidator(playerOne,putOnDeck);
        if(status == true){
            
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

        }else{
            console.log("AGARRE UNA CARTA");
        } 
    }
    
    //Evento al clickear en la carta encima de la baraja descartada.
    this.eventClickedPutOnDeck = function(){
        
        if(currentClickedCard != null){
            
            //Atributo 'name' del objeto div almacena la posicion del elemento respecto a la lista.
        	var position = parseInt(currentClickedCard.getAttribute('name'));           //Obtiene una carta respecto a la posicion en la LL.
            
            if(ruler.logic(position) == true){
                
                //Envio al servidor.
                jsonOfCards = listToJson.parseToJSON(playerOne,playerTwo,putOnDeck,grabDeck);
                //Se limpian las LL de las cartas.
                playerOne.clear();
                playerTwo.clear();
                putOnDeck.clear();
                grabDeck.clear();
                
                //Se limpia el html de los 'contenedores'.
                areaP1.innerHTML = "";
                areaP2.innerHTML = "";
                areaTable.innerHTML = "";
                
                //Se repinta el contenedor con el nuevo cambio efectuado en las cartas.
                this.paintCards(jsonOfCards);
                                
            }else{
                //Cuando un moviminento no es validado.
                alert("MOVIMIENTO NO ES VALIDO");
            }
            currentClickedCard = null;
        }else{
            console.log("No hay carta seleccionada.")
        }

    }
    
    this.eventDoubleClickedGrabDeck = function(){
        console.log("Se ha dado click 2 veces");
        if(currentPlayer == 1){
            let lastPosition = grabDeck.amount();
            let cardToDeliver = grabDeck.extract(lastPosition);
            playerOne.add(cardToDeliver.value.symbol,cardToDeliver.value.color);
            
            //Envio al servidor.
            jsonOfCards = listToJson.parseToJSON(playerOne,playerTwo,putOnDeck,grabDeck);
            
            //Se limpian las LL de las cartas.
            playerOne.clear();
            playerTwo.clear();
            putOnDeck.clear();
            grabDeck.clear();
            
            //Se limpia el html del contenedor 'cardsContainer'.
            areaTable.innerHTML = "";
            areaP1.innerHTML = "";
            
            //Se repinta el contenedor con el nuevo cambio efectuado en las cartas.
            this.paintCards(jsonOfCards);
        
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
        tempColor = "",
        ID = `${symbol}_${color}_${count}`,
        cssContent = new CssContent(),
        html,
        styleText,
        styleCard;
        var nameImage;
        
        arrIDs.push(ID);   
        
        //Combio css al color basico.
        if(symbol == "change color"){
            //symbol = symbol.replace(" ","_");
        }
        if(color == "yellow"){
            tempColor = "#CCE41C";
        }
        if(color == "red"){
            tempColor = "#CC3131";
        }
        if(color == "blue"){
            tempColor = "#2A2C91";
        }
        if(color == "green"){
            tempColor = "#2D8B28";
        }
        if(color == "black"){
            tempColor = "black";
        }
        if(viewCard == 2){
            nameImage = "uno";
        }
        if(viewCard == 1){
            nameImage = "fondo";
        }

            styleCard = cssContent.getStyleCard(tempColor,nameImage);
            styleText = cssContent.getStyleText(nameImage,symbol);
            html = `<div id="${ID}" class="${ID}" name="${position}" style="${styleCard}" onClick="eventClickedCard(this);">
                        <span>
                            <h1 style="${styleText}">${symbol}</h1>
                        </span>
                    </div>\n`;
        
        result.push(html,ID);                               //[html,ID]

        return result;
    }

}