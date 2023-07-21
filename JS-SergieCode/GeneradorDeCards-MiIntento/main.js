/*let data;
let numeroRedondeado;
do {
  let random = Math.random() * 10;
  numeroRedondeado = Math.floor(random);

  data = prompt("Ingrese un numero");

  data = Number(data);
  
  if (data === numeroRedondeado) {
    alert("El numero ingresado es correcto");
    break;
  }
  //la declaracion de una vaiable dentro de un bucle solo se puede usar dentro del bucle
  //asi que si quiero comparar este dato en el while no podre acceder al valor
  //entonces se puede decir que el scope va dentro de las 2 llaves {   }
} while (data !== numeroRedondeado);
*/

let container = document.querySelector(".products");
const buton = document.querySelector("button");

let cont = 0;
let string = "";
buton.addEventListener("click", () => {
  cont++;
  string += `<div class="product${cont} product1">
            <img src="./zapatilla.jpg" alt="">
            <div class="characters">
                <h4>Adidas ${cont}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Provident, quos!</p>
            </div>
        </div>`;
        container.innerHTML = string;
      const butonActual=document.querySelector(`.product${cont}`);
      butonActual.style.backgroundColor=generarColor();
      console.log(cont);
});

function generarColor(){
  let valor=Math.floor(Math.random()*10);
  switch(valor){
    case 1:return'green';break;
    case 2:return'red';break;
    case 3:return'black';break;
    case 4:return'yellow';break;
    case 5:return'orange';break;
    default: return 'blue';
  }
}


