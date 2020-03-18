package SessionManager;

import java.util.ArrayList;

/**
 * Objeto Sesión, contiene información sobre las cartas y su código de identificación.
 * @version 0.1.3
 * */
public class Session {
	/**El código de la sessión.*/
	private String sessionID;
	
	/** La persona con el turno actual*/
	private String currentTurn;
	
	/** La información de la barja para tomar cartas.*/
	private ArrayList<Card> grabDeck;
	
	/** La información de la baraja donde se colocan las cartas*/
	private ArrayList<Card> putOnDeck;
	
	/* Jugador 1**/
	private Player playerOne = new Player();
	
	/* Jugador 2**/
	private Player playerTwo = new Player();
	
	protected Session() {
		
	}
	
	protected Session(String sessionID, ArrayList<Card> grabDeck, ArrayList<Card> putOnDeck, ArrayList<Card> playerOne, ArrayList<Card> playerTwo) {
		this.sessionID = sessionID;
		this.grabDeck = grabDeck;
		this.putOnDeck = putOnDeck;
		this.playerOne.setDeck(playerOne);
		this.playerOne.setStatus(Status.CONNECTED);
		this.playerOne.setID(String.format("%s_playerOne", sessionID));
		this.playerTwo.setDeck(playerTwo);
		this.playerTwo.setID(String.format("%s_playerTwo", sessionID));
	}

	/**
	 * @return the sessionID
	 */
	public String getSessionID() {
		return sessionID;
	}

	/**
	 * @param sessionID the sessionID to set
	 */
	public void setSessionID(String sessionID) {
		this.sessionID = sessionID;
	}

	/**
	 * @return the grabDeck
	 */
	public ArrayList<Card> getGrabDeck() {
		return grabDeck;
	}

	/**
	 * @param grabDeck the grabDeck to set
	 */
	public void setGrabDeck(ArrayList<Card> grabDeck) {
		this.grabDeck = grabDeck;
	}

	/**
	 * @return the putOnDeck
	 */
	public ArrayList<Card> getPutOnDeck() {
		return putOnDeck;
	}

	/**
	 * @param putOnDeck the putOnDeck to set
	 */
	public void setPutOnDeck(ArrayList<Card> putOnDeck) {
		this.putOnDeck = putOnDeck;
	}

	/**
	 * @return the playerOne
	 */
	public Player getPlayerOne() {
		return playerOne;
	}
	
	/**
	 * @return the playerTwo
	 */
	public Player getPlayerTwo() {
		return playerTwo;
	}
	
	/**
	 * @return the turn
	 */
	public String getCurrentTurn() {
		return currentTurn;
	}

	/**
	 * @param turn the turn to set
	 */
	public void setCurrentTurn(String turn) {
		this.currentTurn = turn;
	}
	
	/**
	 * @param playerOne the playerOne to set
	 */
	public void setplayerOne(Player playerOne) {
		this.playerOne = playerOne;
	}
	
	/**
	 * @param playerTwo the playerTwo to set
	 */
	public void setplayerTwo(Player playerTwo) {
		this.playerTwo = playerTwo;
	}

}
