function UNOLogic(){

    this.logic = function(n, currentPlayer){
  
    	last = putOnDeck.last();
    	
    	if(currentPlayer == "1"){
    		currrent = playerOne.search(n);
    		console.log(currrent);
    	}else{
    		currrent = playerTwo.search(n);
    		//console.log("playerTwo");
    	}

        if( 
        	current.value.symbol == last.value.symbol	||
        	current.value.color == last.value.color		|| 
            current.value.color == "black" 
        ){ 
        	
            return true;

        }else{
            return false; 
        }
    }
}
