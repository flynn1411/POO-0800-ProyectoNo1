function UNOLogic(){

    this.logic = function(n, currentPlayer){
  
    	last = putOnDeck.last();
    	
    	if(currentPlayer == "1"){
    		currrent = playerOne.search(n);
    		console.log("playerOne");
    	}else{
    		currrent = playerTwo.search(n);
    		console.log("playerTwo");
    	}

        if( 
        	last.value.symbol == current.value.symbol 	||
        	last.value.color == current.value.color		|| 
            "black" == current.value.color
        ){ 
        	
            return true;

        }else{
            return false; 
        }
    }
}
