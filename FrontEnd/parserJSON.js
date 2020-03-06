

json = {
    "sessionId" : {
        "putOnDeck" : [
            {"color": "yellow", "symbol" : "5"}
        ],

        "Player1sDeck" : [
            {"color": "blue", "symbol": "5"},
            {"color": "blue", "symbol": "6"},
            {"color": "green", "symbol": "3"},
            {"color": "red", "symbol": "7"},
            {"color": "red", "symbol": "Reverse"},
            {"color": "yellow", "symbol": "Reverse"},
            {"color": "green", "symbol": "3"}
        ],

        "Player2sDeck" : [
            {"color": "yellow", "symbol": "3"},
            {"color": "red", "symbol": "+2"},
            {"color": "blue", "symbol": "4"},
            {"color": "blue", "symbol": "0"},
            {"color": "green", "symbol": "+2"},
            {"color": "yellow", "symbol": "8"},
            {"color": "green", "symbol": "9"}
        ],

        "grabDeck" : [
            {"color": "yellow", "symbol": "0"},
            {"color": "yellow", "symbol": "1"},
            {"color": "yellow", "symbol": "2"},
            {"color": "yellow", "symbol": "4"},
            {"color": "yellow", "symbol": "6"},
            {"color": "yellow", "symbol": "7"},
            {"color": "yellow", "symbol": "9"},
            {"color": "yellow", "symbol": "+2"},
            {"color": "yellow", "symbol": "R"},
            {"color": "yellow", "symbol": "Cancel"},
            {"color": "yellow", "symbol": "1"},
            {"color": "yellow", "symbol": "2"},
            {"color": "yellow", "symbol": "3"},
            {"color": "yellow", "symbol": "4"},
            {"color": "yellow", "symbol": "5"},
            {"color": "yellow", "symbol": "6"},
            {"color": "yellow", "symbol": "7"},
            {"color": "yellow", "symbol": "8"},
            {"color": "yellow", "symbol": "9"},
            {"color": "yellow", "symbol": "+2"},
            {"color": "yellow", "symbol": "R"},
            {"color": "yellow", "symbol": "Cancel"},
            {"color": "green", "symbol": "0"},
            {"color": "green", "symbol": "1"},
            {"color": "green", "symbol": "2"},
            {"color": "green", "symbol": "4"},
            {"color": "green", "symbol": "6"},
            {"color": "green", "symbol": "7"},
            {"color": "green", "symbol": "8"},
            {"color": "green", "symbol": "R"},
            {"color": "green", "symbol": "Cancel"},
            {"color": "green", "symbol": "1"},
            {"color": "green", "symbol": "2"},
            {"color": "green", "symbol": "4"},
            {"color": "green", "symbol": "5"},
            {"color": "green", "symbol": "6"},
            {"color": "green", "symbol": "7"},
            {"color": "green", "symbol": "8"},
            {"color": "green", "symbol": "9"},
            {"color": "green", "symbol": "+2"},
            {"color": "green", "symbol": "R"},
            {"color": "green", "symbol": "Cancel"},
            {"color": "red", "symbol": "0"},
            {"color": "red", "symbol": "1"},
            {"color": "red", "symbol": "2"},
            {"color": "red", "symbol": "3"},
            {"color": "red", "symbol": "4"},
            {"color": "red", "symbol": "5"},
            {"color": "red", "symbol": "6"},
            {"color": "red", "symbol": "8"},
            {"color": "red", "symbol": "9"},
            {"color": "red", "symbol": "Cancel"},
            {"color": "red", "symbol": "1"},
            {"color": "red", "symbol": "2"},
            {"color": "red", "symbol": "3"},
            {"color": "red", "symbol": "4"},
            {"color": "red", "symbol": "5"},
            {"color": "red", "symbol": "6"},
            {"color": "red", "symbol": "7"},
            {"color": "red", "symbol": "8"},
            {"color": "red", "symbol": "9"},
            {"color": "red", "symbol": "+2"},
            {"color": "red", "symbol": "R"},
            {"color": "red", "symbol": "Cancel"},
            {"color": "blue", "symbol": "1"},
            {"color": "blue", "symbol": "2"},
            {"color": "blue", "symbol": "3"},
            {"color": "blue", "symbol": "5"},
            {"color": "blue", "symbol": "7"},
            {"color": "blue", "symbol": "8"},
            {"color": "blue", "symbol": "9"},
            {"color": "blue", "symbol": "+2"},
            {"color": "blue", "symbol": "R"},
            {"color": "blue", "symbol": "Cancel"},
            {"color": "blue", "symbol": "1"},
            {"color": "blue", "symbol": "2"},
            {"color": "blue", "symbol": "3"},
            {"color": "blue", "symbol": "4"},
            {"color": "blue", "symbol": "5"},
            {"color": "blue", "symbol": "6"},
            {"color": "blue", "symbol": "7"},
            {"color": "blue", "symbol": "8"},
            {"color": "blue", "symbol": "9"},
            {"color": "blue", "symbol": "+2"},
            {"color": "blue", "symbol": "R"},
            {"color": "blue", "symbol": "Cancel"},
            {"color": "black", "symbol": "+4"},
            {"color": "black", "symbol": "+4"},
            {"color": "black", "symbol": "+4"},
            {"color": "black", "symbol": "+4"},
            {"color": "black", "symbol": "CC"},
            {"color": "black", "symbol": "CC"},
            {"color": "black", "symbol": "CC"},
            {"color": "black", "symbol": "CC"}
        ]
    }

};

deckArray = json["sessionID"]["putOnDeck"];

for (card in deckArray){
    card["color"];
    card["symbol"];
}