function ElementsManager(){
//=================================================================================================
    var clickedCard,
 
    //zIndex inicial.
    currentzIndex = -299,
    arrIDs = [],
    count = 1;
        
    //Estilo inicial.
    styleCss = `<style>
                    div.table {
                        position: fixed;
                        border: 2px solid black;
                        width: 100%;
                        height: 33%;
                    }
                    
                    #areaP1 {
                        border: 2px solid black;
                        background-color: #C24832;
                        top: 0;
                        left: 0;
                        z-index:-10000;
                    }
    
                    #areaTable {
                        background-color: #E5E0E0;
                        top: 33%;
                        left: 0;
                        z-index:-10000;
                    }
    
                    #areaP2 {
                        background-color: #3FC65D;
                        bottom: 0;
                        right: 0;
                        z-index:-10000;
                    }
                    #discartedDeck {
                        border: 1px solid blue;
                        position: absolute;
                        top:36%;
                        left:30%;
                        width:8%;
                        height:26%;
                        box-shadow: 1px 1px 1px #777, 0px 0px 10px 10px #3740B4;
                    }
                    #principalDeck {
                        border: 1px solid red;
                        position: absolute;
                        top:36%;
                        left:60%;
                        width:8%;
                        height:26%;
                        box-shadow: 1px 1px 1px #777, 0px 0px 10px 10px #3740B4;
                    }
                `;
    
    this.getArrIDs = function(){
        return arrIDs;
    }

    //Creacion de los objetos/divs cartas mediante LL.
    this.paintCards = function(json,ID){
        
    	   	
        jsonToList.parseToList(json,ID);
        var decksArray = [playerOne,playerTwo,putOnDeck,grabDeck];
        
        for(j in decksArray){
            for(let i=1; i<= decksArray[j].amount(); i++){
                currentNode = decksArray[j].search(i);
                let symbol = currentNode.value.symbol;
                let color = currentNode.value.color;
                let result = this.createCard(symbol,color,i);         
    
                currentNode.id = result[1];
                container.innerHTML += result[0];
    
                count = count + 1;
            }
        }
        this.distributeCards(playerOne,1);
        this.distributeCards(playerTwo,2);
        this.distributeCards(putOnDeck,3);
        this.distributeCards(grabDeck,4);
        this.finishStyle();
               
    }    
    
    //Obtener el estilo.
    this.getStyle = function(){
        return styleCss;
    }
    
   //Element es el div de la carta. Lo mismo si usara getElementById
    this.eventT = function(element){
        
        var status = val.movementValidator(playerOne,putOnDeck);
        if(status == true){
            
            if(clickedCard == null){
                clickedCard = element;
                clickedCard.style.transition = "all 0.2s ease 0s"
                clickedCard.style.boxShadow = "1px 1px 1px #777, 0px 0px 30px 30px #B43B37";
                        
            }else{
        
            	clickedCard.style.boxShadow = "none";
                clickedCard = element;
                clickedCard.style.transition = "all 0.2s ease 0s"
                clickedCard.style.boxShadow = "1px 1px 1px #777, 0px 0px 30px 30px #B43B37";
            }

        }else{
            console.log("AGARRE UNA CARTA");
        } 
    }
    
    //Evento al clickear en la carta encima de la baraja descartada.
    this.eventDeck = function(){
        
        if(clickedCard != null){
            
        	var position = parseInt(clickedCard.getAttribute('name'));
        	console.log(position);
            if(ruler.logic(position) == true){
                
            	clickedCard.style.zIndex = `${currentzIndex}`;
                clickedCard.style.top = "40vh";
                clickedCard.style.left = "30vw";
                clickedCard.style.boxShadow = "none";
                clickedCard.style.transition = "all 0.2s ease 0s"
                clickedCard = null;

                //Envio al servidor.
                jsonOfCards = listToJson.parseToJSON(playerOne,playerTwo,putOnDeck,grabDeck);
                
                playerOne.clear();
                playerTwo.clear();
                putOnDeck.clear();
                grabDeck.clear();
                container.innerHTML = " ";
                this.paintCards(jsonOfCards,ID);
                

            }else{
                    //Cuando un moviminento no es validado.
                    alert("MOVIMIENTO NO ES VALIDO");
                }
            }else{
            console.log("No hay carta clickeada.")
        }
                   
    }
    
    //Reparte las cartas al inicio, la cantidad correspondiente a cada jugador.
    //Dejando una carta en el area de cardas descartadas.
    this.distributeCards = function(deck,option){
        var valueMoveP1 = 20,
            valueDelayDistributed = 0.5,
            top,
            left;

        if(option == 1){            //Jugador 1.
            top="70%";
        
        }if(option == 2){           //Jugador 2.
            top="5vh";              
        }
        if(option == 3){            //Carta descartada.
            left = "30vw";
        }
        
        for (i=1; i<=deck.amount(); i++){   
            var currentNode = deck.search(i);
            let id = currentNode.id;
            var currentDiv = document.getElementById(`${id}`)

            currentDiv.style.animation = "distributeCards .8s ease .5s forwards";
            currentDiv.style.animationDelay = `${valueDelayDistributed}s`;
            currentDiv.style.animationDuration = "0.5s";    
            currentDiv.style.transition = `all ${valueDelayDistributed}s ease 0s`;
            
            currentDiv.style.top = top;
            if(option == 1 || option == 2){
                currentDiv.style.left =`${valueMoveP1}vw`;
                valueMoveP1 = valueMoveP1 + 10;
                valueDelayDistributed = valueDelayDistributed + 0.3;
            }
             
            if(option == 3){
                currentDiv.style.left = left;
            }
        }
    }
    
    //Funcion para crear cartas.
    this.createCard = function(symbol,color,position){
        let result = [],
            tempColor = "";
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

        var ID = `${symbol}_${color}_${count}`;
        
        arrIDs.push(ID);   
        
        var style = `             
                    background-color: ${tempColor};
                    border-radius: 12px;
                    border: solid black ;
                    cursor: pointer;
                    display: block;  
                    width: 4%;
                    height: 15%;
                    padding: 20px 20px;
                    position: absolute;
                    top: 39.5%;
                    left: 61%;
                    font-size: 50%; 
                    font-family: 'Fira Code', monospace; 
                    text-align: center;
                    vertical-align: middle;
                    line-height: 600%;
                    color:white; 
        
		        	background-image:url('../Images/mancha.png');
                    background-size:100% 50%;
                    background-repeat: no-repeat;
                    background-attachment: absolute;
                    background-position: center center;
                    opacity:1;
                    `;

        var html = `<div id="${ID}" class="${ID}" name="${position}" style="${style}" onClick="eventT(this);">
                        <span>
                            <h1><strong>${symbol}</strong></h1>
                        </span>
                    </div>\n`;
        
        result.push(html);
        result.push(ID);
        
        return result;
    }

    this.getID = function(symbol,color){
        var ID =`${symbol}_${color}`;

            if(document.getElementById(ID)){
                ID = `${ID}_2`;
            }
        return ID;
    }
    
    //Define la animacion de distribucion.
    this.setDistributeAnimation = function(){
        styleCss += `
    
            @keyframes distributeCards {
                from { 
                    opacity: 1;
                } 
            
                to {
                    transform: rotateY(180deg);    
                    opacity: 1; 
                } 
            }
        `;
    }
        //Finaliza el agregado de estilo.
    this.finishStyle = function(){
            styleCss +=`</style>`;
        }
    
    this.getPrincipalDeck = function(){
        return arrOfPrincipalDeck;
    }
}