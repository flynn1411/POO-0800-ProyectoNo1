<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Service JS</title>
	</head>
	<body onload="start()">
	<script src="scripts/jquery3.4.1.js"></script>
	<script type="text/javascript">
		
		function start(){
			var action = 'Welcome.jsp';
			var parameters = {
					"code":"Si we:v"
			};
			
			var callback= function(anyVariableName){
				return "weird";
			}
			
			$.get(action, parameters, callback);
		}	
	
	</script>
	
	</body>
</html>