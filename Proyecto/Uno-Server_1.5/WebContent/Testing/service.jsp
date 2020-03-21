<%@page import="SessionManager.FileManager"%>
<%@page import="SessionManager.SessionManager"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
	SessionManager sm = new SessionManager();	

	if(request.getParameter("ID") != null){
		
		String sessionID = request.getParameter("ID").toString().trim();
		
		if(sm.getSession(sessionID) != null){
			
			FileManager fm = new FileManager();
			String json = fm.read(String.format("activeSessions/%s.json",sessionID));
					
			out.print(json);
								
		}
		
		
		
	}else{
		
	}


%>