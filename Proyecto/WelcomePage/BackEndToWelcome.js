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
		accessCode.innerHTML= this.generateAccessCode(4);
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
	}

	//----- Boton entrar de la ventana emergente del boton nueva partida. -----
	if(idElement == "btnEnterGame"){
		//Aqui se iniciara sesion y se redigira a la mesa de juego.
		var cookies = document.cookie.trim().split(";");
        var parameters = [];
        for(i = 0; i<cookies.length; i++){
            parameters.push(cookies[i].split("=")[1]);
        }
        console.log(parameters)
	}

	//---------- Boton cerrar la ventana emergente del boton reanudar partida.
	if(idElement == "btnCloseLoad"){
		overlayBtnLoad.classList.remove('active');
		popupBtnLoad.classList.remove('active');
	}

	//---------- Boton entrar a partida existente. ----------
	if(idElement == "btnEnterToGame"){
		//Aqui se entrara a una partida existente validando el codigo.
		var codeInput = textBox.value;
		if(codeInput.match(/^([A-Z0-9]){4,4}?/)){
			console.log("EL CODIGO SI ES VALIDO"); 
		}else{
			console.log("EL CODIGO DE ACCESO NO ES VALIDO");
		}
	}
		
	//---------- Boton cerrar tabla de calificaciones. ----------
	if(idElement == "btnScore"){
		overlayBtnScore.classList.remove('active')
		popupBtnScore.classList.remove('active')
	}

	//---------- Boton cerrar creditos. ----------
	if(idElement == "btnCredits"){
		overlayBtnCredits.classList.remove('active');
		popupBtnCredits.classList.remove('active');
	}

}  
	
//---------- Funcion que genera un codigo random validado. ----------
function generateAccessCode(quantity) {
	   var result = "";
	   var elements = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	   var n = elements.length;
	   for ( var i = 0; i < quantity; i++ ) {
	      result += elements.charAt(Math.floor(Math.random() * n));
	   }
	   return result;
	}
	
function getJsonToJSP(){
	var action = "JsonContent.jsp";
	var callback = function(content){
	var jm = new JSONManager();	
		var tempArr = content.split(";");
		var result = tempArr.join('');
		result = JSON.parse(result);
		var sortJson = jm.sortJson(result); 
		var html = '<thead><th>Posicion</th><th>Nombre</th><th>Calificacion</th><th>Fecha</th></thead>';
		
/* 			for (let i in sortJson){
				let currentIndex = sortJson[i];
				table.insertRow().innerHTML = `<td>${i}</td><td>${currentIndex['user']}</td><td>${currentIndex['score']}</td><td>${currentIndex['date']}</td>`;	
			} */
		scoreTable.innerHTML = html;		
	} 
	$.post(action,callback);
}

function activeElements(_class){
	var collectionElements = document.getElementsByClassName(_class);
	var size = collectionElements.length;
	for(let i=0;i<size; i++){collectionElements[i].classList.add('active');}
}

function inactivateElements(_class){
	var collectionElements = document.getElementsByClassName(_class);
	var size = collectionElements.length;
	for(let i=0;i<size; i++){collectionElements[i].classList.remove('active');}
}