package SessionManager;

import java.util.Map;

/** Clase administradora de las sesiones, esta se encarga de leer el estado de una sesión existente o crear una nueva sesión.*/
public class SessionManager {
	
	/**Lista de sesiones creadas*/
	private Map<String, Session> Sessions;
	
	private String[] characters = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R"
			,"S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"};
	
	/** 
	 * Generador de codigos para sesiones. Este código puede estar formado por números y/o letras en mayúscula.
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
	
	public boolean createNewSession() {
		String sessionCode = this.generateCode();
		Session newSession = new Session(sessionCode, "", "", "", "");
		this.Sessions.put(newSession.getSessionID(), newSession);
		//if(this.createSessionJSON())
		return true;
	}
}
