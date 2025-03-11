const container = document.createElement("div");
document.body.style.margin = "0";
document.body.style.padding = "0";

for(let i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "center"; 
    row.style.alignItems = "center";

    for(let i = 0; i < 16; i++){
        const newDiv = document.createElement("div");
        newDiv.style.width = `${100 / 16}vw`;
        newDiv.style.aspectRatio = "1 / 1";
        newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                        ${Math.floor(Math.random() * 256)}, 
                                        ${Math.floor(Math.random() * 256)})`
        row.appendChild(newDiv);
        container.appendChild(row);
    }
}
document.body.appendChild(container);

