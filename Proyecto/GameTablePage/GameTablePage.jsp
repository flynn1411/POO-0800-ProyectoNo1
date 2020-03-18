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
<body>
    
    <div id="style"></div>
    <div id="areaP1"        class="box"></div>
    <div id="areaTable"  class="box"></div>
    <div id="areaP2"     class="box"></div>
    
    <div id="fisrtCard" class="fisrtCard" onClick="eventT(this);"></div>
    <div id="tempCard1" class="tempCard1" onClick="eventT(this);"></div>
    <div id="tempCard2" class="tempCard2" onClick="eventT(this);"></div>
    <div id="tempCard3" class="tempCard3" onClick="eventT(this);"></div>
    <div id="tempCard4" class="tempCard4" onClick="eventT(this);"></div>
    <div id="tempCard5" class="tempCard5" onClick="eventT(this);"></div>
    <div id="tempCard6" class="tempCard6" onClick="eventT(this);"></div>
    <div id="tempCard7" class="tempCard7" onClick="eventT(this);"></div>
    <div id="tempCard8" class="tempCard8" onClick="eventT(this);"></div>
    <div id="tempCard9" class="tempCard9" onClick="eventT(this);"></div>
    <div id="tempCard10" class="tempCard10" onClick="eventT(this);"></div>
    <div id="tempCard11" class="tempCard11" onClick="eventT(this);"></div>
    <div id="tempCard12" class="tempCard12" onClick="eventT(this);"></div>
    <div id="tempCard13" class="tempCard13" onClick="eventT(this);"></div>
    <div id="tempCard14" class="tempCard14" onClick="eventT(this);"></div>
    <div id="tempCard15" class="tempCard15" onClick="eventT(this);"></div>
    <div id="tempCard16" class="tempCard16" onClick="eventT(this);"></div>
    <div id="tempCard17" class="tempCard17" onClick="eventT(this);"></div>
    <div id="tempCard18" class="tempCard18" onClick="eventT(this);"></div>
    <div id="tempCard19" class="tempCard19" onClick="eventT(this);"></div>
    <div id="tempCard20" class="tempCard20" onClick="eventT(this);"></div>

    <div id="discardedDeck" class="discardedDeck" onClick="eventDeck()"></div>
    <div id="principalDeck" class="principalDeck" ondblclick="eventPrincipalDeck(this)"></div>
	

    <script src="ElementManagerToGameTable.js"></script>
    <script src="../../jquery.js"></script>
    <script>
        var em = new ElementsManager();
        window.onload = em.distributeCards;
        /*
        function eventT(element) {
            em.eventT(element);
        }
        function eventDeck(){
            em.eventDeck();
        }

        em.createCard("tempCard1","40","60","../Images/back2.jpg");
        em.createCard("tempCard2","40","60","../Images/back.jpg");
        em.createCard("tempCard3","40","60","../Images/reverseTransp3.jpg");
        em.createCard("tempCard4","40","60","../Images/score.jpg");
        em.createCard("tempCard5","40","60","../Images/prueba.jpg");
        em.createCard("tempCard6","40","60","../Images/score.jpg");
        em.createCard("tempCard7","40","60","../Images/back2.jpg");
        em.createCard("tempCard8","40","60","../Images/uno.png");
        em.createCard("tempCard9","40","60","../Images/uno.png");
        em.createCard("tempCard10","40","60","../Images/uno.png");
        em.createCard("tempCard11","40","60","../Images/uno.png");
        em.createCard("tempCard12","40","60","../Images/uno.png");
        em.createCard("tempCard13","40","60","../Images/uno.png");
        em.createCard("tempCard14","40","60","../Images/uno.png");
        em.createCard("tempCard15","40","60","../Images/back2.jpg");
        em.createCard("tempCard16","40","60","../Images/uno.png");
        em.createCard("tempCard17","40","60","../Images/uno.png");
        em.createCard("tempCard18","40","60","../Images/uno.png");
        em.createCard("tempCard19","40","60","../Images/uno.png");
        em.createCard("tempCard20","40","60","../Images/uno.png");

        em.setDistributeAnimation();
        */
        em.fishStyle();
        
        style.innerHTML =  em.getStyle();
    </script>

</body>
</html>