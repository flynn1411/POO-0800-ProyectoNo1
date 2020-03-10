<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    	pageEncoding="ISO-8859-1"%>
		<%@page import="Project.FileManager" %>
		<%@page import="Project.GetJsonContent"%>
<html>
	<head>
			
		 
		<meta charset="UTF-8">
		<link rel="stylesheet" href="SkinToWelcome.css">
		<title>Ventana de bienvenida</title>
		
	</head> 

	<body class="bodyContent">

		<script src="BackEndToWelcome.js"></script>
		<script src="JsonManager.js"></script>
		<script src="jquery.js"></script>
		<script src="Node.js"></script>
							
				<div class="btnStart" id="btnStart" onClick="clickedButton(1)">
					<span class="titleBtn1">Iniciar Partida</span>
				</div>
				
				<div class="btnLoad" id="btnLoad" onClick="clickedButton(2)">
					<span class="titleBtn2">Reanudar Partida</span>
				</div>
					
				<div class="btnScore" id="btnScore" onClick="clickedButton(3)">
					<span class="titleBtn3">Calificaciones</span>
				</div>
				
				<div class="btnCredits" id="btnCredits" onClick="clickedButton(4)">
					<span class="titleBtn4">Creditos</span>
				</div>
	  		
			
			<!--Contenido/Ventana boton de iniciar partida.-->
			<div class="overlay" id="overlay">
				<div class="popup" id="popup">
				 
					<h1>Enviale este codigo a tu amigo.</h1>
					<h2 id="accessCode"></h2><br><br>
					
					<button id="btnClosePopup" class="btnClosePopup"onClick="clickedButton(5)">Cancelar</button>
					<button id ="btnEnter" class="btnEnter" onClick="clickedButton(4)">Entrar</button>
				
				</div> 
			</div> 
			 
			<!--Contenido/Ventana boton de reanudar partida.-->
			<div class="overlayAccess" id="overlayAccess">
				<div class="popupAccess" id ="popupAccess">
				
					<h3>Ingrese el codigo de acceso</h3><br>
					<input type="text" class="textBox" id="textBox"><br><br><br><br>
					<button id="btnCloseAccess" class="btnCloseAccess" onClick="clickedButton(7)">Cancelar</button>
					<button type="submit" id="btnEnterAccess" class="btnEnterAccess" onClick="clickedButton(6)">Acceder</button>
				
				</div> 
			</div>

			<!--Contenido/Ventana del boton score.-->
			<div class="overlayScore" id="overlayScore">
				<div class="popupScore" id="popupScore">
					<h1 class="scoreTitle">Tabla de Calificaciones</h1>
					<table class="scoreTable" id="scoreTable" border="1">
					</table><br>
					<button id="btnCloseScore" class="btnCloseScore" onClick="clickedButton(8)">Cerrar</button>	
				</div> 
			</div>

	<script src="BackEndToWelcome.js"></script>
	<script src="JsonManager.js"></script>

	<script> 
	</script>

	</body>
</html> 