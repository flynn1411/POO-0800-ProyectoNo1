<%@page import="Project.HighScore"%>
<%@page import="Project.DateHandler"%>
<%@page import="Project.HighScoreManager"%>
<%@page import="Project.Logic"%>
<%@page import="Project.Card"%>
<%@page import="java.util.ArrayList"%>
<%@page import="Project.Session"%>
<%@page import="Project.FileManager"%>
<%@page import="Project.SessionManager"%>
<%@page import="Project.Status"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    SessionManager sm = new SessionManager();
    FileManager fm = new FileManager();
    
    //Se revisa si se envia un comando y asímismo si se envia el id de una sesión.
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
    		
    		Logic gameLogic = new Logic();

    		int card = Integer.parseInt(request.getParameter("card").toString());
    		Session foundSession = sm.getSession(sessionID);
    		String playerID = request.getParameter("playerID").toString();
    		
    		//Si es el turno del jugador 1
    		if(foundSession.getPlayerOne().getID().equals(playerID)){
    			
	    		int n = 1;
    			gameLogic.move(card,foundSession,n);
	    	
	    	//Si es el turno del jugador 2
    		}else{
    			int n = 2;
    			gameLogic.move(card,foundSession,n);
    			
    			//se cambian los turnos
	    		foundSession.setCurrentTurn(foundSession.getPlayerOne().getID());
    		}
    	}
    	
    	//Agarrar una carta 
    	else if(
    			request.getParameter("command").toString().equals("grab") &&
    			request.getParameter("playerID") != null 
    		){
    		
    		Logic gameLogic = new Logic();

    		Session foundSession = sm.getSession(sessionID);
    		int card = 1;
    		String playerID = request.getParameter("playerID").toString();
    		
    		//Si es el turno del jugador 1
    		if(foundSession.getPlayerOne().getID().equals(playerID)){
    			int n = 3;
    			gameLogic.move(card,foundSession,n);
	    		
	    	
	    	//Si es el turno del jugador 2
    		}else{
    			int n = 4;
    			gameLogic.move(card,foundSession,n);
    			
    		}
    	}
    	
    	//Si el jugador desea salir de la partida.
    	else if(
    			request.getParameter("command").toString().equals("diconnect") &&
    			request.getParameter("playerID").toString() != null
    			){
    		Session foundSession = sm.getSession(sessionID);
    		String playerID = request.getParameter("playerID").toString();
    		
    		if(foundSession.getPlayerOne().getID().equals(playerID)){
    			foundSession.getPlayerOne().setStatus(Status.DISCONNECTED);
    		}else{
    			foundSession.getPlayerTwo().setStatus(Status.CONNECTED);
    		}
    		
    		sm.updateSession(foundSession);
    		
    		response.sendRedirect("index.jsp");
    	}
    	
    	//Se revisa si el jugador actual obtuvo una alta puntuación.
    	else if(
    			request.getParameter("command").toString().equals("checkScore") &&
    			request.getParameter("playerID") != null &&
    			request.getParameter("score") != null
    			){
    		
    		String playerID = request.getParameter("playerID").toString();
    		int score = Integer.parseInt(request.getParameter("score").toString());
    		Session foundSession = sm.getSession(sessionID);
    		HighScoreManager hm = new HighScoreManager();
    		DateHandler dh = new DateHandler();
    		boolean isAHighScore = false;
    		int sessionScore = 0;
    		
    		if(foundSession.getPlayerOne().getID().equals(playerID)){
    			score = foundSession.getPlayerOne().getScore();
    		}else{
    			score = foundSession.getPlayerTwo().getScore();
    		}
    		
    		HighScore possibleHighScore = new HighScore(playerID, score, dh.getCurrentDate());
    		
    		if( hm.isThisAHighScore(possibleHighScore) ){
    			out.print(String.format(
    					"{\"IsAHighScore\":true}"
    					));
    		}
    		else{
    			out.print(String.format(
    					"{\"IsAHighScore\":false}"
    					));
    		}
    	}
    	
    	//Se agrega una puntuacion alta
    	else if(
    			request.getParameter("command").toString().equals("addHighScore") &&
    			request.getParameter("playerID") != null &&
    			request.getParameter("score") != null
    			){
    		
    		String playerID = request.getParameter("playerID").toString();
    		int score = Integer.parseInt(request.getParameter("score").toString());
    		HighScoreManager hm = new HighScoreManager();
    		DateHandler dh = new DateHandler();
    		HighScore highScore = new HighScore(playerID, score, dh.getCurrentDate());
    		hm.addHighScore(highScore);
    		
    		out.print(String.format("{\"status\":\"success\"}"));
    	}
    	
    }else{
    	out.print("{\"Error\":\"Faltan uno o dos parámetros.\"}");
    }
%>