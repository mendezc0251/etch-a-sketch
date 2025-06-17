const resizeButton = document.querySelector("button")
let area = 256
let perimeter = Math.sqrt(area)
resizeButton.addEventListener("click", (event)=>{
    area = Number(prompt("How many pixels would you like on each side of your canvas?(100 MAX)"))**2
    const divContainer = document.querySelector(".grid-container")
    divContainer.style.minHeight = `${perimeter}"px"`
    divContainer.style.maxWidth = `${perimeter}"px"`
})
 
const divContainer = document.querySelector(".grid-container")
divContainer.style.height = `$(perimeter)"px"`
divContainer.style.width = `$(perimeter) "px"`

for(i=1;i<=area;i++){
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