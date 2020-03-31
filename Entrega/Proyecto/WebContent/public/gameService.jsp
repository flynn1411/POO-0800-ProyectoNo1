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
    }else{
    	out.print("Comando no encontrado.");
    }
%>