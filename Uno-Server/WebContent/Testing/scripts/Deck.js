//Generador de un numero random a partir del tamaño de una lista 
function GenerateRandom(){
    this.random = function(min,max){return Math.floor(Math.random()*(max - min)) + min;}
}

function Card(symbol,color){
    this.symbol = symbol;
    this.color = color;
}


//Objeto para las cartas 
function Node(value){
    this.value =value;
    this.next = null;
}

//Lista enlazada para administrar las barajas 
function LinkList(){
    
    this.first = null;

    //agrgar cartas a la baraja 
    this.add = function(symbol,color){
        let card = new Card(symbol,color); 
        let node = new Node(card)
        if(!this.first)this.first = node;
        else{
            let current = this.first;
            while(current.next)current = current.next;
            current.next = node;
        }
    }
    
    //Barajar y repartir 
    this.extract = function(n){
        let count = 1;

        if(n == 1){
            
            let card = new Card(this.first.value.symbol,this.first.value.color);
            let send = new Node(card);
            
            let queue = this.first.next;
            this.first = queue;
            return send;
                    
        }else if( n >1 ){
            let current = this.first;
            let previous = null;
            while(current){
                if(count == n){
                    let card = new Card(current.value.symbol,current.value.color)
                    let send = new Node(card);
                    previous.next = current.next;
                    return send;
                }
                previous = current;
                current = current.next;
                count ++;
            }
        }
    }

    // Contar la cantidad cartas en una lista 
    this.amount = function(){

       if(!this.first)return 0;
       else{
           if(!this.first.next)return 1;
           else{
                let current = this.first;
                let count = 1;
               while(current.next){
                   current = current.next;
                   count++;
               }
               return count;
           }
        }
    }
}

function GenerateDeckToArray(){

    this.deckToArray = function(deck){
        
        let array = [];
        current = deck.first;
    
        if(deck.amount() == 1){
            array.push(current)
        }else{
            while(current.next){
                array.push(current.value);
                current = current.next;
            }
            array.push(current.value);
        }
        return Array;
    }

}   




