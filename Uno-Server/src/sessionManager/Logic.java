package SessionManager;

import java.util.ArrayList;

public class Logic {
	
	
	public void gameRules(int n, ArrayList<Card> playerDeck, ArrayList<Card> putOnDeck) {
		
		//Leer todas las cartas para saber que movimientos puede hacer 
		
		int outIndex = -1;
		for (int i = 0; i < playerDeck.size(); i++) {
		    
			if(	playerDeck.get(i).getSymbol() == putOnDeck.get(putOnDeck.size()-1).getSymbol() ||
				playerDeck.get(i).getColor() == putOnDeck.get(putOnDeck.size()-1).getColor() ||
				(playerDeck.get(i).getColor() == "black")
				){
				//Si se puede poner carta return true 
				i = outIndex;
			}
						
		}
		// No se puede poner carta entonces tiene que agarar una carta return false 
		
	
		
		//Condicionales para poner una carta 
		if(playerDeck.get(n).getSymbol() == putOnDeck.get(putOnDeck.size()-1).getSymbol()) {
			
			putOnDeck.add(playerDeck.get(n));
			playerDeck.remove(n);
		
		}else if(playerDeck.get(n).getColor() == putOnDeck.get(putOnDeck.size()-1).getColor()){
				
			putOnDeck.add(playerDeck.get(n));
			playerDeck.remove(n);
		
		}else if(playerDeck.get(n).getColor() == "black") {
			
			putOnDeck.add(playerDeck.get(n));
			playerDeck.remove(n);
		
		}else {
			
			//El movimeinto no es valido 
		}
		
	}
	
	
	
	
	
	
	
	
	

}