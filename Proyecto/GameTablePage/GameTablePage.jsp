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

    <div id="discardedDeck" class="discardedDeck" onClick="eventDeck()"></div>
    <div id="principalDeck" class="principalDeck" ondblclick="eventPrincipalDeck(this)"></div>
	

    <script src="ElementManagerToGameTable.js"></script>
    <script src="../../jquery.js"></script>
    <script>

        window.onload = distributeCards;

        createCard("fisrtCard","40","60","../Images/especial.jpg","-1");
        createCard("tempCard1","40","60","../Images/back2.jpg","-1");
        createCard("tempCard2","40","60","../Images/back.jpg","-1");
        createCard("tempCard3","40","60","../Images/reverseTransp3.jpg","-1");
        createCard("tempCard4","40","60","../Images/score.jpg","-1");
        createCard("tempCard5","40","60","../Images/especial.jpg","-1");
        createCard("tempCard6","40","60","../Images/especial.jpg","-1");
        createCard("tempCard7","40","60","../Images/especial.jpg","-1");
        createCard("tempCard8","40","60","../Images/especial.jpg","-1");
        createCard("tempCard9","40","60","../Images/especial.jpg","-1");
        createCard("tempCard10","40","60","../Images/especial.jpg","-1");

        fishStyle();
        style.innerHTML =  styleCss;
    </script>

</body>
</html>