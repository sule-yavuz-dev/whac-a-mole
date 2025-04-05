



window.onload = function(){
    setGame();
}

function setGame(){
    for (let i = 0; i < 9; i++){
       // <div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id=i.toString();
        document.getElementById("board").appendChild(tile);
    }
}