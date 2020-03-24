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
		}
		
		if(valueInt == 3){	 
			this.getJsonToJSP();
				overlayBtnScore.classList.add('active');
				popupBtnScore.classList.add('active');

		}
		
		if(valueInt == 4){	 

			console.log("Credits.");
		}
		
		if(valueInt == 5){
			var sessionID = document.getElementById('accessCode').innerHTML;
			var parameters = {"command":"deleteCurrentSession", "sessionID": sessionID};
			
			$.post('service1.jsp', parameters, function(response){
				console.log(response.trim());
			});
			
			overlayBtnPlay.classList.remove('active');
			popupBtnPlay.classList.remove('active');
		}
		if(valueInt == 6){
			var sessionID = textBox.value.toString();
			var action = "service1.jsp";
			var parameters = {"command":"searchSession","sessionID":sessionID};
			
			$.post(action, parameters, function(response){
				response = JSON.parse(response.trim());
				
				if(response["result"] === "DoesNotExist"){
					console.log("No existe la sesión.");
				}
				else if(response["result"] === "fullSession"){
					console.log("La sesión ya se encuentra llena.");
				}
				else{
					var sessionID = response["sessionID"];
					var playerID = response["playerID"];
					//window.location = "service1.jsp?command=joinSession&sessionID=" + sessionID + "&playerID=" + playerID;
					window.location = `service1.jsp?command=joinSession&sessionID=${sessionID}&playerID=${playerID}`;
				}
			});
			
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
        	var sessionID = parameters[0];
        	var playerID = parameters[1];
        	window.location = `service1.jsp?command=joinSession&sessionID=${sessionID}&playerID=${playerID}`;
        }
	}  
	
	function getJsonToJSP(){
		var action = "service1.jsp";
		var callback = function(content){
			var json = JSON.parse(content.trim());
			var highScoresArr = json["fileContent"]["highScores"];
			
			var html = '<thead><th>Nombre</th><th>Calificacion</th><th>Fecha</th></thead><tbody>';
			
			for(i=0; i<highScoresArr.length; i++){
				html += `<tr><td>${highScoresArr[i]["user"]}</td><td>${highScoresArr[i]["score"]}</td><td>${highScoresArr[i]["score"]}</td></tr>`;
			}
			
			html += "</tbody>";
			
			scoreTable.innerHTML = html;		
		} 
		$.post(action,{"command":"retrieveHighScores"},callback);
	}
	
	function checkIfValid(inputElement){
		if( !(inputElement.value.match(/([A-Z]|[0-9]){4}/)) ){
			console.log("no valido");
		}
	}