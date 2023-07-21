//lo esta desestructurando los objetos de la otra hoja from 'ruta' entonces lo podemos usar aqui
import { barcelona, roma, paris, londres } from "./ciudades.js";

/*Obtener los elementos del DOM ---> (Document Object Model) es una representacion estructurada de un documento HTML
 la interaccion permite modificar estructura,estilo o contenido en la pagina web de forma dinamica, el DOM se organiza como un arbol de nodo*/

let enlaces = document.querySelectorAll("a"); //consultamos todos los selectores que sean 'a'
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

//Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) { 
  enlace.addEventListener("click", function () {
    //remover el activo
    enlaces.forEach(function (enlace) { 
      enlace.classList.remove("active");
    });
    //agregamos al el active cuando corresponde
    this.classList.add("active"); //this se refiere al enlace
    
      //obtener el contenido
      let contenido = obtenerContenido(this.textContent);
      //mostrar contenido
      tituloElemento.innerHTML=contenido.titulo;
      subTituloElemento.innerHTML=contenido.subtitulo
      parrafoElemento.innerHTML=contenido.parrafo;
  });

});

function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona':barcelona,
    'Roma':roma,
    'París':paris,
    'Londres':londres
  };
  return contenido[enlace];
  //me retorna el un el valor de la clase seleccionada entonces retorna un objeto

}

/*  =========    MI PROPIO INTENTO 
let presionado = document.querySelectorAll("a");

presionado.forEach((boton) => {
  boton.addEventListener("click", () => {
    presionado.forEach((boton) => boton.classList.remove("active"));

    boton.classList.add("active");
   
  });
});*/
