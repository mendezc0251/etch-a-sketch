const resizeButton = document.querySelector("button")
let area = 256
let perimeter = Math.sqrt(area)
let canvasContainer = document.getElementById("canvas")
canvasContainer.style.minHeight = `${perimeter}px`
canvasContainer.style.maxWidth = `${perimeter}px`
let gridDiv = document.getElementsByClassName("grid-divs")

resizeButton.addEventListener("click", (event) => {
    area = Number(prompt("How many pixels would you like on each side of your canvas?(100 MAX)")) ** 2
    perimeter = Math.sqrt(area)
    canvasContainer.style.minHeight = `${perimeter}px`
    canvasContainer.style.maxWidth = `${perimeter}px`
    canvasContainer.innerHTML = ""
    for (i = 1; i <= area; i++) {
        const gridDiv = document.createElement("div")
        gridDiv.className = "grid-divs"
        const divContainer = document.querySelector("#canvas")
        divContainer.appendChild(gridDiv)
    }

    Array.from(gridDiv).forEach(div => {
        div.addEventListener("mouseover", (event) => {
            div.style.backgroundColor = "black"
        })
    })
})

for (i = 1; i <= area; i++) {
    const gridDiv = document.createElement("div")
    gridDiv.className = "grid-divs"
    const divContainer = document.querySelector("#canvas")
    divContainer.appendChild(gridDiv)
}

document.addEventListener("DOMContentLoaded", function () {
    Array.from(gridDiv).forEach(div => {
        div.addEventListener("mouseover", (event) => {
            div.style.backgroundColor = "black"
        })
    })
})