<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<html>
	<head>
		<meta charset="UTF-8">
		<title>Ventana de bienvenida</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<link href="https://fonts.googleapis.com/css?family=Fira+Code|Noto+Serif|Poppins&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="resources/index.css">	
		<script src="scripts/index.js"></script>
		<script src="scripts/jquery.js"></script>
	</head> 
	<body class="A1">
	  
		  <!--<header>-->
			  <!--<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>-->  
			  <div id="container">
				  <!-- Contenedor de los botones principales--> 
				  <div id="buttons">
					  <div id="btnStart" class="button" onclick="clickedButton(this)"></div>
					  <div id="btnLoad" class="button" onclick="clickedButton(this)"></div>
					  <div id="btnScore" class="button" onclick="clickedButton(this)"></div>
					  <div id="btnCredits" class="button" onclick="clickedButton(this)"></div>
				  </div>
				  <img id="startIcon" src="resources/Images/boxUno.png">
	  
				  <!-- Elementos de la ventana emergente del btnStart -->
				  <div id="overlayBtnStart" class="overlay contentBtn1">
					  <div id="popupBtnStart" class="popup contentBtn1">
						  <h1 id="titlePopupBtnStart" class="contentBtn1">Enviale este codigo a tu amigo.</h1>
						  <h1 id="accessCode" class="contentBtn1 contentBtn1"></h1><br>
						  <button id="btnCloseStart" class="buttonPopup contentBtn1" onclick="clickedButton(this)">Cancelar</button>
						  <button id="btnEnterGame" class="buttonPopup contentBtn1" onclick="clickedButton(this)">Entrar</button>
					  </div>
				  </div>
				  
				  <!-- Elementos de la ventana emergente del btnLoad -->
				  <div id="overlayBtnLoad" class="overlay contentBtn2">	
					  <div id="popupBtnLoad" class="popup contentBtn2">
						  <h1 id="titlePopupBtnLoad" class="contentBtn2">Ingresa codigo de acceso.</h1><br>
						  <input type="text" id="textBox" class="contentBtn2"><br><br><br><br>
						  <button id="btnCloseLoad" class="buttonPopup contentBtn2" onclick="clickedButton(this)">Cancelar</button>
						  <button id="btnEnterToGame" class="buttonPopup contentBtn2" onclick="clickedButton(this)">Entrar</button>
					  </div>
				  </div>
				  
				  <!-- Elementos de la ventana emergente del btnScore -->
				  <div id="overlayBtnScore" class="overlay contentBtn3">
					  <div id="popupBtnScore" class="popup contentBtn3">
						 	<h1 id="titlePopupBtnScore" class="contentBtn3">Tabla de calificaciones</h1>							  
							<table id="scoreTable" border="1" class="contentBtn3"></table><br>
							<button id="btnCloseScore" class="buttonPopup contentBtn3" onclick="clickedButton(this)">Cerrar</button> --> 
					  </div>
				  </div>	
					  
				  <!-- Elementos de la ventana emergente del btnCredits -->
				  <div id="overlayBtnCredits" class="overlay contentBtn4">
					  <div id="popupBtnCredits" class="popup contentBtn4">
						  <p id="textCredits">AQUI VAN LOS CREDITOS</p>
						  <button id="btnCloseCredits" class="buttonPopup contentBtn4" onclick="clickedButton(this)">Aceptar</button>
					  </div>
				  </div> 
			  

				  <div id="currentTheme" class="currentThemeClass">
					  <span>Cambiar tema</span>
					  <img src="resources/Images/Classic/classic_icon.png" id="btnSelectTheme" onclick="clickedChangeTheme()">
				  </div>
				  
				  <!-- Ventana de mensaje -->
				  <div id="overlayMessage" class="overlay">
					  <div id="popupMessage" class="popup">
						  <h1 id="textMessage"></h1>
						  <button id="btnMessage" class="buttonPopup" onclick="clickedButton(this)">Ok</button>
					  </div>
				  </div>
				  
  
				  
			  	</div>
		  <!--</header>-->

	</body>
</html> 