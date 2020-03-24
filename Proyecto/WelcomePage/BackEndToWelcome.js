	//Funcion que se ejecuta con el evento 'click' de los elementos...
	//... de la pagina de bienvenida.
function clickedButton(idElement){
	//Se guarda el id del elemento clickeado.
	var idElement = idElement.getAttribute('id');
	console.log(idElement);
	//Boton iniciar nueva partida.
	if(idElement == "btnStart"){		
		//Se agrega clase al elemento/objeto div para activarlo.
		overlayBtnStart.classList.add('active');
		popupBtnStart.classList.add('active');

		accessCode.innerHTML= this.generateAccessCode(4);
	} 

	//Boton reanudar partida.
	if(idElement == "btnLoad"){	   
		textBox.value = "";							//Limpia la caja de texto.
		overlayBtnLoad.classList.add('active');
		popupBtnLoad.classList.add('active');
	}
		
	//Boton tabla de calificaciones.
	if(idElement == "btnScore"){
		this.getJsonToJSP();						//Ejecuta el llamado del json por $.get contenido en el body de GetJsonToJSP.jsp
		console.log("HTML hay: ",scoreTable.innerHTML);	 
		overlayBtnScore.classList.add('active');
		popupBtnScore.classList.add('active');
	}
		
	//Boton de creditos.
	if(idElement == "btnCredits"){	 
		overlayBtnCredits.classList.add('active');
		popupBtnCredits.classList.add('active');		
	}
		
	//Boton cerrar ventana emergente del boton nueva partida.
	if(idElement == "btnCloseStart"){
		overlayBtnStart.classList.remove('active');
		popupBtnStart.classList.remove('active');
	}

	//Boton entrar de la ventana emergente del boton nueva partida.
	if(idElement == "btnEnterGame"){
		//Aqui se iniciara sesion y se redigira a la mesa de juego.
		var cookies = document.cookie.trim().split(";");
        var parameters = [];
        for(i = 0; i<cookies.length; i++){
            parameters.push(cookies[i].split("=")[1]);
        }
        console.log(parameters)
	}

	//Boton cerrar la ventana emergente del boton reanudar partida.
	if(idElement == "btnCloseLoad"){
		overlayBtnLoad.classList.remove('active');
		popupBtnLoad.classList.remove('active');
	}

	//Boton entrar a partida existente.
	if(idElement == "btnEnterToGame"){
		//Aqui se entrara a una partida existente validando el codigo.
		var codeInput = textBox.value;
		if(codeInput.match(/^([A-Z0-9]){4,4}?/)){
			console.log("EL CODIGO SI ES VALIDO"); 
		}else{
			console.log("EL CODIGO DE ACCESO NO ES VALIDO");
		}
	}
		
	//Boton cerrar tabla de calificaciones.
	if(idElement == "btnScore"){
		overlayBtnScore.classList.remove('active')
		popupBtnScore.classList.remove('active')
	}

	//Boton cerrar creditos.
	if(idElement == "btnCredits"){
		overlayBtnCredits.classList.remove('active');
		popupBtnCredits.classList.remove('active');
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