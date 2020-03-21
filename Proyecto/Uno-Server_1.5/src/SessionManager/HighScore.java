package SessionManager;

/**
 * Elemento de puntuación alta con sus caracteristicas de fecha, nombre de usuario y puntuación.
 * @version 0.1.0
 * */
public class HighScore {
	private String user;
	private int score;
	private String date;
	
	public HighScore(String user, int score, String date) {
		this.user = user;
		this.score = score;
		this.date = date;
	}

	/**
	 * @return the user
	 */
	public String getUser() {
		return user;
	}

	/**
	 * @return the score
	 */
	public int getScore() {
		return score;
	}

	/**
	 * @return the date
	 */
	public String getDate() {
		return date;
	}
	
	
}
