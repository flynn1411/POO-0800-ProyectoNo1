function ListToJSON(){
   
    this.parseToJSON = function(player1,player2,putOnDeck,grabDeck){
        primaryJSON = {
            "sessionID":{
                "sessionID_player1":{
                    "deck":null,
                    "score":null,
                    "status":null
                },
                "sessionID_player2":{
                    "deck":null,
                    "score":null,
                    "status":null
                },
                "putOnDeck":null,
                "grabDeck":null
            }
        };

        jsonDeck = {"Player1":player1,"Player2":player2,"putOnDeck":putOnDeck,"grabDeck":grabDeck};

        for(i in jsonDeck){
            array = [];
            current = jsonDeck[i].first;

            while(current){
                jsonCard = {"symbol":null,"color":null};
                jsonCard["symbol"] = current.value.symbol;
                jsonCard["color"] = current.value.color;
                array.push(jsonCard);

                current = current.next;
            }
            
            switch(jsonDeck[i]){
                case player1:
                    primaryJSON["sessionID"]["sessionID_player1"]["deck"] = array;
                break;

                case player2:
                    primaryJSON["sessionID"]["sessionID_player2"]["deck"] = array;
                break;
                
                case putOnDeck:
                    primaryJSON["sessionID"]["putOnDeck"] = array;
                
                case grabDeck:
                    primaryJSON["sessionID"]["grabDeck"] = array;
            }
        }

        return primaryJSON;
    }
}