for(i=1;i<=8100;i++){
    const gridDiv = document.createElement("div")
    gridDiv.className = "grid-divs"
    const divContainer = document.querySelector(".grid-container")
    divContainer.appendChild(gridDiv)
}

document.addEventListener("DOMContentLoaded", function(){
    const gridDiv = document.getElementsByClassName("grid-divs")
    Array.from(gridDiv).forEach(div => {
        div.addEventListener("mouseover",(event)=>{
            div.style.backgroundColor = "black"
        })
    })
})