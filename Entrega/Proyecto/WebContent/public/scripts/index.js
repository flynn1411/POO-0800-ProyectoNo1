var body = document.body;
var currentStyle = "default";
var countTheme = 1;	
//Funcion que se ejecuta con el evento 'click' de los elementos...
//... de la pagina de bienvenida.	
function clickedButton(idElement){
	//Se guarda el id del elemento clickeado.
	var idElement = idElement.getAttribute('id');
	console.log(idElement);

	//---------- Boton iniciar nueva partida. ----------
	if(idElement == "btnStart"){		
		//Con 'activeElements' se activan los elementos de la clase dada.
		this.activeElements("contentBtn1");
		
		var	action = "service1.jsp",
			parameters = {"command": "createNewSession"},
			callback = function(response){
				response = JSON.parse(response);
				var playerID = response["playerID"];
				var sessionID = response["sessionID"];
				
				document.cookie = `sessionID=${sessionID}`;
				document.cookie = `playerID=${playerID}`;
				
				accessCode.innerHTML = sessionID;
			};
		$.post(action, parameters, callback);
	} 

	//---------- Boton reanudar partida. ----------
	if(idElement == "btnLoad"){	   
		textBox.value = "";							//Limpia la caja de texto.
		this.activeElements("contentBtn2");
	}
		
	//---------- Boton tabla de calificaciones. ----------
	if(idElement == "btnScore"){
		this.activeElements("contentBtn3");
		this.getJsonToJSP();						//Ejecuta el llamado del json por $.get contenido en el body de GetJsonToJSP.jsp
		//console.log(scoreTable);
	}
		
	//---------- Boton de creditos. ----------
	if(idElement == "btnCredits"){	 
		this.activeElements("contentBtn4");		
	}
		
	//------ Boton cerrar ventana emergente del boton nueva partida. ------
	if(idElement == "btnCloseStart"){
		//Si se quiere que las animaciones se repitan cada vez que se presione...
		//... uno de los botones de inicio, de remueve todos los elementos, pero para...
		//... que no sea molesto visualmente, solo se remueve la ventana y no sus elementos...
		//... asi solo se veran las animaciones al clickear la primera vez.
		overlayBtnStart.classList.remove('active');
		popupBtnStart.classList.remove('active');
		
		var sessionID = accessCode.innerHTML;
		var parameters = {"command":"deleteCurrentSession", "sessionID": sessionID};
		var callback = function(){
			console.log(response);
		}

		$.post('service1.jsp', parameters, callback);
	}

	//----- Boton entrar de la ventana emergente del boton nueva partida. -----
	if(idElement == "btnEnterGame"){
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

	//---------- Boton cerrar la ventana emergente del boton reanudar partida.
	if(idElement == "btnCloseLoad"){
		overlayBtnLoad.classList.remove('active');
		popupBtnLoad.classList.remove('active');
		//this.activateMessage("La sesion a la que intenta acceder no existe.")
	}

	//---------- Boton entrar a partida existente. ----------
	if(idElement == "btnEnterToGame"){
		//Aqui se entrara a una partida existente validando el codigo.
		
		var sessionID = textBox.value.toString(),
			action = "service1.jsp";
			parameters = {"command":"searchSession","sessionID":sessionID};
		
		$.post(action, parameters, function(response){
			response = JSON.parse(response.trim());
			
			if(response["result"] === "DoesNotExist"){
				activateMessage("La sesion a la que intenta acceder no existe.");
				//console.log("No existe la sesión.");
			}
			else if(response["result"] === "fullSession"){
				activateMessage("La sesion a la que intenta acceder ya se encuentra llena.")
				//console.log("La sesión ya se encuentra llena.");
			}
			else{
				let newSessionID = response["sessionID"];
				let newPlayerID = response["playerID"];
				
				//borrado de cookies
				document.cookie = `sessionID=${sessionID}; expires=Thu, 01-Jan-70 00:00:01 GMT;`;
				document.cookie = `playerID=${playerID}; expires=Thu, 01-Jan-70 00:00:01 GMT;`;
				
				//agregado de Cookies
				document.cookie = `sessionID=${newSessionID}`;
				document.cookie = `playerID=${newPlayerID}`;
				
				window.location = `service1.jsp?command=joinSession&sessionID=${newSessionID}&playerID=${newPlayerID}`;
			}
		});
	}
		
	//---------- Boton cerrar tabla de calificaciones. ----------
	if(idElement == "btnCloseScore"){
		overlayBtnScore.classList.remove('active')
		popupBtnScore.classList.remove('active')
	}

	//---------- Boton cerrar creditos. ----------
	if(idElement == "btnCloseCredits"){
		overlayBtnCredits.classList.remove('active');
		popupBtnCredits.classList.remove('active');
	}

	//---------- Boton cerrar/ok del mensaje emergente. ------------
	if(idElement == "btnMessage"){
		overlayMessage.classList.remove('active');
		popupMessage.classList.remove('active');
	}
}  
	
//---------- Funcion que genera un codigo random validado. ----------
function getJsonToJSP(){
	var action = "service1.jsp";
	var callback = function(content){
		var json = JSON.parse(content.trim());
		var highScoresArr = json["fileContent"]["highScores"];
		var html = '<thead><th>Nombre</th><th>Calificacion</th><th>Fecha</th></thead><tbody>';
		
		for(i=0; i<highScoresArr.length; i++){
			html += `<tr><td>${highScoresArr[i]["user"]}</td><td>${highScoresArr[i]["score"]}</td><td>${highScoresArr[i]["date"]}</td></tr>`;
		}
		
		html += "</tbody>";
		
		scoreTable.innerHTML = html;		
	} 
	$.post(action,{"command":"retrieveHighScores"},callback);
}

//Activa los elementos de una clase.
function activeElements(_class){
	//Se almacena los elementos dentro de la llamada.
	var collectionElements = document.getElementsByClassName(_class);
	var size = collectionElements.length;
	
	//Se recorren los elementos de la clase para activarlos.
	for(let i=0;i<size; i++){collectionElements[i].classList.add('active');}
}

//Desactivar los elementos de un clase dada.
function inactivateElements(_class){
	var collectionElements = document.getElementsByClassName(_class);
	var size = collectionElements.length;
	for(let i=0;i<size; i++){collectionElements[i].classList.remove('active');}
}

function activateMessage(message){
	textMessage.innerHTML = `${message}`;
	overlayMessage.classList.add('active');
	popupMessage.classList.add('active');
}

//Funcion para el cambio de temas.
function eventTheme(object){
  var element = object.getAttribute("id");
  console.log("Estilo actual: ",currentStyle);
  
  if(element == "dark"){
    document.body.classList.replace(`${currentStyle}`, 'dark');
    currentStyle = "dark";
  }

  if(element == "green"){
    document.body.classList.replace(`${currentStyle}`, 'green');
    currentStyle = "green";
  }

  if(element == "default"){
    document.body.classList.replace(`${currentStyle}`, 'default');
    console.log("entra");
    currentStyle = "default"
  }
}

function clickedChangeTheme(){
	var arrThemes = ["default","green","dark"];
    let newTheme = countTheme%arrThemes.length;
    document.body.classList.replace(`${currentStyle}`,`${arrThemes[newTheme]}`);
    currentStyle = arrThemes[newTheme];

    //Para cambiar la imagen del tema actual.
    if(currentStyle == "default"){
        btnSelectTheme.src = "resources/Images/Classic/classic_icon.png";
    }
    if(currentStyle == "dark"){
        btnSelectTheme.src = "resources/Images/Basic/basic_icon.png";
    }
    if(currentStyle == "green"){
        btnSelectTheme.src = "resources/Images/Minimalist/minimalista_icon.png";
    }
    countTheme ++;
}