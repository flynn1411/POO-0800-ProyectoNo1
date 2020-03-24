<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<%@page import="Project.FileManager" %>
<%@page import="Project.GetJsonContent"%>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Ventana de bienvenida</title>
		<link rel="stylesheet" href="StyleWelcomePage.css">	
	</head> 
	
	<body>
		<div id="buttons">
			<div id="btnStart" class="button" onclick="clickedButton(this)"></div>
			<div id="btnLoad" class="button" onclick="clickedButton(this)"></div>
			<div id="btnScore" class="button" onclick="clickedButton(this)"></div>
			<div id="btnCredits" class="button" onclick="clickedButton(this)"></div>
		</div>
		
		<div id="overlayBtnStart" class="overlay">
			<div id="popupBtnStart" class="popup">
				<h1 id="titlePopupBtnStart">Enviale este codigo a tu amigo.</h1>
				<h1 id="accessCode"></h1><br><br>
				<button id="btnCloseStart" class="buttonPopup" onclick="clickedButton(this)">Cancelar</button>
				<button id="btnEnterGame" class="buttonPopup" onclick="clickedButton(this)">Entrar</button>
			</div>
		</div>
			
		<div id="overlayBtnLoad" class="overlay">	
			<div id="popupBtnLoad" class="popup">
				<h1 id="titlePopupBtnLoad">Ingresa codigo de acceso.</h1><br>
				<input type="text" id="textBox"><br><br><br><br>
				<button id="btnCloseLoad" class="buttonPopup" onclick="clickedButton(this)">Cancelar</button>
				<button id="btnEnterToGame" class="buttonPopup" onclick="clickedButton(this)">Entrar</button>
			</div>
		</div>
				
		<div id="overlayBtnScore" class="overlay">
			<div id="popupBtnScore" class="popup">
				<h1 id="titlePopupBtnScore"></h1>
				<table id="scoreTable" border="1"></table><br>
				<button id="btnCloseScore" class="buttonPopup" onclick="clickedButton(this)">Cerrar</button>
			</div>
		</div>	
			
		<div id="overlayBtnCredits" class="overlay">
			<div id="popupBtnCredits" class="popup">
				<h1 id="titlePopupBtnCredist"></h1>
				<button id="btnCloseCredits" class="buttonPopup"></button>
			</div>
		</div> 
					
	  		
	<script src="BackEndToWelcome.js"></script>
	<script src="../../jquery.js"></script>
	<script src="BackEndToWelcome.js"></script>
	<script src="JsonManager.js"></script>

	<script>			 
	</script>

	</body>
</html> 