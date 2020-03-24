package SessionManager;

import java.util.ArrayList;

/**
 * Clase que maneja las puntuaciones m�s altas de todas las sesiones jugadas.
 * @version 0.1.0
 * */
public class HighScoreManager {
	/**Nombre del archivo donde se encuentran la lista.*/
	private String fileName = "highScores.json";
	
	/**Lista de las puntuaciones mas altas.*/
	private ArrayList<HighScore> highScoreList = new ArrayList<HighScore>();
	
	/**Lector de archivos*/
	private FileManager fm = new FileManager();
	
	/**Traductor de JSON*/
	private JSONParser jsonParser = new JSONParser();
	
	public HighScoreManager() {
		this.loadHighScores();
	}
	
	/**
	 * Metodo que llama al JSONParser para leer un archivo json y cargar la lista de puntuaciones altas.
	 * */
	public void loadHighScores() {
		if(this.fm.fileExists(this.fileName)) {
			String json = this.fm.read(this.fileName);
			this.highScoreList = this.jsonParser.jsonToHighScoreList(json);
		}
	}
	
	/**
	 * Metodo que guarda la lista de puntuaciones en un archivo JSON.
	 * */
	public void saveHighScores() {
		if(!(this.highScoreList.isEmpty())) {
			String fileContent = this.jsonParser.highScoreListToJSON(this.highScoreList);
			this.fm.write(this.fileName, fileContent);
		}
	}
	
	public void addHighScore(HighScore highScore) {
		this.highScoreList.add(highScore);
	}
	
	/**
	 * Metodo que revisa si la puntutaci�n obtenida por un jugador est� en el rango de las puntuaciones m�s altas
	 * @param HighScore possibleHighScore La puntuacion obtenida por el usuario.
	 * @return @true si cumple para estar entre las puntuaciones mas altas @false si no cumple.
	 * */
	public boolean isThisAHighScore(HighScore possibleHighScore) {
		this.sortScores(this.highScoreList);
		
		if( (this.highScoreList.get( this.highScoreList.size()-1 ).getScore()) > possibleHighScore.getScore() ) {
			this.highScoreList.add(possibleHighScore);
			this.sortScores(this.highScoreList);
			while( (this.highScoreList.size()) > 10) {
				this.highScoreList.remove(this.highScoreList.size()-1);
			}
		}
		
		return true;
	}
	
	/**
	 * Metodo que utiliza QuickSort para organizar las puntuaciones de mayor a menor.
	 * @param ArrayList<HighScore> highScores
	 * */
	private void sortScores(ArrayList<HighScore> highScores) {
			
	}
}
