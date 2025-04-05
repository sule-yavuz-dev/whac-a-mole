let currMoleTile;
let currPlantTile;



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
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}
function setMole(){
    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src="./piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}