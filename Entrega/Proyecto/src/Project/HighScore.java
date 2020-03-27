package Project;

/**
 * Elemento de puntuaci�n alta con sus caracteristicas de fecha, nombre de usuario y puntuaci�n.
 * @version 0.1.0
 * */
public class HighScore {
	/**Nombre de Usuario*/
	private String user;
	
	/**Puntuaci�n Obtenida*/
	private int score;
	
	/**Fecha en la que se obtuvo dicha puntuaci�n*/
	private String date;
	
	public HighScore() {
		
	}
	
	public HighScore(String user, int score, String date) {
		this.user = user;
		this.score = score;
		this.date = date;
	}

	/**
	 * @return the user
	 */
	public String getUser() {
		return this.user;
	}

	/**
	 * @return the score
	 */
	public int getScore() {
		return this.score;
	}

	/**
	 * @return the date
	 */
	public String getDate() {
		return this.date;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(String user) {
		this.user = user;
	}

	/**
	 * @param score the score to set
	 */
	public void setScore(int score) {
		this.score = score;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(String date) {
		this.date = date;
	}
	
	
}
