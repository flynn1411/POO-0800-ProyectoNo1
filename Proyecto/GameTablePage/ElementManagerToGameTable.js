function ElementsManager(){

    //Guarda la carta que se ha clickeado. 
    var clickedCard,

    //Guarda todas las cartas (baraja principal).
    tempArrPrincipalDeck = [tempCard1,tempCard2,tempCard3,tempCard4,
                                tempCard5,tempCard6,tempCard7,tempCard8,
                                tempCard9,tempCard10,tempCard11,tempCard12,
                                tempCard13,tempCard14,tempCard15,tempCard16,
                                tempCard17,tempCard18,tempCard19,tempCard20
                            ];

    //Contiene las cartas de la baraja del jugador 1.                        
    tempArrDeckP1 = [],

    //Contiene las cartas de la baraja del jugador 2.
    tempArrDeckP2 = [],
    
    //Contiene las cartas de la baraja descartada.
    discardedDeckArr = [],
    
    //zIndex inicial.
    currentzIndex = -299,
    
    //El turno actual.
    currentTurn = 1,
    
    //Estilo inicial.
    styleCss = `<style>
                    div.box{
                        position: fixed;
                        border: 2px solid black;
                        width: 100vw;
                        height: 33vh;
                    }
    
                    div#areaP1{
                        background-color: #40CC37;
                        top: 0;
                        left: 0;
                        z-index:-10000;
                    }
    
                    div#areaTable{
                        background-color: #D99486;
                        bottom: 0;
                        left: 0;
                        z-index:-10000;
                    }
    
                    div#areaP2{
                        background-color: #427DCD;
                        bottom: 0;
                        right: 0;
                        z-index:-10000;
                    }
                    div#discardedDeck{
                        border: 1px solid red;
                        position: absolute;
                        top:40vh;
                        left:30vw;
                        width:95px;
                        height:135px;
                        box-shadow: 1px 1px 1px #777, 0px 0px 10px 10px #3740B4;
                    }
                    div#principalDeck{
                        border: 1px solid red;
                        position: absolute;
                        top:40vh;
                        left:60vw;
                        width:95px;
                        height:135px;
                        box-shadow: 1px 1px 1px #777, 0px 0px 10px 10px #3740B4;
                    }
                `;
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
        
        //Reparte 7 cartas al jugador 1.
        for(let i=0;i<=6;i++){
                tempArrPrincipalDeck[i].style.animation = "distributeCards .8s ease .5s forwards";
                tempArrPrincipalDeck[i].style.animationDelay = `${valueDelayDistributed}s`;
                tempArrPrincipalDeck[i].style.animationDuration = "0.5s";    
                tempArrPrincipalDeck[i].style.transition = `all ${valueDelayDistributed}s ease 0s`;
                tempArrPrincipalDeck[i].style.top = "70vh";
                tempArrPrincipalDeck[i].style.left =`${valueMoveP1}vw`;
                
                valueMoveP1 = valueMoveP1 + 10;
                valueDelayDistributed =valueDelayDistributed + 0.3;
    
                tempArrDeckP1.push(tempArrPrincipalDeck[i]);
            }
    
            //Reparte 7 cartas al jugador 1.
            for (let i=7;i<=14;i++){
                if(i == 14){
                    tempArrPrincipalDeck[i].style.animation = "distributeCards .8s ease .5s forwards";
                    tempArrPrincipalDeck[i].style.animationDelay = `${valueDelayDistributed-2}s`;
                    tempArrPrincipalDeck[i].style.animationDuration = "0.5s";    
                    tempArrPrincipalDeck[i].style.transition = `all ${valueDelayDistributed-1.5}s ease 0s`;
    
                    tempArrPrincipalDeck[i].style.top ="38vh";
                    tempArrPrincipalDeck[i].style.left = "30vw";        
                    tempArrPrincipalDeck[i].style.zIndex = "-300";
    
                    discardedDeckArr.push(tempArrPrincipalDeck[i]);
                }else{
                    
                    tempArrPrincipalDeck[i].style.animationDelay = `${valueDelayDistributed}s`;
                    tempArrPrincipalDeck[i].style.animationDuration = "0.5s";    
                    tempArrPrincipalDeck[i].style.transition = `all ${valueDelayDistributed-2}s ease 0.5s`;
                    tempArrPrincipalDeck[i].style.top ="10vh";
                    tempArrPrincipalDeck[i].style.left =`${valueMoveP2}vw`;
                    
                    valueMoveP2 = valueMoveP2 + 10;
                    valueDelayDistributed =valueDelayDistributed + 0.3;     
                    tempArrDeckP2.push(tempArrPrincipalDeck[i]);
                }
        }
        //Se eliminan del mazo principal las 15 cartas repartidas.
        for (let i=0;i<=14;i++){
            tempArrPrincipalDeck.shift();
        }
    
        //console.log("Tamano baraja principal: " + tempArrPrincipalDeck.length);
        //console.log("Tamano baraja P1: " + tempArrDeckP1.length);
        //console.log("Tamano baraja P2: " + tempArrDeckP2.length);
        //console.log("Tamano baraja descartada: " + discardedDeckArr.length);
        
    }
    //Funcion para crear cartas.
    this.createCard = function(elementID,top,left,urlImage){
    
        styleCss += `
        .${elementID} {    
            opacity: 1;
            background-image: url("${urlImage}");
            border-radius: 12px;
            background-size: 90px 130px;
            border: solid black ;
            border-radius: 12px;
            cursor: pointer;
            display: block;  
            width: 50px;
            height: 90px;
            padding: 20px 20px;
            transition: all 0.2s ease 0s;
            position: absolute;
            top: ${top}vh;
            left: ${left}vw;
        }
        `;
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
}