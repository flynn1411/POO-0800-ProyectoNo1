package SessionManager;

import java.util.ArrayList;

public class DeckOfCards {
	
	private ArrayList<Card> General = new ArrayList<Card>();
	public ArrayList<Card> grabDeck = new ArrayList<Card>();
	public ArrayList<Card> playerOne = new ArrayList<Card>();
	public ArrayList<Card> playerTwo = new ArrayList<Card>();
	public ArrayList<Card> putOnDeck = new ArrayList<Card>();
	
	public DeckOfCards() {
		//pack();
	}
	
	String[] colors = {"red","blue","yellow","green"};
	RandomGenerator x = new RandomGenerator();
	
	
	public void pack(){
		
		// Cartas especiales +4  cambios de color y 0 de colores 
		for(int i=0;i<4;i++){
            General.add(new Card("+4","balck"));
            General.add(new Card("change color","black"));
            General.add(new Card("0",colors[i]));
        }
		// Cartas 1-9 con diferente color 
        for(int j=0;j<4;j++){
            for(int i=1;i<=11;i++){
                if(i<=9){
                	General.add(new Card(String.format("%s",i),colors[j]));
                	General.add(new Card(String.format("%s",i),colors[j]));
                }else {
                	General.add(new Card("+2",colors[j]));
                	General.add(new Card("reverse",colors[j]));
                	General.add(new Card("block",colors[j]));
                }
            }
        }
		
	}
	
	public void shuffleDeck() {
		
		// Table Decks
        for(int i=1;i<=108;i++){
            int n = x.generateRandom(0,General.size()-1);
    
            if(i==1){
            	int m = n;
            	Card current = General.get(n);
            	while(current.getColor() == "black") {
            		m = x.generateRandom(0,General.size()-1);
            		current = General.get(m);
            	}
            	putOnDeck.add(current);
            	General.remove(m);
            }
            else grabDeck.add(General.get(n));
            General.remove(n);
        }
        
        // Players Decks
        for(int i=1;i<=14;i++){
            int n = x.generateRandom(0,grabDeck.size()-1);
            
            if(i<=7){
            	playerOne.add(grabDeck.get(n));
            	grabDeck.remove(n);
            	
            }else{
            	playerTwo.add(grabDeck.get(n));
            	grabDeck.remove(n);
            }
        }
	}
	
	
	
	
	
		
}
