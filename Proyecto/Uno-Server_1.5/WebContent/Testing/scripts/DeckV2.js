//Obejeto carta 
function Card(symbol,color){
    this.symbol = symbol;
    this.color = color;
}

//  Objeto para las cartas 
function Node(value){
    this.value =value;
    this.next = null;
    this.id = null;
}

//  Lista enlazada para administrar las barajas 
function LinkedList(){
    
    this.first = null;
    
    //  agrgar cartas a la baraja 
    this.add = function(symbol,color){
        
        //Se crea el nodo
        let card = new Card(symbol,color); 
        let node = new Node(card)
        //se agrega si es el primer nodo en entrar 
        if(!this.first)this.first = node;
        //Se recorre hasta encontrar el ultimo para agregarlo 
        else{
            let current = this.first;
            while(current.next)current = current.next;
            current.next = node;
        }

    //Fin del add    
    }   

    //  Extraer Nodo  
    this.extract = function(n){

        let count = 1;
        //El nodo a extraer es el primero
        if(n == 1){
            //se guarda
            let card = new Card(this.first.value.symbol,this.first.value.color);
            let send = new Node(card);
            //se elimina
            let queue = this.first.next;
            this.first = queue;
            //se envia
            return send;
        // Cuando el n es mayor que el maximo de la lista            
        }else if( n > this.amount){
            return null;
        // Cuando es cuallquiera menos el primer nodo
        }else{
            let current = this.first;
            let previous = null;
            while(current){
                //recorrer todos los nodos hasta encontrarlo 
                if(count == n){
                    //se guarda el nodo a estraer
                    let card = new Card(current.value.symbol,current.value.color)
                    let send = new Node(card);
                    //se elimina el nodo a estraer
                    previous.next = current.next;
                    //se envia el nodo a estraer
                    return send;
                }
                previous = current;
                current = current.next;
                count ++;
            }
        }
    //Fin de extract    
    }

    //  Buscar un nodo
    this.search = function(n){

        count = 1;
        //Cuando el nodo a buscar es el pimero
        if(n == count){
        	return this.first;
        }
        //Cuando es cualquiera menos el primer nodo
        else{
            current= this.first
            while(current.next){
                // recorrer hasta encontrarlo y enviarlo
                if(n == count) return current;
                else{
                    current = current.next;
                    count++;
                }
            }
            //cuando es el ultimo de la lista 
            if(n == count)return current;
            //Cuando n es mayor al numero maximo de la lista 
            else return null;
        }

    //Fin de search
    }

    //Obtener el ultimo 
    this.last = function(){
        
        last = this.first
        //se recorre hasta encontrar el ultimo
        while(last.next)last = last.next;
        //Se envia 
        return last;

    //fin de last
    }
        
    //  Contar la cantidad cartas en una lista 
    this.amount = function(){
    
       // Si no hay nodos en la lista
       if(!this.first)return 0;
       else{
           //Si solo hay 1 nodo
           if(!this.first.next)return 1;
           //Cuando hay varios nodos
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

    //Fin de amount  
    }
    
    //Vaciar las listas
    this.clear = function(){
    	this.first= null; 	
    }

//Fin de la LinkedList    
}






