<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    	pageEncoding="ISO-8859-1"%>
<html>
	<head>
		<meta charset="UTF-8">
		<!-- <link rel="stylesheet" href="SkinToWelcome.css"> -->
		<title>Ventana de bienvenida</title>
		<style></style>
		
	</head> 

	<body class="bodyContent">

		<script src="scripts/BackEndToWelcome.js"></script>
		<script src="scripts/JsonManager.js"></script>
		<script src="scripts/jquery3.4.1.js"></script>
			<div class="container">
				<div class="btnStart" id="btnStart" onClick="clickedButton(1)">
					<span id="titleBtn1" class="titleBtn1"></span>
				</div>
				
				<div class="btnLoad" id="btnLoad" onClick="clickedButton(2)">
					<span class="titleBtn2"></span>
				</div>
					
				<div class="btnScore" id="btnScore" onClick="clickedButton(3)">
					<span class="titleBtn3"></span>
				</div>
				
				<div class="btnCredits" id="btnCredits" onClick="clickedButton(4)">
					<span class="titleBtn4"></span>
				</div>
			</div>				
	  		
				<div id="style"></div>
			<!--Contenido/Ventana boton de iniciar partida.-->
			<div class="overlay" id="overlay">
				<div class="popup" id="popup">
				 
					<h1 id="titleBtnStart">Enviale este codigo a tu amigo.</h1>
					<h2 id="accessCode"></h2><br><br>
					
					<button id="btnClosePopup" class="btnClosePopup"onClick="clickedButton(5)">Cancelar</button>
					<button id ="btnEnter" class="btnEnter" onClick="clickedButton(9)">Entrar</button>
				
				</div> 
			</div> 
	 
			<!--Contenido/Ventana boton de reanudar partida.-->
			<div class="overlayAccess" id="overlayAccess">
				<div class="popupAccess" id ="popupAccess">
				
					<h3 id="titleBtnLoad">Ingrese el codigo de acceso</h3><br>
					<input type="text" class="textBox" id="textBox"><br><br><br><br>
					<button id="btnCloseAccess" class="btnCloseAccess" onClick="clickedButton(7)">Cancelar</button>
					<button type="submit" id="btnEnterAccess" class="btnEnterAccess" onClick="clickedButton(6)">Acceder</button>
				
				</div> 
			</div>

			<!--Contenido/Ventana del boton score.-->
			<div class="overlayScore" id="overlayScore">
				<div class="popupScore" id="popupScore">
					<h1 id="titleBtnScore">Tabla de Calificaciones</h1>
					<table class="scoreTable" id="scoreTable" border="1"></table><br>
					<button id="btnCloseScore" class="btnCloseScore" onClick="clickedButton(8)">Cerrar</button>	
				</div> 
			</div>

	<script src="scripts/BackEndToWelcome.js"></script>
	<script src="scripts/JsonManager.js"></script>
	<script src="scripts/CssContent.js"></script>

	<script>
		window.onload = setStyleToBtn;
		function setStyleToBtn(){
			var cssContent = new CssContent();
			cssContent.paintButton("btnStart","10","13");
			cssContent.paintButton("btnLoad","10","33");
			cssContent.paintButton("btnScore","10","53");
			cssContent.paintButton("btnCredits","10","73");
			cssContent.paintOverlay("overlay");
			cssContent.paintOverlay("overlayAccess");
			cssContent.paintOverlay("overlayScore");
			
			cssContent.paintBtnToPopup("popup","btnEnter","1.6");
			cssContent.paintBtnToPopup("popup","btnClosePopup","1.6");
			cssContent.paintBtnToPopup("popupAccess","btnEnterAccess","1.6");
			cssContent.paintBtnToPopup("popupAccess","btnCloseAccess","1.6");
			cssContent.paintElementToScoreTable();
			//cssContent.paintBtnToPopup("popupScore","btnCloseScore","1.6");
			cssContent.paintPopup("popup","titleBtnStart",0);
			cssContent.paintPopup("popupAccess","titleBtnAccess",1);
			cssContent.paintPopup("popupLoad","titleBtnStart",2);
			cssContent.paintTitles();
			cssContent.paintAnimation();
			cssContent.finishStyle();
			style.innerHTML = cssContent.getStyleCss();	
			
		}
		
		 
	</script>

	</body>
</html> 