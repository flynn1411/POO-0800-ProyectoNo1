package Project;

import java.util.ArrayList;

public class Player {
	private ArrayList<Card> deck;
	private int score;
	private String ID;
	private Status status = Status.DISCONNECTED;
	
	/**
	 * @return the status
	 */
	public Status getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(Status status) {
		this.status = status;
	}
	
	public Player() {}

	public Player(ArrayList<Card> deck) {
		this.deck = deck;
	}
	
	/**
	 * @return the deck
	 */
	public ArrayList<Card> getDeck() {
		return deck;
	}
	/**
	 * @param deck the deck to set
	 */
	public void setDeck(ArrayList<Card> deck) {
		this.deck = deck;
	}
	/**
	 * @return the score
	 */
	public int getScore() {
		return score;
	}
	/**
	 * @param score the score to set
	 */
	public void setScore(int score) {
		this.score = score;
	}
	/**
	 * @return the iD
	 */
	public String getID() {
		return this.ID;
	}
	/**
	 * @param iD the iD to set
	 */
	public void setID(String iD) {
		this.ID = iD;
	}
}
