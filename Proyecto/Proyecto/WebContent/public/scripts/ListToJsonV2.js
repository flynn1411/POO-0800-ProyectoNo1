function ListToJSON(){
   
    this.parseToJSON = function(player1,player2,putOnDeck,grabDeck,sessionID){
    	var playerOne = `${sessionID}_playerOne`;
    	var playerTwo = `${sessionID}_playerTwo`;
    	
    	primaryJSON = {};
    	primaryJSON[sessionID] = {};
    	primaryJSON[sessionID][playerOne] = {
    			"deck":null,
                "score":null,
                 "status":null
                    };
    	primaryJSON[sessionID][playerTwo] = {
    			"deck":null,
                "score":null,
                 "status":null
                    };
    	primaryJSON[sessionID]["putOnDeck"]=null;
    	primaryJSON[sessionID]["grabDeck"]=null;
    	
        /*primaryJSON = {
            sessionID:{
                playerOne:{
                    "deck":null,
                    "score":null,
                    "status":null
                },
                playerTwo:{
                    "deck":null,
                    "score":null,
                    "status":null
                },
                "putOnDeck":null,
                "grabDeck":null
            }
        };*/
        //console.log(primaryJSON);

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
                    primaryJSON[sessionID][playerOne]["deck"] = array;
                break;

                case player2:
                    primaryJSON[sessionID][playerOne]["deck"] = array;
                break;
                
                case putOnDeck:
                    primaryJSON[sessionID]["putOnDeck"] = array;
                
                case grabDeck:
                    primaryJSON[sessionID]["grabDeck"] = array;
            }
        }

        return primaryJSON;
    }
}