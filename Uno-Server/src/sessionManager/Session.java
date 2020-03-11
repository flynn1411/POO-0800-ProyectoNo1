package SessionManager;

import java.util.ArrayList;

/**
 * Objeto Sesi�n, contiene informaci�n sobre las cartas y su c�digo de identificaci�n.
 * @version 0.1.1
 * */
class Session {
	/**El c�digo de la sessi�n.*/
	private String sessionID;
	
	/** La informaci�n de la barja para tomar cartas.*/
	private ArrayList<Card> grabDeck;
	
	/** La informaci�n de la baraja donde se colocan las cartas*/
	private ArrayList<Card> putOnDeck;
	
	/** La informaci�n de la barja del jugador1*/
	private ArrayList<Card> playerOne;
	
	/** La informaci�n de la barja del jugador2*/
	private ArrayList<Card> playerTwo;
	
	protected Session() {
		
	}
	
	protected Session(String sessionID, ArrayList<Card> grabDeck, ArrayList<Card> putOnDeck, ArrayList<Card> playerOne, ArrayList<Card> playerTwo) {
		this.sessionID = sessionID;
		this.grabDeck = grabDeck;
		this.putOnDeck = putOnDeck;
		this.playerOne = playerOne;
		this.playerTwo = playerTwo;
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
	public ArrayList<Card> getPlayerOne() {
		return playerOne;
	}

	/**
	 * @param playerOne the playerOne to set
	 */
	public void setPlayerOne(ArrayList<Card> playerOne) {
		this.playerOne = playerOne;
	}

	/**
	 * @return the playerTwo
	 */
	public ArrayList<Card> getPlayerTwo() {
		return playerTwo;
	}

	/**
	 * @param playerTwo the playerTwo to set
	 */
	public void setPlayerTwo(ArrayList<Card> playerTwo) {
		this.playerTwo = playerTwo;
	}
	
	
	
}
