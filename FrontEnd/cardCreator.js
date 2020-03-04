function CardCreator(){

    this.createCard = (symbol, color) => {
        var body = document.querySelector("body");
        var style = `height: 35vh; width: 10vw; font-size: 3rem; font-family: 'Fira Code', 
                    monospace; line-height: 10vh; text-align: center; border-radius: 1rem; 
                    background-color: #000000; color: ${color};`;
        var cardDIV = `<div id="card" style="${style}" >
                        <span style="vertical-align: middle; display: inline-block">
                            <h1>${symbol}</h1>
                        <span>
                        </div>`;
        body.innerHTML = `${body.innerHTML}<br>${cardDIV}`;
    };

}