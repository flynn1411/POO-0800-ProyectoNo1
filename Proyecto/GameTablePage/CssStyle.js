function CssContent(){

    this.getStyleText = function(temp,symbol){
        var size = "130%",
            lineH = "340%";
        
        if(symbol == "change color"){size="120%", lineH="200%"}{};
        if(temp == 2){size = "0";}

        let styleFont = `
            font-size:${size};
            font-family: 'Shrikhand'; 
            text-align: center;
            vertical-align: middle;
            color:black; 
            transform: rotate(-39deg);
            line-height:${lineH};
            `;
        return styleFont;
    }                              
}