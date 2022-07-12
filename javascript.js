const R1 = document.querySelector("#color1");
const R2 = document.querySelector("#color2");
const R3 = document.querySelector("#color3");
const R4 = document.querySelector("#color4");
const R5 = document.querySelector("#color5");

const T1 = document.querySelector("#textoColor1")
const T2 = document.querySelector("#textoColor2")
const T3 = document.querySelector("#textoColor3")
const T4 = document.querySelector("#textoColor4")
const T5 = document.querySelector("#textoColor5")

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
