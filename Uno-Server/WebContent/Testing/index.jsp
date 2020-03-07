<%@page import="SessionManager.FileManager"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
	</head>
	
	<body>
		<input type="text" id="fileName" placeholder="Nombre del archivo">
		<input type="text" id="fileContent" placeHolder="Contenido del archivo">
		<button onclick="readFile();">Read Contents</button>
		<button onclick="writeFile();">Write Contents</button>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script type="text/javascript">
			
			function readFile(){
				var fileName = document.querySelector("#fileName").value;
				
				var action = 'service.jsp';
				var parameters = {
					"action" : "read",
					"fileName" : fileName
				};
				console.log(parameters);
				var callback = function(response){
					document.querySelector("body").innerHTML += response;
				};
				
				$.get(action, parameters, callback);
				
			}
			
			function writeFile(){
				var fileName = document.querySelector("#fileName").value;
				var fileContent = document.querySelector("#fileContent").value;
				
				var action = 'service.jsp';
				var parameters = {
					"action" : "write",
					"fileName" : fileName,
					"fileContent" : fileContent
				};
				
				var callback = function(response){
					document.querySelector("body").innerHTML += `<br>${response}<br>`;
				};
				
				$.get(action, parameters, callback);
				
			}
		
		</script>
	</body>
</html>