<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>

    <style> 
    </style>

</head>
<body id="contentBody">
    <div id="container">
        <div id="style"></div>    
        <div id="areaP1" class="table"></div>
        <div id="areaTable"  class="table"></div>
        <div id="areaP2" class="table"></div>
        <div id="discartedDeck" class="discartedDeck" onClick="eventDeck()"></div>
        <div id="principalDeck" class="discartedDeck" ondblclick="eventPrincipalDeck(this)"></div>
    </div>

    <script src="ElementManagerToGameTable.js"></script>
    <script src="../../jquery.js"></script>
    <script src="JsonCardManager.js"></script>
    
    <script>
        var em = new ElementsManager();
        function eventT(element){
            em.eventT(element);
        }
        function eventDeck(element){
            em.eventDeck(element);
        }

        em.paintCards();
        //console.log(container.innerHTML);
        em.setAnimations
        em.distributeCards()
        em.fishStyle();
        
        style.innerHTML =  em.getStyle();
    </script>

</body>
</html>