function JSONToList(){

    this.parseToList = function(json,ID){


        //decks = ["putOndeck","playerOne","playerTwo","grabDeck"];
        for(j=0; j<4;j++){

            if(j == 0){
                deckArray = json[ID]["putOnDeck"];
                for(i=0; i<deckArray.length;i++){
                    let a = deckArray[i];
                    let symbol = a["symbol"];
                    let color = a["color"];
                    putOnDeck.add(symbol,color);
                }

            }else if(j == 1 ){
                deckArray = json[ID][ID+"_playerOne"]["deck"];
                for(i=0; i<deckArray.length;i++){
                    let a = deckArray[i];
                    let symbol = a["symbol"];
                    let color = a["color"];
                    playerOne.add(symbol,color);
                }
            }else if(j == 2 ){
                deckArray = json[ID][ID+"_playerTwo"]["deck"];
                for(i=0; i<deckArray.length;i++){
                    let a = deckArray[i];
                    let symbol = a["symbol"];
                    let color = a["color"];
                    playerTwo.add(symbol,color);
                }
            }else if(j == 3 ){
                deckArray = json[ID]["grabDeck"];
                for(i=0; i<deckArray.length;i++){
                    let a = deckArray[i];
                    let symbol = a["symbol"];
                    let color = a["color"];
                    grabDeck.add(symbol,color);
                }
            }
        }

    }
}
