<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	
	<link rel="stylesheet" href="resources/maquillaje.css">
	<meta charset="UTF-8">
	<title>Ventana de bienvenida</title>
	
</head>

<body onload="loadContent();">
	<div class="contenedor">
		<article>
			<button name="btnStart" id="btnStart" onmouseenter="onMouse(1);" onmouseleave="outMouse(1);" onClick="clickedButton(1);">Iniciar Partida</button><br>
			<button name="btnLoad" id="btnLoad" onmouseenter="onMouse(2);" onmouseleave="outMouse(2);" onClick="clickedButton(2);">Reanudar Partida</button><br>
			<button name="btnScore" id="btnScore" onmouseenter="onMouse(3);" onmouseleave="outMouse(3);" onClick="clickedButton(3);">Score</button><br>
		</article>
	
		
		<div class="overlay" id="overlay">
			<div class="popup" id="popup">
			
				<h1>Enviale este codigo a tu amigo.</h1>
				<h2 id="accessCode"></h2><br><br>
				
				<button id="btnClosePopup" class="btnClosePopup"onClick="clickedButton(5)">Cancelar</button>
				<button id ="btnEnter" class="btnEnter" onClick="clickedButton(4)">Entrar</button>
			
			</div>
		</div>
		
		<div class="overlayAccess" id="overlayAccess">
			
			<div class="popupAccess" id ="popupAccess">
			
				<h3>Ingrese el codigo de acceso</h3><br>
				<input type="text" class="textBox" id="textBox"><br><br><br><br>
				<button id="btnCloseAccess" class="btnCloseAccess" onClick="clickedButton(7)">Cancelar</button>
				<button type="submit" id="btnEnterAccess" class="btnEnterAccess" onClick="clickedButton(6)">Acceder</button>
			
			</div>

		</div>
	
	
	</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript">	
	//Funcion que establece un estilo a un componente.
	function setStyle(background,paddingTop=-1,top=30,left=70){ 
	 	 
		this.styleCSS = `text-decoration:none;  
						position: absolute;
						top: \${top}%;
			 			left:\${left}%; 
						font-weight:1000;
						font-size:40px; 
						color:white;  
						padding-top:\${paddingTop}px;
						padding-left:20px; 
						background-color:\${background}; 
						border-color:#d8d8d8;
						border-width:3px;
						border-style:solid;
						border-radius:8px;`;
		
		return this.styleCSS.toString();
	}

	//Funcion que es ejecutada inicialmente que define un estilo a los botones.
	function loadContent(){		
		
		document.querySelector("#btnStart").style = this.setStyle('#D27647',-1,30,65);
		document.querySelector("#btnLoad").style = this.setStyle('#D27647',-1,45,65);
		document.querySelector("#btnScore").style = this.setStyle('#D27647',-1,60,65);
		//document.querySelector("#btnEnter").style = this.setStyle('#D27647',-1,70,40)
	}
	
	//Evento que ocurre al pasar el puntero por el boton.
	function onMouse(valueInt){
		
		if(valueInt ==1){
			document.querySelector("#btnStart").style = this.setStyle('#D83535',5,30,70);	
			
		}else if(valueInt ==2){
			document.querySelector("#btnLoad").style = this.setStyle('#D83535',5,45,70);
			
		}else{
			document.querySelector("#btnScore").style = this.setStyle('#D83535',5,60,70);
			
		}
			
	}
	
	
	//Evento que ocurre al 'retirar' el puntero del boton.
	function outMouse(valueInt){

		if(valueInt ==1){
			document.querySelector("#btnStart").style = this.setStyle('#D27647',-1,30,65);

		}else if(valueInt ==2){
			document.querySelector("#btnLoad").style = this.setStyle('#D27647',-1,45,65);

		}else{
			document.querySelector("#btnScore").style = this.setStyle('#D27647',-1,60,65);
		}
	}
	
	
	//Funcion de ejecucion en los diferentes botones, recibiendo como parametro un numero correspondiente al boton.
	function clickedButton(valueInt){
		//1:Boton iniciar partida	-	2:Boton Reanudar partida	-	3:Boton Score	-	4:Boton Entrar a la partida(Ventana emergente)	-	5:Cerrar popup
		var btnAbrirPopup = document.getElementById('btnStart'),
			overlay = document.getElementById('overlay'),
			popup = document.getElementById('popup'),
			btnCerrarPopup = document.getElementById('btnClosePopup'),
			
			btnReanudarPartida = document.getElementById('btnLoad'),
			overlay2 = document.getElementById('overlayAccess'),
			popup2 = document.getElementById('popupAccess'),
			btnCerrarAcceso = document.getElementById('btnCloseAccess');	
		
		if(valueInt ==1){	
			
			btnAbrirPopup.addEventListener('click', function(){
			overlay.classList.add('active');
			popup.classList.add('active');
			}
			);
			
			var action = "sessionManager.jsp";
			var parameters = {
				"newSession": "true"	
			};
			
			var callback = function(response){
				console.log(JSON.parse(response));
				var code = (JSON.parse(response))["code"];
				document.getElementById("accessCode").innerHTML = code;
			};
			
			$.get(action, parameters, callback);
			
			//document.getElementById('accessCode').innerHTML= this.generateAccessCode(4);
		}
		
		if(valueInt == 2){	
			btnReanudarPartida.addEventListener('click',function(){
			overlay2.classList.add('active');
			popup2.classList.add('active');
			}
			);
		}
		
		if(valueInt == 3){	
		
		}
		
		if(valueInt == 4){	 
		
		}
		
		if(valueInt == 5){
			btnCerrarPopup.addEventListener('click', function(e){
				e.preventDefault();
				overlay.classList.remove('active');
				popup.classList.remove('active');
			}
			);
		}
		if(valueInt == 6){
			var codeInput = document.getElementById('textBox').value;
			if(codeInput.match(/^([A-Z0-9]){4,4}?/)){
				console.log("EL CODIGO SI ES VALIDO"); 
			}else{
				console.log("EL CODIGO DE ACCESO NO ES VALIDO");
			}
			
		}
		if(valueInt == 7){
			btnCerrarAcceso.addEventListener('click',function(e){
				e.preventDefault();
				overlay2.classList.remove('active');
				overlay2.classList.remove('active');
			}
			); 
		}
		
	}  
	
	//Funcion que genera un codigo random validado.
	function generateAccessCode(quantity) {
		   var result = "";
		   var elements = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		   var n = elements.length;
		   for ( var i = 0; i < quantity; i++ ) {
		      result += elements.charAt(Math.floor(Math.random() * n));
		   }
		   return result;
		}
	
	
</script>

</body>
</html> 