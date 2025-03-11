const container = document.createElement("div");
document.body.style.margin = "0";
document.body.style.padding = "0";

const btnDiv = document.createElement("div");
const btn = document.createElement("button");
btn.style.padding = "20px";
btn.style.margin = "30px";
btn.textContent = "Press me!";
btnDiv.appendChild(btn);
btnDiv.style.display = "flex";
btnDiv.style.justifyContent = "center";
btnDiv.style.alignItems = "center";

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
                                            ${Math.floor(Math.random() * 256)})`
            row.appendChild(newDiv);
        }
        container.appendChild(row);
    }
})


document.body.appendChild(btnDiv);
document.body.appendChild(container);
