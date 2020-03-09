<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="SessionManager.CSVParser"%>
<%@page import="SessionManager.FileManager"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%><%

    String content = request.getParameter("fileContent").toString().trim();

    FileManager fm = new FileManager();
    CSVParser csvParser = new CSVParser();
    
    ArrayList<String[]> result = csvParser.csv2arrayList(content);
    fm.write("prueba2.csv", csvParser.arrayList2csv(result));
    
    out.print(
    		String.format(
    				"{\"array\": \"%s\"}"
    				, csvParser.arrayList2csv(result) )
    		);
	//fm.write("boxOfCards.csv", content);
%>