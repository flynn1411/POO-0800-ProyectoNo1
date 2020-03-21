function CssContent(){
    
    this.getStyleCard = function(color,nameImage){
        var fontSize = "100%";
        
        if(nameImage == "uno"){fontSize="0"};
        
        let style = `             
            background-color: ${color};
            border-radius: 12px;
            border: solid black ;
            cursor: pointer;
            display: block;  
            top: 19%;
            left: 60.25%;
            width: 4%;
            height: 45%;
            padding: 20px 20px;
            position: absolute;
            
            background-image:url('../Images/${nameImage}.png');
            background-size:130% 100%;
            background-repeat: no-repeat;
            background-attachment: absolute;
            background-position: center;
            opacity:1;
            animation:distributeCards 5s infinite;
            `;
        
        return style;
    }
    this.getStyleText = function(temp,symbol){
        var size = "130%",
            lineH = "340%";
        
        if(symbol == "change color"){size="120%", lineH="200%"}{};
        if(temp == "uno"){size = "0";}

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
    this.getStyle = function(){
        return styleCss;
    }                    
}