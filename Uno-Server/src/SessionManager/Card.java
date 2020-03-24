package SessionManager;

/**
 * Objeto carta.
 * @version 0.1.0
 * */
public class Card {
	
	private String symbol;
	private String color;
	
	public Card() {
		
	}
	
	public Card(String symbol, String color) {
		this.symbol = symbol;
		this.color = color;
	}
	
	/**
	 * @return the symbol
	 */
	public String getSymbol() {
		return symbol;
	}

	/**
	 * @param symbol the symbol to set
	 */
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	/**
	 * @return the color
	 */
	public String getColor() {
		return color;
	}

	/**
	 * @param color the color to set
	 */
	public void setColor(String color) {
		this.color = color;
	}
	
}
