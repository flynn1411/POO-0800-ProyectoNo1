<%@page import="SessionManager.DeckOfCards"%>
<%@page import="java.util.ArrayList"%><%@page import="SessionManager.Card"%><%@page import="SessionManager.SessionManager"%><%@page import="SessionManager.RandomGenerator"%><%@page import="SessionManager.FileManager"%><%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

if( request.getParameter("newSession").toString() != null ){
	//Generar Barajas de cartas
	DeckOfCards doc = new DeckOfCards();
	SessionManager sm = new SessionManager();
	
	try{
		doc.pack();
		doc.shuffleDeck();
	}
	catch(Exception e){
		System.out.println(String.format("Error: %s", e));
	}
	
	ArrayList<Card> grabDeck = new ArrayList<Card>();
	ArrayList<Card> putOnDeck = new ArrayList<Card>();
	ArrayList<Card> playerOne = new ArrayList<Card>();
	ArrayList<Card> playerTwo = new ArrayList<Card>();
	
	String code = sm.createNewSession(grabDeck, putOnDeck, playerOne, playerTwo);
	System.out.println(code);
	
	out.print(
			String.format(
					"{ \"code\" : \"%s\" }",
					code
					)
			);
}

%>