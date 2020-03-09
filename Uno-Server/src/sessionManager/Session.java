package SessionManager;

import java.util.ArrayList;

/**
 * Objeto Sesión, contiene información sobre las cartas y su código de identificación.
 * @version 0.1.1
 * */
class Session {
	/**El código de la sessión.*/
	private String sessionID;
	
	/** La información de la barja para tomar cartas.*/
	private ArrayList<String[]> grabDeck;
	
	/** La información de la baraja donde se colocan las cartas*/
	private ArrayList<String[]> putOnDeck;
	
	/** La información de la barja del jugador1*/
	private ArrayList<String[]> player1sDeck;
	
	/** La información de la barja del jugador2*/
	private ArrayList<String[]> player2sDeck;
	
	protected Session() {
		
	}
	
	protected Session(String sessionID, ArrayList<String[]> grabDeck, ArrayList<String[]> putOnDeck, ArrayList<String[]> player1sDeck, ArrayList<String[]> player2sDeck) {
		this.sessionID = sessionID;
		this.grabDeck = grabDeck;
		this.putOnDeck = putOnDeck;
		this.player1sDeck = player1sDeck;
		this.player2sDeck = player2sDeck;
	}
	
	/**
	 * @return the sessionID
	 */
	protected String getSessionID() {
		return sessionID;
	}
	/**
	 * @param sessionID the sessionID to set
	 */
	protected void setSessionID(String sessionID) {
		this.sessionID = sessionID;
	}
	/**
	 * @return the grabDeck
	 */
	protected ArrayList<String[]> getGrabDeck() {
		return grabDeck;
	}
	/**
	 * @param grabDeck the grabDeck to set
	 */
	protected void setGrabDeck(ArrayList<String[]> grabDeck) {
		this.grabDeck = grabDeck;
	}
	/**
	 * @return the putOnDeck
	 */
	protected ArrayList<String[]> getPutOnDeck() {
		return putOnDeck;
	}
	/**
	 * @param putOnDeck the putOnDeck to set
	 */
	protected void setPutOnDeck(ArrayList<String[]> putOnDeck) {
		this.putOnDeck = putOnDeck;
	}
	/**
	 * @return the player1sDeck
	 */
	protected ArrayList<String[]> getPlayer1sDeck() {
		return player1sDeck;
	}
	/**
	 * @param player1sDeck the player1sDeck to set
	 */
	protected void setPlayer1sDeck(ArrayList<String[]> player1sDeck) {
		this.player1sDeck = player1sDeck;
	}
	/**
	 * @return the player2sDeck
	 */
	protected ArrayList<String[]> getPlayer2sDeck() {
		return player2sDeck;
	}
	/**
	 * @param player2sDeck the player2sDeck to set
	 */
	protected void setPlayer2sDeck(ArrayList<String[]> player2sDeck) {
		this.player2sDeck = player2sDeck;
	}
}
