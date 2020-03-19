/**
 * 
 */
function CssContent(){
    var styleCSS = `<style>
                    body{
                        background: #4C3175;
                    }`;
    
    this.createElement = function(elementID,top,left){
        this.paintButton(elementID,top,left);
    }

    this.paintButton = function(btnID,top,left){
        styleCSS += `
        .${btnID} {
            color:white;
            opacity: 0;
            background-image: url("resources/Images/back2.jpg");
            border-radius: 12px;
            box-shadow: 6px 6px 6px #A51E03;
            background-size: 190px 270px;
            border-radius: 12px;
            cursor: pointer;
            display: block;  
            width: 9.6%;
            height: 31%;
            padding: 20px 20px;
            transition: all 0.2s ease 0s;
            position: absolute;
            top: ${top}vh;
            left: ${left}vw;
            outline:none;
            animation : welcomeCard${btnID} 2s linear forwards, welcomeCards2 2s linear forwards, welcomeCards3 3s linear forwards;
        
        }
        
        .${btnID}:active{
            box-shadow: 5px 5px 5px #777, 0px 0px 80px 0px #A41B55;
            transform: translateY(15px);
            background-color: #A41B55;
            outline:none;
        }
    
        .${btnID}:hover{
            box-shadow: 4px 4px 4px #777, 0px 0px 80px 0px #00b7f8;
            border-bottom:1px solid #0045A6;
            text-shadow:  0px 0px 5px #fff, 0px 0px 5px #fff;
            transform: translateY(4px);
            transition: all 0.1s ease 0s;
            margin: 20px auto 76px auto;
        }			
    `;
    }

    this.paintText = function(textID){
        styleCSS +=`
            .title${textID} {
                transform: rotate(-45deg); 
                color:#A22727;
                vertical-align: middle; 
                display: inline-block;
                font-size: 25px; 
                font-family: 'Raleway', Arial, Helvetica;
                font-weight: lighter;
                position: absolute;
                top: 45%;
                left: 11%;
            }`;
    }


    this.paintOverlay = function(overlayID){
        styleCSS += `
            .${overlayID} {
                background: rgba(0,0,0,.85);
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                align-items: center;
                justify-content: center;
                display: flex;
                visibility: hidden;
                backdrop-filter: blur(3px);
            }
            
            .${overlayID}.active {
                visibility: visible;
                transform: scale(1); 
                opacity: 1;
            }`;
            
    }

    this.paintPopup = function(popudID,popupTitleID,option){
        styleCSS += `
        .${popudID} {
            background: #F8F8F8;
            backdrop-filter: blur(4px);
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            
            border-radius: 0px 0px 0px 0px;
            -moz-border-radius: 0px 0px 0px 0px;
            -webkit-border-radius: 0px 0px 0px 0px;
            border: 7px solid #dc2c47;
        
            font-family: 'Montserrat', sans-serif;
            padding: 20px;
            text-align: center;
            width: 450px;
            height:300px;
            transition: .3s ease all;
            transform: scale(0.7);
            opacity: 0;
            
        }
        
        .${popudID}.active {	
            transform: scale(1); opacity: 1; 
        }
        .${popudID}.active #${popupTitleID} { 
            animation: entradaTitulo .8s ease .5s forwards; 
            animation-delay: 0.5s
        } 
            `;
        if(option == 0){
            styleCSS += `
            .${popudID}.active #accessCode  { 
                animation: zoomIn .8s ease .9s forwards; 
                animation-delay: 1s;
                }
                `;
        }
        if(option == 1){
            styleCSS +=`
            .${popudID} .textBox{
                text-align: center;
                font-size:70px;
                width: 300px;
                height:80px;
                border: 3px solid #A41B55;
                border-radius: 20px 20px 20px 20px;
                margin-bottom: 10px;
                opacity: 0;
            }
            .${popudID}.active .textBox{
                animation: zoomIn .8s ease .9s forwards; 
                animation-delay: 1.0s;
            }
            `;
        }
        
    }

    this.paintBtnToPopup = function(popudID,btnID,delay){
        styleCSS += `
            .${popudID} #${btnID} {
                background-color:#3cce33;
                border-color:#d8d8d8;
                border-width:3px;
                border-style:solid;
                border-radius:15px;
                font-weight:700;
                font-size:40px; 
                color:white;
                margin-bottom: 10px;
                opacity: 0;
                
            }
            .${popudID}.active #${btnID}{
                animation: zoomIn .8s ease .9s forwards; 
                animation-delay: 1.6s;
            }    
        `;
    }

    //Dibuja los titulos de una ventana emergente.
    this.paintTitles = function(){
        styleCSS += `
        
        .popup h1 {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 10px;
            opacity: 0;
        }
        .popup h2 {
            font-size: 70px;
            font-weight: 600;
            margin-bottom: 10px;
            opacity: 0;
        }
        .popupAccess .textBox{
            text-align: center;
            font-size:70px;
            width: 300px;
            height:80px;
            border: 3px solid #A41B55;
            border-radius: 20px 20px 20px 20px;
            
        }
        .popupScore h1{
            background-color: #4C3175;
            color:white;
        }
        `;
    }
    
    this.paintElementToScoreTable= function(){
        styleCSS += `
        .popupScore {
            background-image: url("resources/Images/score.jpg");
            background-repeat:no-repeat;
            background-position:center top;
            backdrop-filter: blur(4px);
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
            
            border-radius: 0px 0px 0px 0px;
            -moz-border-radius: 0px 0px 0px 0px;
            -webkit-border-radius: 0px 0px 0px 0px;
            border: 7px solid #dc2c47;
        
            font-family: 'Montserrat', sans-serif;
            padding: 20px;
            text-align: center;
            width: 500px;
            height:500px;
            transition: .3s ease all;
            transform: scale(0.7);
            opacity: 0;
        }
        .popupScore.active {	
            transform: scale(1); 
            opacity: 1; 
        }
        .popupScore .btnCloseScore{
            background-color:#3cce33;
            border-color:#d8d8d8;
            border-width:3px;
            border-style:solid;
            border-radius:15px; 
            font-weight:700;
            font-size:40px;  
            color:white;
        }
        
        .popupScore .scoreTable{
            background-color: white;
            width: 50%;
            height: 50px;
            margin: 0 auto;
            opacity: 1;
        }
        
        .popupScore th{
            border: 3px solid #6467C7;
        }
        .popupScore tr:nth-child(odd){
            background-color: #6467C7 ;
            color: #EDEDF9;
        }
        
        .popupScore tr:nth-child(even){
            background-color: #8C8ECD;
            color: #EDEDF9;
        }
        .popupScore h1{
            background-color: #4C3175;
            color:white;
        }
        `;
    }

    this.paintAnimation = function(){
        styleCSS += `
                @keyframes entradaTitulo {
                    from { 
                        opacity: 0;
                        transform: translateY(-100px);
                    } 
                
                    to {
                        transform: translateY(0);    
                        opacity: 1; 
                    }
                } 
                
                @keyframes welcomeCardbtnStart {
                    0% { 
                        opacity: 1;
                        transform: translateZ(500px) translateY(500px) translateX(400px);
                    } 
                    50%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                    100%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                }
                @keyframes welcomeCards2{
                    0%{
                        opacity: 1;
                    }
                    50%{
                        opacity: 1;
                        transform:rotateY(0deg);
                    }
                    100%{
                        opacity: 1;
                        transform:rotateY(180deg);
                
                    }
                }
                @keyframes welcomeCards3{
                    0%{
                        opacity: 1;
                    }
                    50%{
                        opacity: 1;
                    }
                    100%{
                        opacity: 1;
                        background-image: url("resources/Images/reverseTransp3.jpg");
                    }
                }
                
                @keyframes welcomeCardbtnLoad {
                    0% { 
                        opacity: 1;
                        transform: translateZ(500px) translateY(500px) translateX(200px);
                    } 
                    50%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                    100%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                }
                @keyframes welcomeCardbtnScore {
                    0% { 
                        opacity: 1;
                        transform: translateZ(500px) translateY(500px) translateX(-200px);
                    } 
                    50%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                    100%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                }
                @keyframes welcomeCardbtnCredits {
                    0% { 
                        opacity: 1;
                        transform: translateZ(500px) translateY(500px) translateX(-400px);
                    } 
                    50%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                    100%{
                        opacity: 1;
                        transform: translateX(0) translateZ(0);
                    }
                }
                
                @keyframes zoomIn {
                    from {
                      opacity: 0;
                      -webkit-transform: scale3d(0.3, 0.3, 0.3);
                      transform: scale3d(0.3, 0.3, 0.3);
                    }
                  
                    to{ 
                    opacity:1;
                    
                }
                  
                  }
                }
                `;
    }

    this.getStyleCss = function(){
        return styleCSS;
    }

    this.finishStyle = function(){
        styleCSS +="</style>"; 
    }


}