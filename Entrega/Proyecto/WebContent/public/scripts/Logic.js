function UNOLogic(){

    this.logic = function(n, currentPlayer){

        last = putOnDeck.last();

        if(currentPlayer == "1"){
            if(n == 1){
                current = playerOne.first;
            }else{
                currrent = playerOne.search(n);
            }
        }else{
            if(n == 1){
                current = playerTwo.first;
            }else{
                currrent = playerTwo.search(n);
            }
        }

        if( 
            current.value.symbol == last.value.symbol || 
            current.value.color == last.value.color  ||    
            current.value.color == "black"||
            last.value.color == "black"
        ){ 
            return true;

        }else{
            return false; 
        }
    }
}
