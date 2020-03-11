<%@page import="java.util.ArrayList"%><%@page import="SessionManager.Card"%><%@page import="SessionManager.SessionManager"%><%@page import="SessionManager.RandomGenerator"%><%@page import="SessionManager.FileManager"%><%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%

if( request.getParameter("newSession").toString().trim() == "true" ){
	//Generar Barajas de cartas
	ArrayList<Card> grabDeck = new ArrayList<Card>();
	ArrayList<Card> putOnDeck = new ArrayList<Card>();
	ArrayList<Card> playerOne = new ArrayList<Card>();
	ArrayList<Card> playerTwo = new ArrayList<Card>();
	
	SessionManager sm = new SessionManager();
	
	String code = sm.createNewSession(grabDeck, putOnDeck, playerOne, playerTwo);
	
	out.print(
			String.format(
					"{ \"code\" : \"%s\" }",
					code
					)
			);
}

%>