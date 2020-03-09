package SessionManager;

import java.util.ArrayList;
import java.util.Map;

/** Clase administradora de las sesiones, esta se encarga de leer el estado de una sesi�n existente o crear una nueva sesi�n.*/
public class SessionManager {
	
	/**Lista de sesiones creadas*/
	private Map<String, Session> Sessions;
	
	/**Lector de archivos*/
	private FileManager fm = new FileManager();
	
	private CSVParser csvParser = new CSVParser(); 
	
	/**Car�cteres para crear el c�digo aleatorio*/
	private String[] characters = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R"
			,"S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"};
	
	/** 
	 * Generador de codigos para sesiones. Este c�digo puede estar formado por n�meros y/o letras en may�scula.
	 * @return String code
	 * @version 0.1.0
	 * */
	public String generateCode() {
		RandomGenerator random = new RandomGenerator();
		StringBuilder code = new StringBuilder("");
			
		for(int j = 0; j<4; j++){
			int ran = random.generateRandom(0, this.characters.length-1);
			code.append(this.characters[ran]);
		}
		return String.format("%s", code);
	}
	
	
	/**
	 * M�todo que crea sesiones nuevas, retorna true o false en caso de que fue creada la sesi�n exitosamente.
	 * @version 0.1.0
	 * */
	public boolean createNewSession(ArrayList<String[]> grabDeck, ArrayList<String[]> putOnDeck, ArrayList<String[]> player1sDeck, ArrayList<String[]> players2Deck) {
		String sessionCode = this.generateCode();
		
		if(
				grabDeck.isEmpty() &&
				putOnDeck.isEmpty() &&
				player1sDeck.isEmpty() &&
				players2Deck.isEmpty()
				) {
			grabDeck = csvParser.csv2arrayList(fm.read("boxOfCards.csv"));
		}
		
		Session newSession = new Session(sessionCode, grabDeck, putOnDeck, player1sDeck, players2Deck);
		
		this.Sessions.put(newSession.getSessionID(), newSession);
		//if(this.createSessionJSON())
		return true;
	}
}
