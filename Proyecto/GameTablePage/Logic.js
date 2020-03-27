function UNOLogic(){

    this.logic = function(n,currentTurn){
        var current,last,addCard,
            last = putOnDeck.last();
        
        if(currentTurn == 1){
            current = playerOne.search(n);
            if( 
                last.value.symbol == current.value.symbol 	||
                last.value.color == current.value.color		|| 
                "black" == current.value.color
            ){
                addCard = playerOne.extract(n);
                putOnDeck.add(addCard.value.symbol, addCard.value.color);    
                
                return true;

            }else{
                return false; 
            }

        }if(currentTurn == 2){
            current = playerTwo.search(n); 
            if( 
                last.value.symbol == current.value.symbol 	||
                last.value.color == current.value.color		|| 
                "black" == current.value.color
            ){
                addCard = playerTwo.extract(n);
                putOnDeck.add(addCard.value.symbol, addCard.value.color);
                return true;
            }else{
                return false;
            }
        }
    }
}
