function UNOLogic(){

    this.logic = function(n,playerDeck,deck){
    
        //obtener la ultima carta de putOnDeck
        last = deck.first
        while(last.next){
            last = last.next;
        }
        
        count = 0;
        current = playerDeck.first;
        
        //Recorrer todas las cartas del jugador 
        while(current.next){
            //cuando se encuentre la carta buscada se hace el cambio 
            if(count == n){
                if( (current.value.symbol == last.value.symbol) ||
                    (current.value.color == last.value.color)   ||
                    (current.value.color == "black")
                   ){
                    return true;
                   
                }else{
                    return false; 
                }
                            
            }else{
                current = current.next;
                count++;
            }
        }
        //Carta ecnotnrada cuando es la ultima de la lista 
        if(!current.next){
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

}
