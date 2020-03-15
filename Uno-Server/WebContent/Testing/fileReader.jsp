<%@page import="SessionManager.FileManager"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%><%
    
    if( request.getParameter("fileName") != null ){
    	String fileName = request.getParameter("fileName").toString().trim();
    	FileManager fm = new FileManager();
    	
    	if(fm.fileExists(fileName)){
    		out.print(String.format( "%s", fm.read(fileName)) );
    	}
    	else{
    		out.print("Not found");
    	}
    }
    else{
    	out.print("Invalid parameter sent.");
    }
    
%>