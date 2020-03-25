package SessionManager;

import java.util.ArrayList;

public class Logic {

    public ArrayList<ArrayList<Card>> move(int n, ArrayList<Card> playerDeck, ArrayList<Card> putOnDeck) {
    	ArrayList<ArrayList<Card>> arrays = new ArrayList<ArrayList<Card>>();
    	
        //Condicionales para poner una carta
        if(
            (playerDeck.get(n-1).getSymbol() == putOnDeck.get(putOnDeck.size()-1).getSymbol()) ||
            (playerDeck.get(n-1).getColor().equals(putOnDeck.get(putOnDeck.size()-1).getColor())) ||
            (playerDeck.get(n-1).getColor().equals("black"))
        ){
            putOnDeck.add(playerDeck.get(n-1));
            playerDeck.remove(n-1);
            
            arrays.add(playerDeck);
            arrays.add(putOnDeck);
        }
        
        return arrays;
    }
}
