function CardCreator(){

    this.createCard = function(card) {
        var body = document.querySelector("body");
        var style = `height: 35vh; width: 10vw; font-size: 3rem; font-family: 'Fira Code', 
                    monospace; line-height: 10vh; text-align: center; border-radius: 1rem; 
                    background-color: #000000; color: ${card.color};`;
        var cardDIV = `<div id="card" style="${style}" >
                        <span style="vertical-align: middle; display: inline-block">
                            <h1>${card.symbol}</h1>
                        <span>
                        </div>`;
        body.innerHTML = `${body.innerHTML}<br>${cardDIV}`;
    };

}


function Card(symbol, color){
    this.symbol = symbol;
    this.color = color;
}

function Randomizer(){
    this.randomize = (max, min) => {
        rand = Math.random();
        return parseInt( rand*(max-min) +min );
    };
}