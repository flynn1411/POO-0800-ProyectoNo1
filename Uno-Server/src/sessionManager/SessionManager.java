package SessionManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/** Clase administradora de las sesiones, esta se encarga de leer el estado de una sesi�n existente o crear una nueva sesi�n.*/
public class SessionManager {
	
	/**Lista de sesiones activas*/
	private Map<String, Session> activeSessions = new HashMap<String, Session>();
	
	public SessionManager() {
		 //activeSessions = new HashMap<String, Session>();
	}
	
	/**Lector de archivos*/
	private FileManager fm = new FileManager();
	
	//private CSVParser csvParser = new CSVParser(); 
	
	/**Car�cteres para crear el c�digo aleatorio*/
	private String[] characters = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R"
			,"S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"};
	
	/** 
	 * Generador de codigos para sesiones. Este c�digo puede estar formado por n�meros y/o letras en may�scula.
	 * Antes de enviar el codigo, se revisa que no exista dentro de las sesiones ya existentes.
	 * @return String code
	 * @version 0.1.0
	 * */
	private String generateCode() {
		RandomGenerator random = new RandomGenerator();
		StringBuilder code = new StringBuilder("");
			
		for(int j = 0; j<4; j++){
			int ran = random.generateRandom(0, this.characters.length-1);
			code.append(this.characters[ran]);
		}
		
		/*if( this.activeSessions.isEmpty() ) {
			return code.toString();
		}else if( this.activeSessions.containsKey(code.toString()) || this.activeSessions == null ) {
			return this.generateCode();
		}else {*/
			return code.toString();
		//}
		
	}
	
	/**
	 * Met�do para obtener una sesi�n en espec�fica, de no existir se retorna un vlaor nulo.
	 * @param String sessionID Identificador de la sesi�n
	 * @retun Session
	 * */
	public Session getSession(String sessionID) {
		if(this.activeSessions.containsKey(sessionID)) {
			return this.activeSessions.get(sessionID);
		}
		else {
			return null;
		}
	}
	
	/**
	 * Met�do que actualiza los datos de la sesi�n enviada en su respectivo JSON.
	 * @param Session session Sesi�n a actualizar datos de JSON.
	 * @return boolean
	 * */
	public boolean updateSession(Session session) {
		return this.saveSessionToJSON(session);
	}
	
	/**
	 * M�todo que crea sesiones nuevas, retorna el c�digo de la sesi�n en caso de que la sesi�n fue creada exitosamente.
	 * @param ArrayList<Card> grabDeck baraja para tomar cartas.
	 * @param ArrayList<Card> putOnDeck baraja donde se colocan las cartas.
	 * @param ArrayList<Card> PlayerOne baraja del jugador 1.
	 * @param ArrayList<Card> PlayerTwo baraja del jugador 2.
	 * @return String
	 * @version 0.1.0
	 * */
	public String createNewSession(ArrayList<Card> grabDeck, ArrayList<Card> putOnDeck, ArrayList<Card> playerOne, ArrayList<Card> playerTwo) {
		String sessionCode = this.generateCode();
		
		Session newSession = new Session(sessionCode, grabDeck, putOnDeck, playerOne, playerTwo);
		
		this.activeSessions.put(newSession.getSessionID(), newSession);
		
		boolean sessionWasAdded = this.saveSessionToJSON(this.activeSessions.get(sessionCode)) && this.saveSessions();
		
		if(sessionWasAdded) {
			return sessionCode;
		}
		else {
			return "Not Added";
		}
	}
	
	/**
	 * Met�do que guarda la informaci�n de una sesi�n a un archivo json. Devuelve un booleano si la operaci�n
	 * fue exitosa o no.
	 * @param Session session La sesi�n a guardar o actualizar datos.
	 * @return bollean fileWasWritten indica si la operaci�n fue realizada con exito.
	 * @version 0.1.0
	 * */
	private boolean saveSessionToJSON( Session session ){
		StringBuilder json = new StringBuilder(
				String.format(
						"{ \"%s\": { %s,%s,%s,%s }}",
						session.getSessionID(),
						this.deckToJSON(session.getGrabDeck(), "grabDeck"),
						this.deckToJSON(session.getPutOnDeck(), "putOnDeck"),
						this.deckToJSON(session.getPlayerOne(), "playerOne"),
						this.deckToJSON(session.getPlayerTwo(), "layerTwo")
						)
				);
		boolean fileWasWritten = this.fm.write( String.format("%s.json", session.getSessionID() ), json.toString() );
		
		return fileWasWritten;
		
	}
	
	/**
	 * Met�do que transforma un ListArray de cartas a un arreglo dentro de un json.
	 * @param ArrayList<Card> deck ListArray de cartas
	 * @param String deckName nombre de la baraja
	 * @return String jsonDeck 
	 * */
	private String deckToJSON(ArrayList<Card> deck, String deckName) {
		StringBuilder jsonDeck = new StringBuilder( String.format("\"%s\": [", deckName ) );
		
		for(int i = 0; i < deck.size(); i++) {
			jsonDeck.append(
					String.format(
							"{ \"symbol\": \"%s\", \"color\": \"%s\" }",
							deck.get(i).getSymbol(),
							deck.get(i).getColor()
							)
					);
			
			if( i < (deck.size() - 1) ) {
				jsonDeck.append(",");
			}
		}
		
		jsonDeck.append("]");
		
		return jsonDeck.toString();
	}
	
	/**
	 * Met�do que guarda los sessionIDs en un json. Devuelve un booleano a manera de confirmar el exito de la operaci�n.
	 * @return bolean fileWasWritten 
	 * */
	private boolean saveSessions() {
		StringBuilder json = new StringBuilder("{\"sessions\": [");
		Object[] keys = (this.activeSessions.keySet().toArray());
		
		for(int i = 0; i<keys.length; i++) {
			json.append(
					String.format(
							"\"%s\"",
							keys[i]
							)
					);
			if(i < (keys.length-1) ) {
				json.append(",");
			}
		}
		json.append("]}");
		
		boolean fileWasWritten = fm.write("sessions.json", json.toString());
		
		return fileWasWritten;
	}
	
	/**
	 * Met�do que remueve una sesi�n del diccionario de sessiones y borra su archivo json.
	 * @param Session session La sesi�n a remover
	 * @return true si se removi� la sesi�n, false si no se removi�
	 * */
	public boolean removeSession(Session session) {
		String sessionId = session.getSessionID();
		
		if( this.activeSessions.remove(sessionId) != null && this.fm.deleteFile(String.format("%.json", sessionId)) ) {
			this.saveSessions();
			return true;
		}
		else {
			return false;
		}
	}
}
