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
		
		<div id="overlayBtnStart" class="overlay contentBtn1">
			<div id="popupBtnStart" class="popup contentBtn1">
				<h1 id="titlePopupBtnStart" class="contentBtn1">Enviale este codigo a tu amigo.</h1>
				<h1 id="accessCode" class="contentBtn1 contentBtn1"></h1><br>
				<button id="btnCloseStart" class="buttonPopup contentBtn1" onclick="clickedButton(this)">Cancelar</button>
				<button id="btnEnterGame" class="buttonPopup contentBtn1" onclick="clickedButton(this)">Entrar</button>
			</div>
		</div>
			
		<div id="overlayBtnLoad" class="overlay contentBtn2">	
			<div id="popupBtnLoad" class="popup contentBtn2">
				<h1 id="titlePopupBtnLoad" class="contentBtn2">Ingresa codigo de acceso.</h1><br>
				<input type="text" id="textBox" class="contentBtn2"><br><br><br><br>
				<button id="btnCloseLoad" class="buttonPopup contentBtn2" onclick="clickedButton(this)">Cancelar</button>
				<button id="btnEnterToGame" class="buttonPopup contentBtn2" onclick="clickedButton(this)">Entrar</button>
			</div>
		</div>
				
		<div id="overlayBtnScore" class="overlay contentBtn3">
			<div id="popupBtnScore" class="popup contentBtn3">
				<h1 id="titlePopupBtnScore" class="contentBtn3"></h1>
				<table id="scoreTable" border="1" class="contentBtn3"></table><br>
				<button id="btnCloseScore" class="buttonPopup contentBtn3" onclick="clickedButton(this)">Cerrar</button>
			</div>
		</div>	
			
		<div id="overlayBtnCredits" class="overlay contentBtn4">
			<div id="popupBtnCredits" class="popup contentBtn4">
				<h1 id="titlePopupBtnCredist" class="contentBtn4"></h1>
				<button id="btnCloseCredits" class="buttonPopup contentBtn4"></button>
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