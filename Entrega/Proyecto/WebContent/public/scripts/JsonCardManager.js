function JsonCardsManager(){
    this.jsonCards = {"T1LL":{"T1LL_playerOne":{"deck":[{"symbol":"block","color":"green"},{"symbol":"2","color":"red"},{"symbol":"block","color":"blue"},{"symbol":"change color","color":"black"},{"symbol":"+2","color":"blue"},{"symbol":"2","color":"red"},{"symbol":"1","color":"yellow"}],"score":0,"status":true},"T1LL_playerTwo":{"deck":[{"symbol":"4","color":"yellow"},{"symbol":"reverse","color":"red"},{"symbol":"block","color":"red"},{"symbol":"+4","color":"black"},{"symbol":"8","color":"red"},{"symbol":"+2","color":"yellow"},{"symbol":"9","color":"yellow"}],"score":0,"status":false},"grabDeck":[{"symbol":"6","color":"red"},{"symbol":"5","color":"blue"},{"symbol":"change color","color":"black"},{"symbol":"3","color":"red"},{"symbol":"5","color":"red"},{"symbol":"5","color":"green"},{"symbol":"4","color":"blue"},{"symbol":"9","color":"yellow"},{"symbol":"6","color":"yellow"},{"symbol":"reverse","color":"yellow"},{"symbol":"6","color":"yellow"},{"symbol":"8","color":"blue"},{"symbol":"7","color":"green"},{"symbol":"6","color":"red"},{"symbol":"+4","color":"black"},{"symbol":"change color","color":"black"},{"symbol":"3","color":"blue"},{"symbol":"9","color":"green"},{"symbol":"+2","color":"red"},{"symbol":"6","color":"blue"},{"symbol":"block","color":"yellow"},{"symbol":"2","color":"yellow"},{"symbol":"1","color":"blue"},{"symbol":"4","color":"green"},{"symbol":"reverse","color":"green"},{"symbol":"5","color":"yellow"},{"symbol":"8","color":"yellow"},{"symbol":"4","color":"red"},{"symbol":"2","color":"blue"},{"symbol":"7","color":"yellow"},{"symbol":"1","color":"green"},{"symbol":"6","color":"blue"},{"symbol":"2","color":"blue"},{"symbol":"4","color":"red"},{"symbol":"+4","color":"black"},{"symbol":"5","color":"red"},{"symbol":"5","color":"yellow"},{"symbol":"3","color":"red"},{"symbol":"2","color":"green"},{"symbol":"7","color":"red"},{"symbol":"9","color":"red"},{"symbol":"0","color":"yellow"},{"symbol":"9","color":"blue"},{"symbol":"+2","color":"yellow"},{"symbol":"1","color":"blue"},{"symbol":"3","color":"yellow"},{"symbol":"9","color":"blue"},{"symbol":"0","color":"blue"},{"symbol":"5","color":"green"},{"symbol":"+2","color":"red"},{"symbol":"3","color":"yellow"},{"symbol":"block","color":"blue"},{"symbol":"8","color":"yellow"},{"symbol":"1","color":"red"},{"symbol":"7","color":"yellow"},{"symbol":"+2","color":"blue"},{"symbol":"8","color":"blue"},{"symbol":"1","color":"red"},{"symbol":"+2","color":"green"},{"symbol":"8","color":"red"},{"symbol":"reverse","color":"yellow"},{"symbol":"3","color":"green"},{"symbol":"9","color":"red"},{"symbol":"1","color":"green"},{"symbol":"5","color":"blue"},{"symbol":"9","color":"green"},{"symbol":"7","color":"blue"},{"symbol":"7","color":"blue"},{"symbol":"reverse","color":"blue"},{"symbol":"reverse","color":"red"},{"symbol":"0","color":"green"},{"symbol":"6","color":"green"},{"symbol":"7","color":"green"},{"symbol":"2","color":"yellow"},{"symbol":"4","color":"blue"},{"symbol":"change color","color":"black"},{"symbol":"0","color":"red"},{"symbol":"4","color":"green"},{"symbol":"2","color":"green"},{"symbol":"7","color":"red"},{"symbol":"3","color":"green"},{"symbol":"reverse","color":"green"},{"symbol":"+2","color":"green"},{"symbol":"8","color":"green"},{"symbol":"reverse","color":"blue"},{"symbol":"block","color":"red"},{"symbol":"block","color":"green"},{"symbol":"1","color":"yellow"},{"symbol":"3","color":"blue"},{"symbol":"8","color":"green"},{"symbol":"+4","color":"black"},{"symbol":"6","color":"green"},{"symbol":"block","color":"yellow"}],"infoPutOnDeck":[{"symbol":"4","color":"yellow"}]}}
    this.arrCardsP1 = [];
    this.arrCardsP2 = [];
    this.arrPrincipalDeck = [];
    this.arrPutOnDeck = [];
    this.totalDeck;
    
    //Extrae los elementos del json enviado por el servidor.
    //Y agregando en un arreglo todas las cartas del juego.
    this.extractDeckOfJsonCards = function(json){
        var infoPlayer1,
            infoPlayer2,
            infoPrincipalDeck,
            infoPutOnDeck,
            principalDeck = [];

        var tempExtractedElement = Object.values(json['T1LL']);
        infoPlayer1         = tempExtractedElement[0];
        infoPlayer2         = tempExtractedElement[1];
        infoPrincipalDeck   = tempExtractedElement[2];
        infoPutOnDeck       = tempExtractedElement[3];

        //  [ { } , score , state ] - Extraer las cartas para jugador 1.
        var contentPlayer1 = Object.values(infoPlayer1);
        var cardsP1 = Object.values(contentPlayer1[0]);
        for (let info in cardsP1){
            let tempArr = Object.values(cardsP1[info]);
            this.arrCardsP1.push(tempArr);
            principalDeck.push(Object.values(tempArr));
        }
        
        //  [ { } , score , state ] - Extraer las cartas para jugador 2.
        var contentPlayer2 = Object.values(infoPlayer2);
        var cardsP2 = Object.values(contentPlayer2[0]);
        for (let info in cardsP2){
            let tempArr = Object.values(cardsP2[info]);
            this.arrCardsP2.push(tempArr);
            principalDeck.push(tempArr);
        }

        // [ { } ] - Extrae la carta para la baraja descartada.
        var contentPutOnDeck = Object.values(infoPutOnDeck);
        var cardsPutOnDeck =  Object.values(contentPutOnDeck[0]);
        this.arrPutOnDeck.push(cardsPutOnDeck);
        principalDeck.push(cardsPutOnDeck);

        // [ { } ] - Extrae el resto de cartas para la baraja principal.
        var contentPrincipalDeck = Object.values(infoPrincipalDeck);
        for (let info in contentPrincipalDeck){
            let tempArr = Object.values(contentPrincipalDeck[info]);
            this.arrPrincipalDeck.push(tempArr);
            principalDeck.push(tempArr);
        }
        this.totalDeck = principalDeck;
        return principalDeck;
    } 
}