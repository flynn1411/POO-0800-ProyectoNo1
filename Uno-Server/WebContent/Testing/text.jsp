<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Insert title here</title>
	</head>
	<body onload="start()">
		<script src="scripts/jquery3.4.1.js"></script>
		<script type="text/javascript">
			//window.onload = start;
			
			function start(){
				var action = 'sessionManager.jsp';
				var parameters = {
						"newSession":"true"
				};
				
				var callback = function(response){
					console.log(response);
				}
				
				$.get(action,parameters,callback);
			}
		</script>
	</body>
</html>