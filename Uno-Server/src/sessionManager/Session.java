package SessionManager;

class Session {
	/**El código de la sessión.*/
	private String sessionID;
	
	/** La información de la barja para tomar cartas.*/
	private String grabDeck;
	
	/** La información de la baraja donde se colocan las cartas*/
	private String putOnDeck;
	
	/** La información de la barja del jugador1*/
	private String player1sDeck;
	
	/** La información de la barja del jugador2*/
	private String player2sDeck;
	
	protected Session() {
		
	}
	
	protected Session(String sessionID, String grabDeck, String putOnDeck, String player1sDeck, String player2sDeck) {
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
	protected String getGrabDeck() {
		return grabDeck;
	}
	/**
	 * @param grabDeck the grabDeck to set
	 */
	protected void setGrabDeck(String grabDeck) {
		this.grabDeck = grabDeck;
	}
	/**
	 * @return the putOnDeck
	 */
	protected String getPutOnDeck() {
		return putOnDeck;
	}
	/**
	 * @param putOnDeck the putOnDeck to set
	 */
	protected void setPutOnDeck(String putOnDeck) {
		this.putOnDeck = putOnDeck;
	}
	/**
	 * @return the player1sDeck
	 */
	protected String getPlayer1sDeck() {
		return player1sDeck;
	}
	/**
	 * @param player1sDeck the player1sDeck to set
	 */
	protected void setPlayer1sDeck(String player1sDeck) {
		this.player1sDeck = player1sDeck;
	}
	/**
	 * @return the player2sDeck
	 */
	protected String getPlayer2sDeck() {
		return player2sDeck;
	}
	/**
	 * @param player2sDeck the player2sDeck to set
	 */
	protected void setPlayer2sDeck(String player2sDeck) {
		this.player2sDeck = player2sDeck;
	}
}
