<%@page import="java.util.regex.Matcher"%>
<%@page import="java.util.regex.Pattern"%>
<%@page import="SessionManager.FileManager"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>JSONParser</title>
	</head>
	<body>
		<%
		
		FileManager fm = new FileManager();
		
		String result = fm.read("activeSessions/IE02.json");
		
		Pattern pattern = Pattern.compile("\"grabDeck\":\\[[^((\\[)|(\\]))]*\\]");
		Matcher matcher = pattern.matcher(result);
		
		if(matcher.find()){
			String found = matcher.group(0);
			out.print(found);
		}
		
		/*
		"playerOne":[
{"color":"blue","symbol":"5"},
{"color":"blue","symbol":"6"},
{"color":"green","symbol":"3"},
{"color":"red","symbol":"7"},
{"color":"red","symbol":"Reverse"},
{"color":"yellow","symbol":"Reverse"},
{"color":"green","symbol":"3"}
]
		
		RegEx: \{[^(\[|\])]*\}
		*/
		
		%>
	</body>
</html>