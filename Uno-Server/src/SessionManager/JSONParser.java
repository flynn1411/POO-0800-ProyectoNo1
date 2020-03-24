package SessionManager;

import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Clase que traduce cadena de texto JSON a objetos Java que pueden ser utilizados por el servidor.
 * Esto se logra al conocer como estará compuesta la cadena y que patrones tiene par apoder aplicarle
 * expresiones regulares.
 * @version 0.1.0
 * */
public class JSONParser {
	
	/**
	 * Metodo que transforma un texto JSON específico y lo transforma a un ArrayList de cartas.
	 * @param json String JSON a traducir
	 * @param deckTitle String de la llave que contiene el arreglo dentro del json
	 * @return ArrayList<Card> ArrayList de las cartas.
	 * */
	private ArrayList<Card> parseToArray(String json, String deckTitle){
		
		ArrayList<Card> deck = new ArrayList<Card>();
		
		// Creación de las expresiones regulares
		Pattern deckPattern = Pattern.compile( String.format("\"%s\":\\[[^((\\[)|(\\]))]*\\]", deckTitle) );
		Pattern arrayPattern = Pattern.compile("\\{[^((\\[)|(\\]))]*\\}");
		
		//Comparaciï¿½n de la expresiï¿½n regular contra la cadena ingresada
		Matcher deckMatcher = deckPattern.matcher(json);
		
		//Si se encuentra
		if(deckMatcher.find()){
			String found = deckMatcher.group(0);
			
			Matcher cardMatcher = arrayPattern.matcher(found);
			
			if(cardMatcher.find()){
				/**
				 * Se remueven las llaves y quedan solo las cadenas de llaves y valores, cada fila en
				 * este nuevo arreglo representa una carta.
				 * */
				String[] cards = cardMatcher.group().split("(\\},\\{)|(\\{)|(\\})");
				
				/**
				 * Se recorre cada "carta"
				 * Su formato en este punto es: ""symbol"":""1"",""color"":""green""
				 * */
				for(int i = 1; i < cards.length; i++){
					/**
					 * Se separan cada atributo de la carta utilizando ","
					 * Su formato en este punto es:
					 * 	cardAttr[0] = ""symbol"":""1""
					 *	cardAttr[1] = ""color"":""green""
					 * */
					String[] cardAttr = cards[i].split(",");
					String[] card = new String[2];
					
					for(int j = 0; j < cardAttr.length; j++){
						/**
						 * Se obtiene el valor de cada atributo al separarlo por ":"
						 * El formato en este punto es:
						 * 	attribute[0]=""key""
						 * 	attribut[1]=""value""
						 * */
						String[] attribute = cardAttr[j].split(":");
						/**
						 * Se remueven las commillas del valor y se ingresan a un
						 * arreglo donde el primer elemento es el simbolo de la carta
						 * y el segundo elemento es el color de la carta
						 * */
						card[j] = attribute[1].replaceAll("\"", "");
						
					}
					deck.add(new Card(card[0], card[1]));
				}
			}
		}
			
		return deck;
	}
	
	/**
	 * Metódo que transforma un ListArray de cartas a un arreglo dentro de un json.
	 * @param ArrayList<Card> deck ListArray de cartas
	 * @param String deckName nombre de la baraja
	 * @return String jsonDeck 
	 * */
	private String deckToJSON(ArrayList<Card> deck, String deckName) {
		StringBuilder jsonDeck = new StringBuilder( String.format("\"%s\":[", deckName ) );
		
		for(int i = 0; i < deck.size(); i++) {
			jsonDeck.append(
					String.format(
							"{\"symbol\":\"%s\",\"color\":\"%s\"}",
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
	 * Mï¿½todo que transforma el estado de conexiï¿½n de cada jugador en un json.
	 * @param boolean playerOneStatus Estado del jugador1
	 * @param boolean playerTwoStatus Estado del jugador2
	 * @return String json
	 * */
	private String savePlayer(Player player) {
		return String.format(
				"\"%s\":{%s,\"score\":%s,\"status\":\"%s\"}",
				player.getID(),
				this.deckToJSON(player.getDeck(), "deck"),
				player.getScore(),
				player.getStatus()
				);
	}
	
	/**
	 * Metodo que obtiene el turno actual y lo guarda en un json.
	 * @param String currentTurn turno actual
	 * @return String json del turno actual
	 * */
	private String saveCurrentTurn(String currentTurn) {
		return String.format(
				"\"currentTurn\":\"%s\"",
				currentTurn
				);
	}
	
	/**
	 * Metodo que transforma una sesiï¿½n en un json.
	 * @param Session session La sesiï¿½n a guardar.
	 * @return String json La cadena json para guardar
	 * */
	public String sessionToJSON(Session session) {
		StringBuilder json = new StringBuilder(
				String.format(
						"{\"%s\":{%s,%s,%s,%s,%s}}",
						session.getSessionID(),
						this.saveCurrentTurn(session.getCurrentTurn()),
						this.savePlayer(session.getPlayerOne()),
						this.savePlayer(session.getPlayerTwo()),
						this.deckToJSON(session.getGrabDeck(), "grabDeck"),
						this.deckToJSON(session.getPutOnDeck(), "putOnDeck")
						//this.deckToJSON(session.getPlayerOne().getDeck(), "playerOne"),
						//this.deckToJSON(session.getPlayerTwo().getDeck(), "playerTwo")
						)
				);
		return json.toString();
	}
	
	/**
	 * Metodo que obtiene un JSON y lo transforma a un Array para su uso de datos
	 * @param String json JSON con una lista
	 * @return String[] sessions
	 * */
	public String[] jsonToSessionsArray(String json){
		String[] sessions = null;
		
		Pattern sessionPattern = Pattern.compile("\\[[^((\\[)|(\\]))]*\\]");
		Matcher match = sessionPattern.matcher(json);
		
		if(match.find()) {
			String found = match.group(0).replaceAll("(\\[)|(\\])|(\")", "");
			sessions = found.split(",");
		}
		
		return sessions;
	}
	
	/**
	 * Metodo que obitiene un json y el nombre del jugador y devuelve un objeto de tipo Player
	 * @param String playerID el identificador del jugador
	 * @param String json el contenido del json
	 * @return Player player jugador con sus atributos obtenidos del json
	 * */
	private Player jsonToPlayer(String playerID, String json) {
		Player player = new Player();
		player.setID(playerID);
		
		Pattern deckPattern = Pattern.compile( String.format("\"%s\":\\{\"deck\":\\[[^((\\[)|(\\]))]*\\],\"score\":\\d+,\"status\":\"\\w{9,12}\"", playerID) );
		Pattern infoPattern = Pattern.compile("\"score\":\\d+,\"status\":\"\\w{9,12}\"");
		Matcher deckMatch = deckPattern.matcher(json);
		
		if(deckMatch.find()) {
			String found = deckMatch.group(0);
			player.setDeck(this.parseToArray(found, "deck"));
			
			Matcher infoMatch = infoPattern.matcher(found);
			
			if(infoMatch.find()) {
				String[] foundInfo = infoMatch.group(0).replaceAll("\"", "").split(",");
				Pattern scorePattern = Pattern.compile("\\d+");
				Pattern statusPattern = Pattern.compile(":\\w{9,12}");
				Matcher scoreMatch = scorePattern.matcher(foundInfo[0]);
				Matcher statusMatch = statusPattern.matcher(foundInfo[1]);
				
				if(scoreMatch.find() && statusMatch.find()) {
					player.setScore(Integer.parseInt(scoreMatch.group()));
					String status = statusMatch.group().replaceAll(":", "");
					boolean strCompared = status.equals("CONNECTED");
					
					if(strCompared) {
						player.setStatus(Status.CONNECTED);
					}else {
						player.setStatus(Status.DISCONNECTED);
					}
				}
			}
			
		}
		
		return player;
	}
	
	/**
	 * Metodo que obtiene el turno actual de la sesiï¿½n.
	 * @param String json El JSON enviado.
	 * @return String currentTurn el turno actual.
	 * */
	private String jsonToCurrentTurn(String json) {
		String currentTurn = "";
		Pattern currentTurnPattern = Pattern.compile("\"currentTurn\":\"[^(\")]*\"");
		Matcher currentTurnMatch = currentTurnPattern.matcher(json);
		
		if(currentTurnMatch.find()) {
			String found = currentTurnMatch.group(0).replaceAll("\"", "");
			String[] splitted = found.split(":");
			currentTurn = splitted[1];
		}
		
		return currentTurn;
	}
	
	/**
	 * Metodo que obtiene el identificador de la sesiï¿½n.
	 * @param String json El JSON enviado.
	 * @return String sessionID el identifcador de la sesiï¿½n.
	 * */
	private String jsonToSessionID(String json) {
		String sessionID = "";
		Pattern sessionIDPattern = Pattern.compile("\"[^\"]{4}\":\\{");
		Matcher sessionIDMatch = sessionIDPattern.matcher(json);
		
		if(sessionIDMatch.find()) {
			sessionID  = sessionIDMatch.group(0).replaceAll("((\")|(:)|(\\{))", "");
		}
		
		return sessionID;
	}
	
	/**
	 * Metodo que crea un clase sesión dado un json con su información.
	 * @param String json El json con la información de la sesión.
	 * @return Session session La sesión creada a base de la información del json.
	 * */
	public Session jsonToSession(String json) {
		Session session = new Session();
		
		session.setSessionID(this.jsonToSessionID(json));
		session.setCurrentTurn(this.jsonToCurrentTurn(json));
		session.setGrabDeck(this.parseToArray(json, "grabDeck"));
		session.setPutOnDeck(this.parseToArray(json, "putOnDeck"));
		session.setplayerOne(this.jsonToPlayer(String.format("%s_playerOne", session.getSessionID()), json));
		session.setplayerTwo(this.jsonToPlayer(String.format("%s_playerTwo", session.getSessionID()), json));
		
		return session;
	}
	
	/**
	 * Metodo que transforma de highScoreList a JSON.
	 * @param ArrayList<HighScore> Lista de puntuaciones.
	 * @return String json
	 * */
	public String highScoreListToJSON(ArrayList<HighScore> list) {
		StringBuilder json = new StringBuilder("{\"highScores\":[");
		
		for(int i = 0; i < list.size(); i++) {
			HighScore currentScore = list.get(i);
			json.append(
					String.format(
							"{\"user\":\"%s\",\"score\":%s,\"date\":\"%s\"}",
							currentScore.getUser(),
							currentScore.getScore(),
							currentScore.getDate()
							)
					);
			if(i < (list.size() - 1)) {
				json.append(",");
			}
		}
		
		json.append("]}");
		
		return json.toString();
	}
	
	/**
	 * Metodo que genera una lista de puntuaciones altas en base a un json dado.
	 * @param String json El json con la lista.
	 * @return ArrayList<HighScore> highScoreList Lista de puntuaciones.
	 * */
	public ArrayList<HighScore> jsonToHighScoreList(String json){
		ArrayList<HighScore> highScoreList = new ArrayList<HighScore>();
		
		Pattern arrayPattern = Pattern.compile("\\{[^((\\[)|(\\]))]*\\}");
		Matcher arrayMatch = arrayPattern.matcher(json);
		
		if(arrayMatch.find()) {
			String found = arrayMatch.group(0);
			String[] highScores = found.split("\\},\\{");
			
			for(int i = 0; i < highScores.length; i++) {
				HighScore score = new HighScore();
				String currentScore = highScores[i].replaceAll("((\")|(\\{)|(\\}))", "");
				String[] scoreAttr = currentScore.split(",");
				
				score.setUser(String.format("%s", scoreAttr[0].split(":")[1]));
				score.setScore(Integer.parseInt(scoreAttr[1].split(":")[1]));
				score.setDate(String.format("%s", scoreAttr[2].split(":")[1]));
				
				highScoreList.add(score);
			}
		}
		
		return highScoreList;
	}
	
}
