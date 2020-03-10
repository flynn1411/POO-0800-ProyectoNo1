//Clase que maneja el json del Score.
function JSONManager(){
	this.getLastIndex = function(json){
		last = 0;
			for (let i in json){
				last = i;
			}
			return last;
			
	}
	
	//Metodo para agregar datos al registro(JSON) de calificaciones.
	//Mandando como parametros: [Nombre de Usuario],[Calificacion],[Fecha].
	this.addElements = function(json,user,score,date){
		var lastIndex = parseInt(this.getLastIndex(json));
		//console.log("El ultimo indice es: " + lastIndex);
		json[lastIndex+1]={"user":user,"score":score,"date":date};
	}
 
	//Imprime el contenido en el json.
	this.printJson = function(json){
		for(let i in json){
			let currentIndex = json[i];
			console.log(`Partida${i} = ${currentIndex['user']} - ${currentIndex['score']} - ${currentIndex['date']}`);
		}
	}

	//Funcion que convierte un json a un tabla, este metodo ya ordena el json.
	this.convertJsonToHTML = function(json){
		var html = "";
		//html += '<tbody>';
		sortJson = this.sortJson(json);
		//sortJson = json;
		for (let i in sortJson){
			let currentIndex = sortJson[i];
			html += '<tr>';
				html += `<td>${i}</td>`;
				html += `<td>${currentIndex['user']}</td>`;
				html += `<td>${currentIndex['score']}</td>`;
				html += `<td>${currentIndex['date']}</td>`;
			html += '</tr>';
		}

		//html += '</tbody>';
		//html +='</table>';
		return String(html);
	}

	//Ordena el json tomando como referencia las calificaciones.
	this.sortJson = function(json){
		var jsonArr = this.convertJsonToArray(json);
		var tempArr = [];
		while(jsonArr.length >0){
			var highValue = 0;
			var item=null;
			var position = 0;
			for (var i in jsonArr){							//1000,6000,7000
				var secondArr = jsonArr[i];					//Luis,1000,30/20/2020
				if(secondArr[1]>highValue){
					highValue = secondArr[1];
					item = secondArr;
					position = i;
				}
			}
			tempArr.push(item);
			jsonArr.splice(position,1);		
		}
		return this.convertArrayToJson(tempArr);			//Retorna el json ordenado.	
	}
	
	//Convierte el json en un arreglo.
	//Necesario para el ordenamiento de las calificaciones dentro del json.
	this.convertJsonToArray = function(json){
		var jsonArray = [];
		
		for(let i in json){
			let currentIndex = json[i];
			let tempArr = [];
			tempArr.push(currentIndex['user']);
			tempArr.push(currentIndex['score']);
			tempArr.push(currentIndex['date']);
			jsonArray.push(tempArr);
		}
		return jsonArray;
	}

	//Convierte un arreglo a un json.
	//Necesario una vez el Json->Arreglo ha sido ordenado.
	this.convertArrayToJson = function(arr){
		//Formato esperado [['Luis',1000,0042]['Carlos',120,394828]]
		var newSortJson = {};
		for(let i in arr){
			var secondArr = arr[i];	//Luis,1000,30/20/2020
			let user = secondArr[0];
			let score = secondArr[1];
			let date = secondArr[2]; 
			
			this.addElements(newSortJson,user,score,date);
		}

		return newSortJson;
		
	}
}
