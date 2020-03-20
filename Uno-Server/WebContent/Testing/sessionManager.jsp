<%@page import="java.util.Map"%>
<%@page import="SessionManager.Session"%><%@page import="SessionManager.Status"%>
<%@page import="SessionManager.DeckOfCards"%>
<%@page import="java.util.ArrayList"%><%@page import="SessionManager.Card"%><%@page import="SessionManager.SessionManager"%><%@page import="SessionManager.RandomGenerator"%><%@page import="SessionManager.FileManager"%><%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

	SessionManager sm = new SessionManager();
	
	if( request.getParameter("newSession") != null ){
		//Generar Barajas de cartas
		DeckOfCards doc = new DeckOfCards();
		sm.checkForEmptySessions();
		try{
			//doc.pack();
			doc.shuffleDeck();
		}
		catch(Exception e){
			System.out.println(String.format("Error: %s", e));
		}
		
		ArrayList<Card> grabDeck = doc.grabDeck;
		ArrayList<Card> putOnDeck = doc.putOnDeck;
		ArrayList<Card> playerOne = doc.playerOne;
		ArrayList<Card> playerTwo = doc.playerTwo;
		
		String code = sm.createNewSession(grabDeck, putOnDeck, playerOne, playerTwo);
		//System.out.println(code);
		
		out.print(
				String.format(
						"{ \"code\" : \"%s\" }",
						code
						)
				);
	}
	else if(
			request.getParameter("deleteCurrentSession") != null &&
			request.getParameter("deleteCurrentSession").toString().trim().equals("true") &&
			request.getParameter("sessionID") != null
			){
		try{
			String sessionID = request.getParameter("sessionID").toString();
			sm.getSession(sessionID).getPlayerOne().setStatus(Status.DISCONNECTED);
			sm.checkForEmptySessions();
			out.print(String.format(
					"\\{\"ActionStatus\":\"Success\"\\}"
					));
		}catch(Exception e){
			System.out.println(String.format("Error: %s",e));
			e.printStackTrace();
			out.print(String.format(
					"\\{\"ActionStatus\":\"e\"\\}"
					));
		}
	}
	else{
		Map<String, String[]> requestMap = request.getParameterMap();
		Object[] keys = requestMap.keySet().toArray();
		for(int i = 0; i < keys.length; i++){
			System.out.println(String.format("%s: %s", keys[i], requestMap.get(keys[i])[0]));
		}
		out.print("La operación no se pudo lograr.");
	}

%>