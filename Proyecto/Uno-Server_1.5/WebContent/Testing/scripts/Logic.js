function UNOLogic(){

    this.logic = function(n){
        
    	last = putOnDeck.last();
        currrent = playerOne.search(n);
        
        console.log(last);
        console.log(currrent);
     
        if( 
        	last.value.symbol == current.value.symbol 	||
        	last.value.color == current.value.color		|| 
            "black" == current.value.color
        ){
        	
        	var addCard = playerOne.extract(n);
        	putOnDeck.add(addCard.value.symbol,addCard.value.color);    
        	
            return true;

        }else{
            return false; 
        }
    }
}
