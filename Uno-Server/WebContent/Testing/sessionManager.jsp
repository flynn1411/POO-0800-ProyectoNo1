<%@page import="SessionManager.Session"%><%@page import="SessionManager.Status"%>
<%@page import="SessionManager.DeckOfCards"%>
<%@page import="java.util.ArrayList"%><%@page import="SessionManager.Card"%><%@page import="SessionManager.SessionManager"%><%@page import="SessionManager.RandomGenerator"%><%@page import="SessionManager.FileManager"%><%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

SessionManager sm = new SessionManager();

if( request.getParameter("newSession").toString() != null ){
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
	System.out.println(code);
	
	out.print(
			String.format(
					"{ \"code\" : \"%s\" }",
					code
					)
			);
}
else if(request.getParameter("playerOneStatus") != null &&
		request.getParameter("sessionID") != null
){
	
	Status playerOneStatus = Status.DISCONNECTED;
	String sessionID = request.getParameter("sessionID").toString().trim();
	
	System.out.println(sessionID);
	
	Session currentSession = sm.getSession(sessionID);
	currentSession.getPlayerOne().setStatus(playerOneStatus);
	sm.checkForEmptySessions();

}

%>