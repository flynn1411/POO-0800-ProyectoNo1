<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>

    <style> 
    	div.box{
			position: fixed;
			border: 2px solid black;
			width: 100vw;
			height: 33vh;
		}
        
        div#areaP1{
            background-color: #40CC37;
            top: 0;
            left: 0;
        }
    
        div#areaTable{
            background-color: #D99486;
            bottom: 0;
            left: 0;
        }

        div#areaP2{
            background-color: #427DCD;
            bottom: 0;
            right: 0;
        }

        .tempCard{
            opacity: 1;
            background-image: url("../Images/back2.jpg");
            border-radius: 12px;
            background-size: 90px 130px;
            border: solid black ;
            border-radius: 12px;
            cursor: pointer;
            display: block;  
            width: 50px;
            height: 90px;
            padding: 20px 20px;
            transition: all 0.2s ease 0s;
            position: absolute;
            top: 70vh;
            left: 15vw;
        }

        .deck {
            opacity: 1;
            background-image: url("../Images/especial.jpg");
            border-radius: 12px;
            background-size: 90px 130px;
            border: solid black ;
            border-radius: 12px;
            cursor: pointer;
            display: block;  
            width: 50px;
            height: 90px;
            padding: 20px 20px;
            transition: all 0.2s ease 0s;
            position: absolute;
            top: 36vh;
            left: 40vw;
            z-index: 0;
        }
        /*
        .tempCard:active{
            box-shadow: 4px 4px 4px #777, 0px 0px 80px 0px #00b7f8;
            border-bottom:1px solid #0045A6;
            text-shadow:  0px 0px 5px #fff, 0px 0px 5px #fff;
            transform: translateY(4px);
            transition: all 0.1s ease 0s;
            margin: 20px auto 76px auto;
        }*/
        
        
    </style>

</head>
<body>
    BIENVENIDO A LA MESA DE JUEGOa
    


    <div id="areaP1"        class="box"></div>
    <div id="areaTable"  class="box"></div>
    <div id="areaP2"     class="box"></div>
    
    <div id="tempCard" class="tempCard" onClick="eventT(this);"></div>
    <div id="deck"      class="deck" onClick="eventDeck(this)"></div>

    <script>
        var clickedCard = "";
        function eventT(element){
            
            tempCard.style = `
                box-shadow: 4px 4px 4px #777, 0px 0px 80px 0px #00b7f8;
                border-bottom:1px solid #0045A6;
                text-shadow:  0px 0px 5px #fff, 0px 0px 5px #fff;
                transform: translateY(4px);
                transition: all 0.1s ease 0s;
                margin: 20px auto 76px auto;
                `;

            clickedCard = element;
            }
        

        function eventDeck(element){
            console.log(clickedCard);
            //console.log(tempCard.style);
            
            clickedCard.style=`
            opacity: 1;
            background-image: url("../Images/back2.jpg");
            border-radius: 12px;
            background-size: 90px 130px;
            border: solid black ;
            border-radius: 12px;
            cursor: pointer;
            display: block;  
            width: 50px;
            height: 90px;
            padding: 20px 20px;
            transition: all 0.2s ease 0s;
            position: absolute;
            top: 36vh;
            left: 40vw;
            z-Index = 1;
            `;
        }
    </script>


</body>
</html>
