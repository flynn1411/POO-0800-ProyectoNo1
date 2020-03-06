<%@page import="sessionManager.FileManager"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	
	<body>
		<p>Hola Mundo</p>
		<%
		
		FileManager fm = new FileManager();
		
		out.print(fm.getPath("prueba.txt"));
		
		%>
	</body>
</html>