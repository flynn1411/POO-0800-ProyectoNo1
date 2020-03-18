function ElementsManager(){

    //Guarda la carta que se ha clickeado. 
    var clickedCard,

    //Contiene las cartas de la baraja del jugador 1.                        
    tempArrDeckP1 = [],

    //Arreglo temporal de los ids de las cartas.
    tempArrPrincipalDeck = [],

    //Contiene las cartas de la baraja del jugador 2.
    tempArrDeckP2 = [],
    
    //Contiene las cartas de la baraja descartada.
    discardedDeckArr = [],
    
    //zIndex inicial.
    currentzIndex = -299,
    
    //El turno actual.
    currentTurn = 1,
    
    pDeckIds = [],
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
    
    this.paintCards = function(){
        var jsonManager = new JsonCardsManager();
        jsonManager.extractDeckOfJsonCards(jsonManager.jsonCards);
        //var tempArray = jsonManager.arrCardsP1;
        var tempArray = jsonManager.totalDeck;
        
        //console.log(tempArray);

        for (let i in tempArray){
            let divE = this.createCard(tempArray[i][0],tempArray[i][1]); 
            container.innerHTML += divE;  
        }
    }

    //Obtener el estilo.
    this.getStyle = function(){
        return styleCss;
    }
    //Evento al clickear en las cartas del jugador.
    //Element es el div de la carta. Lo mismo si usara getElementById
    this.eventT = function(element){
        var sideOfClickedCard = tempArrDeckP1.includes(element);     //Verifica si el valor esta en el arreglo.
        var playerCard;
    
        if(sideOfClickedCard == true){playerCard = 1;}
        else{playerCard = 2;}
    
        if(currentTurn == playerCard){
            
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
    
        }
    }
        
    //Evento al clickear en la carta encima de la baraja descartada.
    this.eventDeck = function(){
    
        if(clickedCard != null){
            var action = "TestValidateMovement.jsp";
            var parameters = {
                "player":1,
                "from":"hisDesck",
                "to":"discartedDeck",
                "cards":{
                        "player":{"color":"green","number":7},
                        "deck":{"color":"green","number":3}    
                        }
                };
    
            var callback = function(response){
                if(response == "true"){
                    //console.log("ZIndex de la carta clickeada: " + currentzIndex);
                    clickedCard.style.zIndex = `${currentzIndex}`;
                    clickedCard.style.top = "40vh";
                    clickedCard.style.left = "30vw";
                    clickedCard.style.boxShadow = "none";
                    clickedCard.style.transition = "all 0.2s ease 0s"
                    clickedCard = null;
                    
                }
                else{
                    //Cuando un moviminento no es validado.
                    console.log("MOVIMIENTO INVALIDO");
                }
            }    
            
            $.get(action,parameters,callback);
    
            
        }else{
            console.log("No hay carta clickeada.")
        }
    
        //Al terminar de colocar carta, se cambia turno.
        if(currentTurn == 1){currentTurn = 2;}
        else{currentTurn = 1;}
        
        currentzIndex = currentzIndex + 1; 
    }
    
    //Reparte las cartas al inicio, la cantidad correspondiente a cada jugador.
    //Dejando una carta en el area de cardas descartadas.
    this.distributeCards = function(){
        //setDistributeAnimation();
        var valueMoveP1 = 20,
            valueMoveP2 = 20,
            valueDelayDistributed = 0.5;
            pDeckIds = this.extractIds(tempArrPrincipalDeck);

        //Reparte 7 cartas al jugador 1.
        for(let i=0; i<=6; i++){
            this.setDistributeAnimation();
               
            pDeckIds[i].style.animation = "distributeCards .8s ease .5s forwards";
            pDeckIds[i].style.animationDelay = `${valueDelayDistributed}s`;
            pDeckIds[i].style.animationDuration = "0.5s";    
            pDeckIds[i].style.transition = `all ${valueDelayDistributed}s ease 0s`;
            pDeckIds[i].style.top = "70%";
            pDeckIds[i].style.left =`${valueMoveP1}vw`;
                
                valueMoveP1 = valueMoveP1 + 10;
                valueDelayDistributed = valueDelayDistributed + 0.3;
    
                tempArrDeckP1.push(pDeckIds[i]);
            }
            
            
            //Reparte 7 cartas al jugador 2.
            for (let i=7; i<=14; i++){
                if(i == 14){
                    pDeckIds[i].style.animation = "distributeCards .8s ease .5s forwards";
                    pDeckIds[i].style.animationDelay = `${valueDelayDistributed-2}s`;
                    pDeckIds[i].style.animationDuration = "0.5s";    
                    pDeckIds[i].style.transition = `all ${valueDelayDistributed-1.5}s ease 0s`;
    
                    pDeckIds[i].style.top ="38vh";
                    pDeckIds[i].style.left = "30vw";        
                    pDeckIds[i].style.zIndex = "-300";
    
                    discardedDeckArr.push(pDeckIds[i]);
                }else{
                    
                    pDeckIds[i].style.animationDelay = `${valueDelayDistributed}s`;
                    pDeckIds[i].style.animationDuration = "0.5s";    
                    pDeckIds[i].style.transition = `all ${valueDelayDistributed-2}s ease 0.5s`;
                    pDeckIds[i].style.top ="10vh";
                    pDeckIds[i].style.left =`${valueMoveP2}vw`;
                    
                    valueMoveP2 = valueMoveP2 + 10;
                    valueDelayDistributed =valueDelayDistributed + 0.3;     
                    tempArrDeckP2.push(pDeckIds[i]);
                }
            }
        //Se eliminan del mazo principal las 15 cartas repartidas.
        /*
        for (let i=0;i<=14;i++){
            tempArrPrincipalDeck.shift();
        }
        */
        //console.log("Tamano baraja principal: " + tempArrPrincipalDeck.length);
        //console.log("Tamano baraja P1: " + tempArrDeckP1.length);
        //console.log("Tamano baraja P2: " + tempArrDeckP2.length);
        //console.log("Tamano baraja descartada: " + discardedDeckArr.length);
        
    }
    //Funcion para crear cartas.
    this.createCard = function(symbol,color){
        if(color == "yellow"){
            color = "#CCE41C";
        }
        if(color == "red"){
            color = "#CC3131";
        }
        if(color == "blue"){
            color = "#2A2C91";
        }
        if(color == "green"){
            color = "#2D8B28";
        }
        var ID = `${symbol.replace(" ","")}_${color}`
        

        if(tempArrPrincipalDeck.includes(ID) ==true){
            ID = `${ID}_2`;
        }

        tempArrPrincipalDeck.push(ID);
        
        var style = `              
                    background-color: ${color};
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
                    line-height: 90*1.5vh; 
                    text-align: center;
                    color:white;
                    `;

        var html = `<div id="${ID}" class="${ID}" style="${style}" onClick="eventT(this);">
                        <span style = "vertical-align: middle; display: inline-block">
                            <h1><strong>${symbol}</strong></h1>
                        </span>
                    </div>\n`;

        return html;
    }

    this.extractIds = function(arr){
        var arrayOfIds = [];
        for (let id in arr){
            arrayOfIds.push(document.getElementById(`${arr[id]}`));
        }
        return arrayOfIds;
        
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
    this.fishStyle = function(){
            styleCss +=`</style>`;
        }
    
        this.getPrincipalDeck = function(){
            return tempArrPrincipalDeck;
        }
}