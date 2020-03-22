<%@page import="SessionManager.Session"%>
<%@page import="SessionManager.FileManager"%>
<%@page import="java.util.Map"%>
<%@page import="SessionManager.Status"%>
<%@page import="SessionManager.Card"%>
<%@page import="java.util.ArrayList"%>
<%@page import="SessionManager.DeckOfCards"%>
<%@page import="SessionManager.SessionManager"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

	SessionManager sm = new SessionManager();

	if(request.getParameter("command") != null){
		
		/**El caso en que el comando sea el de crear una nueva sesión.*/
		if( request.getParameter("command").toString().equals("createNewSession") ){
			//Generar Barajas de cartas
			DeckOfCards doc = new DeckOfCards();
			sm.checkForEmptySessions();

			doc.shuffleDeck();
			
			ArrayList<Card> grabDeck = doc.grabDeck;
			ArrayList<Card> putOnDeck = doc.putOnDeck;
			ArrayList<Card> playerOne = doc.playerOne;
			ArrayList<Card> playerTwo = doc.playerTwo;
			
			String sessionCode = sm.createNewSession(grabDeck, putOnDeck, playerOne, playerTwo);
			String playerID = sm.getSession(sessionCode).getPlayerOne().getID();
			//System.out.println(code);
			
			out.print(
					String.format(
							"{\"sessionID\" : \"%s\",\"playerID\":\"%s\"}",
							sessionCode,
							playerID
							)
					);
		}
		
		/**El caso en caso en que se desee borrar la sesión.*/
		else if(
				request.getParameter("command").toString().equals("deleteCurrentSession") &&
				request.getParameter("sessionID") != null
				){
			try{
				String sessionID = request.getParameter("sessionID").toString();
				sm.getSession(sessionID).getPlayerOne().setStatus(Status.DISCONNECTED);
				sm.checkForEmptySessions();
				out.print(String.format(
						"{\"ActionStatus\":\"Success\"}"
						));
			}catch(Exception e){
				System.out.println(String.format("Error: %s",e));
				e.printStackTrace();
				out.print(String.format(
						"{\"ActionStatus\":\"e\"}"
						));
			}
		}
		
		/**En el caso que se deseé ver la lista de puntuaciones más altas.*/
		else if(request.getParameter("command").toString().equals("retrieveHighScores")){
			
			FileManager fm = new FileManager();
			String highScoreJSON = fm.read("highScores.json");
			
			out.print(String.format(
					"{\"fileContens\":%s}",
					highScoreJSON
					));
		}
		
		/**En el caso que se desee entrar a una sesión ya existente.*/
		else if(request.getParameter("command").equals("joinSession")){
			
			/**Se redirige a la página de juego ingresando como parámetros la sesión a la cual se ingresa y el jugador.*/	
			if(
					request.getParameter("playerID") != null &&
					request.getParameter("sessionID") != null
					){
				String sessionID = request.getParameter("sessionID").toString().trim();
				String playerID = request.getParameter("playerID").toString().trim();
				
				response.sendRedirect(String.format(
						"GameTable/GameTable.jsp?session=%s&playerID=%s",
						sessionID,
						playerID
								));
			}
			else{
				out.print("Faltan parámetros.");
			}
			
		}
		
	else if(
			request.getParameter("command").toString().equals("searchSession") &&
			request.getParameter("sessionID") != null
			){
		Session foundSession = sm.getSession(request.getParameter("sessionID").toString());
	}
		
	}
	
	else{
		out.print(
				"Comando no identificado."
				);
	}

%>