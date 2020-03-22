//Funcion de ejecucion en los diferentes botones, recibiendo como parametro un numero correspondiente al boton.
	function clickedButton(valueInt){
        //1:Boton iniciar partida	-	2:Boton Reanudar partida	-
        //3:Boton Score	-	4:Boton Entrar a la partida(Ventana emergente)	-	
        //5:Cerrar popupBtnPlay - 6: Caja de texto - 7:Boton cancelar ventana de acceso.
		//8:Cerrar ventana de score.

		//Variables con los respectivos elementos creados en la pagina html.
		var	overlayBtnPlay = document.getElementById('overlay'),
			popupBtnPlay = document.getElementById('popup'),
			
			overlayBtnPlay2 = document.getElementById('overlayAccess'),
			popupBtnPlay2 = document.getElementById('popupAccess'),

			overlayBtnScore = document.getElementById('overlayScore'),
			popupBtnScore = document.getElementById('popupScore')

			
			
		if(valueInt ==1){		
			overlayBtnPlay.classList.add('active');
			popupBtnPlay.classList.add('active');
			//								}
			//						);
			var action = "service1.jsp";
			var parameters = {"command": "createNewSession"};
			$.post(action, parameters, function(response){
				response = JSON.parse(response);
				var playerID = response["playerID"];
				var sessionID = response["sessionID"];
				document.cookie = `sessionID=${sessionID}`;
				document.cookie = `playerID=${playerID}`;
				document.getElementById('accessCode').innerHTML = sessionID;
			});
		} 
		
		if(valueInt == 2){	  
			textBox.value = "";							//Limpia la caja de texto.
			overlayBtnPlay2.classList.add('active');
			popupBtnPlay2.classList.add('active');
			//						}
			//					);
		}
		
		if(valueInt == 3){	 
			this.getJsonToJSP();		//Ejecuta el llamado del json por $.get contenido en el body de GetJsonToJSP.jsp
			//btnScore.addEventListener('click',function(){
				overlayBtnScore.classList.add('active');
				popupBtnScore.classList.add('active');
				//}
				//);
		}
		
		if(valueInt == 4){	 
		//Ejecucion al 'clickear' entrar (Iniciar partida).
		}
		
		if(valueInt == 5){
			var sessionID = document.getElementById('accessCode').innerHTML;
			var parameters = {"command":"deleteCurrentSession", "sessionID": sessionID};
			
			$.post('service1.jsp', parameters, function(response){
				console.log(response);
			});
			
			overlayBtnPlay.classList.remove('active');
			popupBtnPlay.classList.remove('active');
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
			//Boton de cerrar ventana de insertar codigo.
				overlayBtnPlay2.classList.remove('active');
		}
		if(valueInt == 8){
			//Para boton cerrar Score.
				overlayBtnScore.classList.remove('active')
				popupBtnScore.classList.remove('active')
        }
        if(valueInt == 9){
            //Ejecucion al clickear entrar a la partida.
        	var cookies = document.cookie.trim().split(";");
        	var parameters = [];
        	for(i = 0; i<cookies.length; i++){
        		parameters.push(cookies[i].split("=")[1]);
        	}
        	console.log(parameters)
        }
	}  
	
	function getJsonToJSP(){
		var action = "JsonContent.jsp";
		var callback = function(content){
		var jm = new JSONManager();	
			var tempArr = content.split(";");
			var result = tempArr.join('');
			result = JSON.parse(result);
			var sortJson = jm.sortJson(result); 
			var table = document.getElementById('scoreTable');
			table.innerHTML = '<thead><th>Posicion</th><th>Nombre</th><th>Calificacion</th><th>Fecha</th></thead>';
			
			for (let i in sortJson){
				let currentIndex = sortJson[i];
				table.insertRow().innerHTML = `<td>${i}</td><td>${currentIndex['user']}</td><td>${currentIndex['score']}</td><td>${currentIndex['date']}</td>`;	
			}
					
		} 
		$.post(action,callback);
	}