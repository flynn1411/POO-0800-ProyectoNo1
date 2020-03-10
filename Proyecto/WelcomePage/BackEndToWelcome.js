	//Funcion de ejecucion en los diferentes botones, recibiendo como parametro un numero correspondiente al boton.
	function clickedButton(valueInt){
        //1:Boton iniciar partida	-	2:Boton Reanudar partida	-
        //3:Boton Score	-	4:Boton Entrar a la partida(Ventana emergente)	-	
        //5:Cerrar popupBtnPlay - 6: Caja de texto - 7:Boton cancelar ventana de acceso.
		
		//Variables con los respectivos elementos creados en la pagina html.
        var btnPlay = document.getElementById('btnStart'),
			overlayBtnPlay = document.getElementById('overlay'),
			popupBtnPlay = document.getElementById('popup'),
			btnCerrarpopupBtnPlay = document.getElementById('btnClosePopup'),
			
			btnLoad = document.getElementById('btnLoad'),
			overlayBtnPlay2 = document.getElementById('overlayAccess'),
			popupBtnPlay2 = document.getElementById('popupAccess'),
			btnCloseAccess = document.getElementById('btnCloseAccess');	

			btnScore = document.getElementById('btnScore'),
			overlayBtnScore = document.getElementById('overlayScore'),
			popupBtnScore = document.getElementById('popupScore'),
			btnCloseScore = document.getElementById('btnCloseScore')
			
			
		if(valueInt ==1){		
			btnPlay.addEventListener('click', function(){
			overlayBtnPlay.classList.add('active');
			popupBtnPlay.classList.add('active');
											}
									);
			document.getElementById('accessCode').innerHTML= this.generateAccessCode(4);
		} 
		
		if(valueInt == 2){	  
			btnLoad.addEventListener('click',function(){ 
			overlayBtnPlay2.classList.add('active');
			popupBtnPlay2.classList.add('active');
									}
								);
		}
		
		if(valueInt == 3){	 
			this.getJsonToJSP();		//Ejecuta el llamado del json por $.get contenido en el body de GetJsonToJSP.jsp
			btnScore.addEventListener('click',function(){
				overlayBtnScore.classList.add('active');
				popupBtnScore.classList.add('active');
				}
				);
		}
		
		if(valueInt == 4){	 
		//Ejecucion al 'clickear' entrar (Iniciar partida).
		}
		
		if(valueInt == 5){
			//Cerrar la ventana cuando se clickea en nueva partida.
			btnCerrarpopupBtnPlay.addEventListener('click', function(e){
				e.preventDefault();
				overlayBtnPlay.classList.remove('active');
				popupBtnPlay.classList.remove('active');
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
			//Boton de cerrar ventana de insertar codigo.
			btnCloseAccess.addEventListener('click',function(e){
				e.preventDefault();
				overlayBtnPlay2.classList.remove('active');
			}
			); 
		}
		if(valueInt == 8){
			//Para boton cerrar Score.
			btnCloseScore.addEventListener('click',function(e){
				e.preventDefault();
				overlayBtnScore.classList.remove('active')
				popupBtnScore.classList.remove('active')
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