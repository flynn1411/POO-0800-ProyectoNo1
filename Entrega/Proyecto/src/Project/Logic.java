package Project;

import java.util.ArrayList;

public class Logic {

    public void move(int n, Session foundSession,int c) {
    	
    	SessionManager sm = new SessionManager();
    	ArrayList<Card> playerOne = foundSession.getPlayerOne().getDeck();
    	ArrayList<Card> playerTwo = foundSession.getPlayerTwo().getDeck();
    	ArrayList<Card> putOnDeck = foundSession.getPutOnDeck();
    	ArrayList<Card> grabDeck = foundSession.getGrabDeck();
    	
        //Condicionales para poner una carta jugador 1
    	if(c == 1) {
    		//Se cambian
    		putOnDeck.add(playerOne.get(n-1));
    		playerOne.remove(n-1);
    		
    		//Se Actualizan
    		foundSession.getPlayerOne().setDeck(playerOne);
    		foundSession.setPutOnDeck(putOnDeck);
    		
    		//se cambian los turnos
    		foundSession.setCurrentTurn(foundSession.getPlayerTwo().getID());
    		//Agregar puntaje
    		int currentScore = foundSession.getPlayerOne().getScore();
    		foundSession.getPlayerOne().setScore(currentScore + 1);
    		
    		if(putOnDeck.get(putOnDeck.size()-1).getSymbol().equals("+4")){
    			System.out.print(putOnDeck.get(putOnDeck.size()-1).getSymbol());
    			//se cambian
    			for(int i=1;i<5;i++) {
    				playerTwo.add(grabDeck.get(i));
    				grabDeck.remove(i);
    			}
    			//se actualizan
    			foundSession.getPlayerTwo().setDeck(playerTwo);
    			foundSession.setGrabDeck(grabDeck);
        		
        		//se cambian los turnos
        		foundSession.setCurrentTurn(foundSession.getPlayerOne().getID());
        		
        		//Agregar puntaje
        		currentScore = foundSession.getPlayerOne().getScore();
        		foundSession.getPlayerOne().setScore(currentScore + 4);
    			    			
    		}else if(putOnDeck.get(putOnDeck.size()-1).getSymbol().equals("+2")){
        		System.out.print(putOnDeck.get(putOnDeck.size()-1).getSymbol());
    			//se cambian
    			for(int i=1;i<3;i++) {
    				playerTwo.add(grabDeck.get(i));
    				grabDeck.remove(i);
    			}
    			//se actualizan
    			foundSession.getPlayerTwo().setDeck(playerTwo);
    			foundSession.setGrabDeck(grabDeck);
        		
        		//se cambian los turnos
        		foundSession.setCurrentTurn(foundSession.getPlayerOne().getID());
    			
        		//Agregar puntaje
        		currentScore = foundSession.getPlayerOne().getScore();
        		foundSession.getPlayerOne().setScore(currentScore + 2);
        		
    		}else if(putOnDeck.get(putOnDeck.size()-1).getSymbol().equals("block")){
    			//se cambian los turnos
        		foundSession.setCurrentTurn(foundSession.getPlayerOne().getID());
        		//Agregar puntaje
        		currentScore = foundSession.getPlayerOne().getScore();
        		foundSession.getPlayerOne().setScore(currentScore + 6);
    		}
    		//se guarda
    		sm.updateSession(foundSession);
    			
    	}else if(c == 2 ){
    		//Se cambian
    		putOnDeck.add(playerTwo.get(n-1));
    		playerTwo.remove(n-1);
    		
    		//Se Actualizan
    		foundSession.getPlayerTwo().setDeck(playerTwo);
    		foundSession.setPutOnDeck(putOnDeck);
    		
    		//se cambian los turnos
    		foundSession.setCurrentTurn(foundSession.getPlayerOne().getID());
    		//Agregar puntaje
    		int currentScore = foundSession.getPlayerTwo().getScore();
    		foundSession.getPlayerTwo().setScore(currentScore + 1);
    		
    		if(putOnDeck.get(putOnDeck.size()-1).getSymbol().equals("+4")){
        		System.out.print(putOnDeck.get(putOnDeck.size()-1).getSymbol());
    			//se cambian
    			for(int i=1;i<5;i++) {
    				playerOne.add(grabDeck.get(i));
    				grabDeck.remove(i);
    			}
    			//se actualizan
    			foundSession.getPlayerOne().setDeck(playerOne);
    			foundSession.setGrabDeck(grabDeck);
        		
        		//se cambian los turnos
        		foundSession.setCurrentTurn(foundSession.getPlayerTwo().getID());
        		
        		//Agregar puntaje
        		currentScore = foundSession.getPlayerTwo().getScore();
        		foundSession.getPlayerTwo().setScore(currentScore + 4);
    			    			
    		}else if(putOnDeck.get(putOnDeck.size()-1).getSymbol().equals("+2")){
        		System.out.print(putOnDeck.get(putOnDeck.size()-1).getSymbol());
    			//se cambian
    			for(int i=1;i<3;i++) {
    				playerOne.add(grabDeck.get(i));
    				grabDeck.remove(i);
    			}
    			//se actualizan
    			foundSession.getPlayerOne().setDeck(playerOne);
    			foundSession.setGrabDeck(grabDeck);
        		
        		//se cambian los turnos
        		foundSession.setCurrentTurn(foundSession.getPlayerTwo().getID());
        		
        		//Agregar puntaje
        		currentScore = foundSession.getPlayerTwo().getScore();
        		foundSession.getPlayerTwo().setScore(currentScore + 2);
    			
    		}else if(putOnDeck.get(putOnDeck.size()-1).getSymbol().equals("block")){
    			//se cambian los turnos
    			foundSession.setCurrentTurn(foundSession.getPlayerTwo().getID());
    			//Agregar puntaje
        		currentScore = foundSession.getPlayerTwo().getScore();
        		foundSession.getPlayerTwo().setScore(currentScore + 6);
    		}

    		//se guarda
    		sm.updateSession(foundSession);
    	
    	}else if(c == 3){
    		//Se cambian
    		playerOne.add(grabDeck.get(n-1));
    		grabDeck.remove(n-1);   		
    		
    		//Se Actualizan
    		foundSession.getPlayerOne().setDeck(playerOne);
    		foundSession.setGrabDeck(grabDeck);
    		
    		//se cambian los turnos
    		foundSession.setCurrentTurn(foundSession.getPlayerTwo().getID());
    		
    		//se guarda
    		sm.updateSession(foundSession);
    	
    	
    	}else if(c == 4){
    		//Se cambian
    		playerTwo.add(grabDeck.get(n-1));
    		grabDeck.remove(n-1); 
    		
    		//Se Actualizan
    		foundSession.getPlayerTwo().setDeck(playerTwo);
    		foundSession.setGrabDeck(grabDeck);
    		
    		//se cambian los turnos
    		foundSession.setCurrentTurn(foundSession.getPlayerOne().getID());
    		
    		//se guarda
    		sm.updateSession(foundSession);
    	}
    }
}