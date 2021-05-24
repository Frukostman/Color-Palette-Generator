//Rectangulos color

const R1 = document.querySelector("#color1");
const R2 = document.querySelector("#color2");
const R3 = document.querySelector("#color3");
const R4 = document.querySelector("#color4");
const R5 = document.querySelector("#color5");

//Textos con codigos

const T1 = document.querySelector("#textoColor1")
const T2 = document.querySelector("#textoColor2")
const T3 = document.querySelector("#textoColor3")
const T4 = document.querySelector("#textoColor4")
const T5 = document.querySelector("#textoColor5")

// function darColor() {

//     let color1A = Math.floor(Math.random()*256)
//     let color1B = Math.floor(Math.random()*256)
//     let color1C = Math.floor(Math.random()*256)
    
//     let color2A = Math.floor(Math.random()*256)
//     let color2B = Math.floor(Math.random()*256)
//     let color2C = Math.floor(Math.random()*256)
    
//     let color3A = Math.floor(Math.random()*256)
//     let color3B = Math.floor(Math.random()*256)
//     let color3C = Math.floor(Math.random()*256)
    
//     let color4A = Math.floor(Math.random()*256)
//     let color4B = Math.floor(Math.random()*256)
//     let color4C = Math.floor(Math.random()*256)
    
//     let color5A = Math.floor(Math.random()*256)
//     let color5B = Math.floor(Math.random()*256)
//     let color5C = Math.floor(Math.random()*256)
    
    
    
//     R1.style = `background-color: rgb(${color1A}, ${color1B}, ${color1C});`;
//     texto1.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color1A}, ${color1B}, ${color1C})</p> `;
//     texto1.style = `opacity: 0.9; font-size: small;`
    
//     R2.style = `background-color: rgb(${color2A}, ${color2B}, ${color2C});`;
//     texto2.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color2A}, ${color2B}, ${color2C})</p> `;
//     texto2.style = `opacity: 0.9; font-size: small;`

//     R3.style = `background-color: rgb(${color3A}, ${color3B}, ${color3C});`;
//     texto3.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color3A}, ${color3B}, ${color3C})</p> `;
//     texto3.style = `opacity: 0.9; font-size: small;`

//     R4.style = `background-color: rgb(${color4A}, ${color4B}, ${color4C});`;
//     texto4.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color4A}, ${color4B}, ${color4C})</p> `;
//     texto4.style = `opacity: 0.9; font-size: small;`

//     R5.style = `background-color: rgb(${color5A}, ${color5B}, ${color5C});`;
//     texto5.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${color5A}, ${color5B}, ${color5C})</p> `;
//     texto5.style = `opacity: 0.9; font-size: small;`

// }

function darColor(rectangulo, texto) {

    let colorA = Math.floor(Math.random()*256)
    let colorB = Math.floor(Math.random()*256)
    let colorC = Math.floor(Math.random()*256)
       
    rectangulo.style = `background-color: rgb(${colorA}, ${colorB}, ${colorC});`;
    texto.innerHTML = `<p class="fw-bolder text-center">RGB: <br> (${colorA}, ${colorB}, ${colorC})</p> `;
    texto.style = `opacity: 0.9; font-size: small;`
}

function darColorTodos() {

    var boton = document.querySelectorAll(".refresh");
    var i;

    for (i = 0; i < boton.length; i++) {
    boton[i].style = "display: block; position: relative;";
    }

    darColor(R1,T1)
    darColor(R2,T2)
    darColor(R3,T3)
    darColor(R4,T4)
    darColor(R5,T5)
}
