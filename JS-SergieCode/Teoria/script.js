var nombreDeLaVariable;
let nombreDeVariable;
const nombreVariable = "Curso de JavaScript";

/*  EN ESTOS CASOS SE PUEDEN REASIGNAR VALORES */

nombreDeLaVariable = "Pedro";
nombreDeLaVariable = "Ricardo";
nombreDeLaVariable = "Lucia";
nombreDeLaVariable = "Maria";

nombreDeVariable = "Nombre";
nombreDeVariable = "Apellido";
nombreDeVariable = "Dato";

// USO DEL SCOOPE
//  el scope es el campo donde se puede usar la variable
// como por ejemplo mi variable var puede ser usado en todo lado, entonces ese es su scop, puedo decir
//que la palabra reservada no se debe usar y solo el let  siendo asi que el led
// si  creo una variable con let dentro de una funcion solo se podra usar esta variable dentro de esta funcion
let x = 5;
let y = x;

//lo que pasa aqui es que y apunta a la misma direccion de memoria que x, entonces si se alterra y se altera x

//NUMBER Y STRING
let variableNumber = 10;

//string
let variableString = "texto";
// "", '', ``
variableString = `data valor ${variableNumber}`;

/* UNA FUNCION DECLARADA---> Tiene HOISTING */
function sumar(a, b) {
  return a + b;
}

/*  ESTA ES UNA FUNCION EXPRESADA----> NOO tiene hoisting */
const suma = function (a, b) {
  //se asigna una funcion anonima a una variable
  return a + b;
};

/*   ESTA ES UNA FUNCION FLECHA(ARROW FUNCTIONS)  es la mas consisa y simplificada */
/* NO TIENE HOISTING */
const sumarValores = (a, b) => {
  //las funciones flechas son anonimas y son expresiones
  return a + b;
};
const sumarDatos = (a, b) => a + b; //por ser muy corta no es necesario usar llaves y el return
//El return IMPLICITO se usa sin llaves, porque si usas llaves indica que usaras un return
//entonces no usar llaves cuando vas hacer un return implicito

//document.getElementById("number").innerHTML = "NUEVO ELEMENTO AGREGADO";

/* FUNCION RECURSIVA  */

const factorial = (n) => {
  if (n <= 1) return 1; //condicion base sirve para terminar la recursividad
  return n * factorial(n - 1);
};
factorial(4);

// 4* factoria(3)
//3*  factorial (2)
//2* factorial(1)
//1

function factorial2(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial2(n - 1);
}

//FUNCION DECLARADA[FUNCTION-DECLARATION]
function sumar1(a, b) {
  return a + b;
}
//FUNCION EXPRESADA[FUNCTION-EXPRESSION]
const sumar2 = function (a, b) {
  return a + b;
};
//FUNCION FLECHA[ARROW-FUNCTION]

const sumar3 = (a, b) => {
  return a + b;
};

sumar3(4, 5);

/* CREACION DE OBJETOS */

//......... Creacion de un objeto con un metodo dentro de nombreCompleto
//se puede considerar que es una estructura de datos
const person = {
  nombre: "Juan",
  apellido: "Ayala",
  id: 1555,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
    //usamos el this porque nos referimos a este objeto, es una buena practica esto
    // y asi evitamos problemas
  },
};
person.nombre = "Daniel"; //por mas que sea constante se puede modificar igual que en el array
person.nombre;
person.apellido; //llamando a la propiedad del objeto
person.nombreCompleto(); //llamando al metodo del objeto

//console.log(person.nombreCompleto());
//console.log(person["nombre"]);
//.....Creacion de un objeto normal
const user = {
  nombre: "Das",
  apellido: "Nose",
  id: 222,
  colore: "negro",
  hijos: ["juan", "daniel", "dudu"],
};

//otra forma de llamar es
user["nombre"]; // nos da el valor de Das, esta es otra forma de llamar al valor

//console.log(user.hijos);// aqui nos muestra todos los hijos del usuario
//console.log(user.hijos[0]);//nos muestra el primer hijo dado

//==========     AHORA VEMOS LOS EVENTOOS  ==============

// Aparte del onelclick hay muchos mas eventos para cada momento
function mostrar() {
  document.getElementById("seleccionable").innerHTML = Date();
}
/*         ESTA ES OTRA FORMAA
 const boton = document.querySelector(".seleccionable");
boton.addEventListener("click", () => {
  boton.innerHTML = Date();
}); */
/*
//  =======================     STRINGS    ===============================
        //--- Primer ejemplo
        let variable=`pedro`;  se le llama Backtics
        let string =`Cadena de texto ${variable}`;
        //-----Segundo ejemplo

        let string2='let\'s do it'/* si deseas usar una comilla al centro como para el ingles
        debes usar la barra invertida antes de esa comilla como el " Let\'s "          

        //-----Tercer ejemplo
        // Nosotros podemos usar lo mismo \n para salto de linea, \t para tabular, \b para quitar un espacio  anterior
        // cuando haces un string no puedes usar enter para un salto de linea

        let contadorLetra="murcielago";//se considera que es un array de caracteres, tmabien se cuenta espacios
        console.log(contadorLetra.length);//10----- el \b,\n\t   se cuenta como un espacio mas seria 11


        ///============ METODOS DE STRING========= 
           //------slice(comienzo,final) se cuenta desde 0 a 1 antes del valor final
           let texto="0123456789";
           let resultado=texto.slice(4,7);//456
           ------resultado= texto.substring(4,7);//456
           console.log(resultado);

            //----replace("palabra a buscar","nuevo valor de ese contenido")
            let texto2="La educacion es importante en el Peru";
            resultado=texto2.replace("Peru","en el Mundo");//aqui se cambia a Peru, por "en el Mundo"
           resultado=texto2.toUpperCase();//convierte todo a MAYUSCULA
            //-----resultado=texto2.toLowerCase();//convierte todo a MINUSCULA
            let texto4="nada podemos";
            let texto5=" Pero lo intentamos";
            resultado=texto4+texto5;// es una forma de contatenar pero hay otra
            resultado = texto4.concat(texto5).toUpperCase().slice(4,12);//se puede usar varios metodos
                console.log(resultado);
            
                resultado =resultado.trim();// hay trimStart() para el epacio de inicion o trinEnd() para el espacio del final
                console.log(resultado);
            
               //USO DEL charAt(posicion);se puede decir que es lo mismo texto[posicion];
               resultado=texto5.charAt(3);

               */

const texto =
  "Este texto te lo manda el backend. Este texto es importante. Dividi el texto";

const resultado = texto.split("."); // si el split esta vacio, lo separa letra por letra
// el resultado se vuelve en una variable que contiene un array
//este array contiene valores que esta separado por puntos por ejemplo
//cada string que esta antes de un punto(.), es guardada en una posicion
//puede ser por un punto o por cualquier valor
console.log(resultado);
