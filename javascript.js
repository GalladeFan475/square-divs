//Create Text
const textDiv = document.createElement("div");
const text = document.createElement("h1");
text.textContent = "Etch-a-Sketch!"
textDiv.style.display = "flex";
textDiv.style.justifyContent = "center";
textDiv.style.alignItems = "center";
text.style.padding = "20px";
text.style.fontFamily = "Arial, sans-serif";
text.style.fontSize = "50px";
text.style.fontWeight = "bold";
text.style.color = "yellow";
text.style.backgroundColor = "black"; 
text.style.fontStyle = "italic";
textDiv.appendChild(text);
//-----------------------------------

//Create Container to store squares
const containerDiv = document.createElement("div");
const container = document.createElement("div");
container.style.width = "600px";
container.style.height = "600px";
containerDiv.appendChild(container);
containerDiv.style.display = "flex";
containerDiv.style.justifyContent = "center";
containerDiv.style.alignItems = "center";
//------------------------------

//Create Button
const btnDiv = document.createElement("div");
const btn = document.createElement("button");
btn.style.padding = "20px";
btn.style.margin = "30px";
btn.textContent = "Press me!";
btnDiv.appendChild(btn);
btnDiv.style.display = "flex";
btnDiv.style.justifyContent = "center";
btnDiv.style.alignItems = "center";
//-------------------------------

//Click Button
btn.addEventListener("click", () =>{
    let condition = parseInt(prompt("How many squares do you want? "));

    if (isNaN(condition) || condition <= 0) {
        alert("Please enter a valid number!");
        return;
    }

    container.innerHTML = "";

    for(let i = 0; i < condition; i++){
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "center"; 
        row.style.alignItems = "center";
    
        for(let j = 0; j < condition; j++){
            const newDiv = document.createElement("div");
            newDiv.style.width = `${100 / condition}vw`;
            newDiv.style.aspectRatio = "1 / 1";
            newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                            ${Math.floor(Math.random() * 256)}, 
                                            ${Math.floor(Math.random() * 256)})`;
            newDiv.style.opacity = "0.1";
            newDiv.style.border = "1px solid black";
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.opacity = Number(newDiv.style.opacity) + 0.1;  
                newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                            ${Math.floor(Math.random() * 256)}, 
                                            ${Math.floor(Math.random() * 256)})`
            })
            row.appendChild(newDiv);
        }
        container.appendChild(row);
    }
})
//--------------------------------------

//Adding Divs to body
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.appendChild(textDiv);
document.body.appendChild(btnDiv);
document.body.appendChild(containerDiv);
//----------------------------------------