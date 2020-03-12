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


    <div id="deck"      class="deck" onClick="eventDeck(this)"></div>

    <script src="ElementManagerToGameTable.js"></script>
    <script>
        createCard("fisrtCard","40","30","../Images/score.jpg","0");
        createCard("tempCard1","75","30","../Images/back2.jpg","0");
        createCard("tempCard2","75","40","../Images/back.jpg","0");
        createCard("tempCard3","75","50","../Images/reverseTransp3.jpg","0");
        createCard("tempCard4","75","60","../Images/especial.jpg","0");
        fishStyle();
        style.innerHTML =  styleCss;
    </script>

</body>
</html>
