function CardCreator(){

    this.createCard = function(card) {
        var body = document.querySelector("body");
        var style = `height: ${card.height}vh; width: ${card.width}vw; font-size: 3rem; font-family: 'Fira Code', 
                    monospace; line-height: ${card.width*1.5}vh; text-align: center; border-radius: 1rem; 
                    background-color: #000000; color: ${card.color};`;
        var cardDIV = `<div id="card" style="${style}" >
                        <span style="vertical-align: middle; display: inline-block">
                            <h1>${card.symbol}</h1>
                        <span>
                        </div>`;
        body.innerHTML = `${body.innerHTML}<br>${cardDIV}`;
    };

}


function Card(symbol, color, width){
    this.symbol = symbol;
    this.color = color;
    this.width = width;
    this.height = width*(3.5)
}

function Randomizer(){
    this.randomize = function(max, min){
        rand = Math.random();
        return parseInt( rand*(max-min) +min );
    };
}