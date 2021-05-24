//Rectangulos color

const R1 = document.querySelector("#color1");
const R2 = document.querySelector("#color2");
const R3 = document.querySelector("#color3");
const R4 = document.querySelector("#color4");
const R5 = document.querySelector("#color5");

//Textos con codigos

const texto1 = document.querySelector("#textoColor1")
const texto2 = document.querySelector("#textoColor2")
const texto3 = document.querySelector("#textoColor3")
const texto4 = document.querySelector("#textoColor4")
const texto5 = document.querySelector("#textoColor5")

// document.addEventListener('DOMContentLoaded', darColor)

function darColor() {

    let color1A = Math.floor(Math.random()*256)
    let color1B = Math.floor(Math.random()*256)
    let color1C = Math.floor(Math.random()*256)
    
    let color2A = Math.floor(Math.random()*256)
    let color2B = Math.floor(Math.random()*256)
    let color2C = Math.floor(Math.random()*256)
    
    let color3A = Math.floor(Math.random()*256)
    let color3B = Math.floor(Math.random()*256)
    let color3C = Math.floor(Math.random()*256)
    
    let color4A = Math.floor(Math.random()*256)
    let color4B = Math.floor(Math.random()*256)
    let color4C = Math.floor(Math.random()*256)
    
    let color5A = Math.floor(Math.random()*256)
    let color5B = Math.floor(Math.random()*256)
    let color5C = Math.floor(Math.random()*256)
    
    
    
    R1.style = `background-color: rgb(${color1A}, ${color1B}, ${color1C});`;
    texto1.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color1A}, ${color1B}, ${color1C})</p> `;
    texto1.style = `opacity: 0.9; font-size: small;`
    
    R2.style = `background-color: rgb(${color2A}, ${color2B}, ${color2C});`;
    texto2.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color2A}, ${color2B}, ${color2C})</p> `;
    texto2.style = `opacity: 0.9; font-size: small;`

    R3.style = `background-color: rgb(${color3A}, ${color3B}, ${color3C});`;
    texto3.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color3A}, ${color3B}, ${color3C})</p> `;
    texto3.style = `opacity: 0.9; font-size: small;`

    R4.style = `background-color: rgb(${color4A}, ${color4B}, ${color4C});`;
    texto4.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color4A}, ${color4B}, ${color4C})</p> `;
    texto4.style = `opacity: 0.9; font-size: small;`

    R5.style = `background-color: rgb(${color5A}, ${color5B}, ${color5C});`;
    texto5.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color5A}, ${color5B}, ${color5C})</p> `;
    texto5.style = `opacity: 0.9; font-size: small;`


  
}

// document.addEventListener(onclick, darColor())
