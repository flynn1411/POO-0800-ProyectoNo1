package SessionManager;

import java.util.ArrayList;

/**
 * Clase que maneja las puntuaciones más altas de todas las sesiones jugadas.
 * @version 0.1.0
 * */
public class HighScoreManager {
	/**Nombre del archivo donde se encuentran la lista.*/
	private String fileName = "highScores.json";
	
	/**Lista de las puntuaciones mas altas.*/
	private ArrayList<HighScore> highScoreList;
	
	/**Lector de archivos*/
	private FileManager fm;
	
	/**Traductor de JSON*/
	private JSONParser jsonParser;
	
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
		if(!this.highScoreList.isEmpty()) {
			fm.write(this.fileName, this.jsonParser.highScoreListToJSON(this.highScoreList));
		}
	}
}
