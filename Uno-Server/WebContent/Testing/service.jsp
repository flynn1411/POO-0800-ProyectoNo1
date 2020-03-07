<%@page import="SessionManager.FileManager"%><%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%

FileManager fm = new FileManager();

if(
		request.getParameter("action") != null &&
		(request.getParameter("action").toString().trim().matches("read") ) &&
		request.getParameter("fileName") != null
		){
	
	String fileName = request.getParameter("fileName").toString().trim();
	
	out.print(
			String.format(
					"{\"%s\":\"%s\"}",
					fm.getName(fileName),
					fm.read(fileName)
					)
			);
}

else if(
		request.getParameter("action") != null &&
		request.getParameter("action").toString().trim().matches("write") &&
		request.getParameter("fileName") != null &&
		request.getParameter("fileContent") != null
		){
	String fileName = request.getParameter("fileName").toString().trim();
	String fileContent = request.getParameter("fileContent").toString().trim();
	String responseText;
	
	if(fm.write(fileName, fileContent)){
		responseText = "{\"Exito\" : true }";
	}else{
		responseText = "{\"Exito\" : false }";
	}
	out.print(responseText);
}else{
	out.print("{\"Error\" : true }");
}
%>