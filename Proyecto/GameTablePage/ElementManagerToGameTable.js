/**
 * 
 */

var clickedCard = null;
var tempArrPrincipalDeck = [fisrtCard,tempCard1,tempCard2,tempCard3,tempCard4,tempCard5,tempCard6,tempCard7,tempCard8,tempCard9,tempCard10]; //Arreglo que contendra las cartas en la baraja principal.
var topCard = discardedDeck;
var styleCss = `<style>
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
                    z-index:-1;
                }

                div#areaTable{
                    background-color: #D99486;
                    bottom: 0;
                    left: 0;
                    z-index:-1;
                }

                div#areaP2{
                    background-color: #427DCD;
                    bottom: 0;
                    right: 0;
                    z-index:-1;
                }
                div#discardedDeck{
                    border: 1px solid red;
                    position: absolute;
                    top:40vh;
                    left:30vw;
                    width:95px;
                    height:135px;
                    box-shadow: 1px 1px 1px #777, 0px 0px 10px 10px #3740B4;
                }
                div#principalDeck{
                    border: 1px solid red;
                    position: absolute;
                    top:40vh;
                    left:60vw;
                    width:95px;
                    height:135px;
                    box-shadow: 1px 1px 1px #777, 0px 0px 10px 10px #3740B4;
                }
            `;
//Funciones que se ejecutaran al iniciar el programa.
function loadContent(){
    
    this.distributeCards();
}

function eventT(element){
    if(clickedCard == null){
        clickedCard = element;
        
        //clickedCard.style.transform ="translateY(-60px)";
        clickedCard.style.boxShadow = "1px 1px 1px #777, 0px 0px 30px 30px #B43B37";
        
    }else{
        //console.log(clickedCard.style);
        //clickedCard.style.transform = "traslateY(200px)";
        clickedCard.style.boxShadow = "none";
        clickedCard = element;
        clickedCard.style.boxShadow = "1px 1px 1px #777, 0px 0px 30px 30px #B43B37";
    }
}
    
function eventDeck(){
    if(clickedCard!=null){
        var action = "TestValidateMovement.jsp";
        var parameters = {
            "player":1,
            "from":"hisDesck",
            "to":"discartedDeck",
            "cards":{
                    "player":{"color":"green","number":7},
                    "deck":{"color":"green","number":3}    
                    }
        
            };
        var callback = function(response){
            //console.log(response)
            if(response == "true"){
                clickedCard.style.top = "40vh";
                clickedCard.style.left = "30vw";
                clickedCard.style.boxShadow = "none";
                clickedCard = null;
            }
            else{
                console.log("MOVIMIENTO INVALIDO");
            }
        }    
        
        $.get(action,parameters,callback);


    } 
    
    
}
//Reparte las cartas al inicio, la cantidad correspondiente a cada jugador.
//Dejando una carta en el area de cardas descartadas.
function distributeCards(){
    //console.log("Ha dobleclickeado la baraja principal");
    var valueLeft = 20;
    for(let i=0;i<5;i++){
        //console.log(i);
        //console.log(tempArrPrincipalDeck.length)
       
        if(i == 4){
            console.log("Entro");
            tempArrPrincipalDeck[i].style.top ="38vh";
            tempArrPrincipalDeck[i].style.left = "30vw";        
            tempArrPrincipalDeck[i].style.zIndex = "-2";
        }else{
            tempArrPrincipalDeck[i].style.top ="70vh";
            tempArrPrincipalDeck[i].style.left =`${valueLeft}vw`;
            valueLeft = valueLeft + 10;    
        }

    }
}

function createCard(elementID,top,left,urlImage,zIndex){

    styleCss += `
    .${elementID} {    
        opacity: 1;
        background-image: url("${urlImage}");
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
        top: ${top}vh;
        left: ${left}vw;
        z-index:${zIndex};
    }
    `;
}
function editProperties(elementID){
    styleCss += `
    .${elementID}{
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
        `;    
    
        }

    function fishStyle(){
        styleCss +=`</style>`;
    }