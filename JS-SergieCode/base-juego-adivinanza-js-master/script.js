/*   //======   MI CODIGO   
 let numberIngresado = document.querySelector("#numeroEntrada");
const comprobarBtn = document.querySelector("button");

let mensaje = document.querySelector("#mensaje");
let valor;

comprobarBtn.addEventListener("click", () => {
    
    valor=valorGenerado();
   
  if (numberIngresado.value == valor) {
    mensaje.innerText = "Ah ganado";
    valor=valorGenerado();
  } else {
    mensaje.innerText = "Vuelva a intentar";
    
  }
  console.log(valor);
});

const valorGenerado = () => {
  return Math.floor(Math.random() * 5);
};*/

//Aca el juego seleccion un numero al azar para adivinar
let numeroAzar = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");

function chequearResultado() {
  let numeroIngresado = parseInt(numeroEntrada.value);
  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    //el isNaN(numeroIngresado)  sino es un numero
    mensaje.textContent = "Por favor introduce un numero entre 1 al 100";
    return; // solo es para funciones
  }
  if(numeroIngresado===numeroAzar){
    mensaje.textContent='Felicitaciones  HAZ ADIVINADO';
    mensaje.style.color='green';
    numeroEntrada.disabled=true;
  }else if(numeroIngresado<numeroAzar){
    mensaje.textContent='Mas alto,,,,,, El numero es mayor al que dijiste'
    mensaje.style.color='red';
  }else{
    mensaje.textContent='Mas bajo ...... el numero es menos al que haz dicho';
    mensaje.style.color='blue';
  }
  console.log(numeroAzar);
}
