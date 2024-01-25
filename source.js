const grid = document.createElement("div");
grid.id = "grid-body";

for(let i = 0; i<16; i++){
    const row = document.createElement("div");
    row.className = "grid-row";
    for(let j = 0; j<16; j++){
        const box = document.createElement("div");
        box.addEventListener("mouseover", (e) =>{

            setColor(e.target);

        })
        box.className = "grid-box";
        row.appendChild(box);
    }
    grid.appendChild(row);
}

function setColor(elem){
    console.log(elem.style.backgroundColor);
    if(elem.style.backgroundColor == ""){
        const rValue = Math.round(Math.random()*255);
        const gValue = Math.round(Math.random()*255);
        const bValue = Math.round(Math.random()*255);
        elem.style.backgroundColor = "rgb(" + rValue + "," + gValue + "," + bValue + ")";
        elem.style.opacity = "0.1";
    }
    else{
         let opacity = parseFloat(elem.style.opacity)+0.1;
         if(opacity>1)opacity = 1;
         elem.style.opacity = opacity.toString();
    }
}

function enterGridSize(){
    let gridSize = parseInt(prompt("Please enter number for grid size from 1 to 100"));
    while(Number.isNaN(gridSize) || gridSize<1 || gridSize>100){
        gridSize = parseInt(prompt("Invalid entry. Please enter number for grid size from 1 to 100"));
    }
    resizeGrid(gridSize);
}

function resizeGrid(gridSize){
    const currGrid = document.querySelector("#grid-body");
    currGrid.remove();
    const newGrid = document.createElement("div");
    newGrid.id = "grid-body";
    for(let i = 0; i<gridSize; i++){
        const row = document.createElement("div");
        row.className = "grid-row";
        for(let j = 0; j<gridSize; j++){
            const box = document.createElement("div");
            box.addEventListener("mouseover", (e) =>{
                
                setColor(e.target);
                
            })
            box.className = "grid-box";
            row.appendChild(box);
        }
        newGrid.appendChild(row);
    }
    document.body.appendChild(newGrid);
}

let sizeBtn = document.createElement("button");
sizeBtn.innerText = "Resize Grid"
sizeBtn.addEventListener("click", () =>{
    enterGridSize();
});



document.body.appendChild(sizeBtn);
document.body.appendChild(grid);
