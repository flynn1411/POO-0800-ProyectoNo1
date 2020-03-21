function JSONToList(){
    this.parseToList = function(json){
        for(j=0; j<4;j++){
            switch(j){
                case 0:
                    deckArray = json["sessionID"]["putOnDeck"];
                    for(i=0; i<deckArray.length;i++){
                        let a = deckArray[i];
                        let symbol = a["symbol"];
                        let color = a["color"];
                        putOnDeck.add(symbol,color);
                    }
                break;
        
                case 1:
                    deckArray = json["sessionID"]["sessionID_player1"]["deck"];
                    for(i=0; i<deckArray.length;i++){
                        let a = deckArray[i];
                        let symbol = a["symbol"];
                        let color = a["color"];
                        playerOne.add(symbol,color);
                    }
                break;
        
                case 2:
                    deckArray = json["sessionID"]["sessionID_player2"]["deck"];
                    for(i=0; i<deckArray.length;i++){
                        let a = deckArray[i];
                        let symbol = a["symbol"];
                        let color = a["color"];
                        playerTwo.add(symbol,color);
                    }
                break;
        
                case 3:
                    deckArray = json["sessionID"]["grabDeck"];
                    for(i=0; i<deckArray.length;i++){
                        let a = deckArray[i];
                        let symbol = a["symbol"];
                        let color = a["color"];
                        grabDeck.add(symbol,color);
                    }
                break;
            }
        }
    }
}