function Validator(){

    this.movementValidator = function(playerDeck,putOnDeck){
     
        //obtener la ultima carta de putOnDeck
        last = putOnDeck.last();
        current = playerDeck.first;
        
        while(current.next){
            if( (current.value.symbol == last.value.symbol) ||
                (current.value.color == last.value.color)   ||
                (current.value.color == "black")
            ){
                return true;
    
            }else{
                current = current.next
            }
        }
    
        if( (current.value.symbol == last.value.symbol) ||
            (current.value.color == last.value.color)   ||
            (current.value.color == "black")
        ){
            return true;
    
        }else{
            return false;
        }
    }
}
