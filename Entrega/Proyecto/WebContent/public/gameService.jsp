<%@page import="Project.Logic"%>
<%@page import="Project.Card"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Project.Session"%>
<%@page import="Project.FileManager"%>
<%@page import="Project.SessionManager"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
    SessionManager sm = new SessionManager();
    FileManager fm = new FileManager();

    if(
    		request.getParameter("command") != null &&
    		request.getParameter("sessionID") != null
    		){
    	String sessionID = request.getParameter("sessionID").toString().trim();
    	
    	//cargar Datos
    	if(request.getParameter("command").toString().equals("loadData")){

            if(sm.getSession(sessionID) != null){

                String json = fm.read(String.format("activeSessions/%s.json",sessionID));

                out.print(json);
    		}
    	}
    	//Movimiento de baraja de jugador a baraja de colocar carta
    	else if(
    			request.getParameter("command").toString().equals("validate") &&
    			request.getParameter("playerID") != null &&
    			request.getParameter("card") != null
    			){
    		Session foundSession = sm.getSession(sessionID);
    		int card = Integer.parseInt(request.getParameter("card").toString());
    		String playerID = request.getParameter("playerID").toString();
  
    		ArrayList<Card> playerDeck = new ArrayList<Card>();
    		Logic gameLogic = new Logic();
    		ArrayList<ArrayList<Card>> result = new ArrayList<ArrayList<Card>>();
    		
    		if(foundSession.getPlayerOne().getID().equals(playerID)){
    			playerDeck = foundSession.getPlayerOne().getDeck();
	    		result= gameLogic.move(card, playerDeck, foundSession.getPutOnDeck());
	    		foundSession.getPlayerOne().setDeck(result.get(0));
    		}else{
    			playerDeck = foundSession.getPlayerTwo().getDeck();
    			result= gameLogic.move(card, playerDeck, foundSession.getPutOnDeck());
    			foundSession.getPlayerTwo().setDeck(result.get(0));
    		}
    		
    		foundSession.setPutOnDeck(result.get(1));
    		//foundSession.setCurrentTurn(turn);
    		sm.updateSession(foundSession);
    		
    		String json = fm.read(String.format("activeSessions/%s.json",sessionID));

            out.print(json);
    	}
    	
    }else{
    	out.print("Comando no encontrado.");
    }
%>