const grid = document.createElement("div");
grid.id = "grid-body";

for(let i = 0; i<16; i++){
    const row = document.createElement("div");
    row.className = "grid-row";
    for(let j = 0; j<16; j++){
        const box = document.createElement("div");
        box.addEventListener("mouseover", (elem) =>{
            console.log(elem.target);
            elem.target.style.backgroundColor = "blue";
            console.log(elem.target.style.backgroundColor);
        })
        box.className = "grid-box";
        row.appendChild(box);
    }
    grid.appendChild(row);
}


document.body.appendChild(grid);
