// Array
/*const array = ["Curso HTML", "Curso CSS", "Curso JS"];
        const array2= new Array(5);//creamos un array vacio con 5 espacios vacios
        array2[0]='Curso de HTML';
        array2[1]='Curso de CSS';
        array2[2]='Curso de JS';
        array2[3]=123456;
        //array2[4]={nombre:'juan'};---> este es un objeto
        //console.log(array2);//si hago console.log(array[4])// nos da un valor de undefined
        //array2.length  nos da el tamaño del arreglo el total
        //document.getElementById('seleccionable').innerHTML=array2;

        //const arrayEjemplo=[5,8,9,6,1];
        const arrayEjemplo=['Despertarse','Comer','Estudiar','Dormir','Jugar'];
            ------  console.log(arrayEjemplo.sort());//Es para ordenar numeros y por letras
        console.log(arrayEjemplo[arrayEjemplo.length-1]);//es para ingresar el ultimo elemento

        let texto='';
        for (let index = 0; index < arrayEjemplo.length; index++) {
            texto+= "<li>"+arrayEjemplo[index]+"</li>";
            
        }
        document.getElementById('seleccionable').innerHTML=texto;//me agrega 5 li con estas caracteristicas
    */
/*   EJEMPLO DE ARRAY PARA STRING
        let array=['Manzana','Pera','Banana','Naranja','Manzana','Fresa'];
        const resultado=array.filter(x=>x=='Manzana');//recorre el array y guarda los valores como array en resultado
        console.log(resultado);*/
            /*
            const array = [
              { nombre: "Pedro", apellido: "Gonzalez" },
              { nombre: "Maria", apellido: "Gonzalez" },
              { nombre: "Lucia", apellido: "Gonzalez" },
              { nombre: "Ricardo", apellido: "Perez" },
              { nombre: "Glottis", apellido: "Juarez" },
              { nombre: "Fernanda", apellido: "Fernandez" },
            ];
            // me crea el un arreglo con todos los objetos con el apellido Gonzalez
            const resultado=array.filter(x=>x.apellido=='Gonzalez');
            console.log(resultado);
            for (let index = 0; index < resultado.length; index++) {
                const element = resultado[index];
                console.log(element.nombre);
            }*/
//=========================    DATE  ==========================



//=========================    OBJETO MATH ====================
        //  aqui vimos varias propiedades de Math

//======================  IF / ELSE IF / ELSE ==================
                //luego de esto se hace el proyecto 2 



                
//=========================  FOR-- WHILE--DO WHILE   ====================
            /*
               //============   FOR   ====================
            let tecnologias=['HTML','CSS','JAVASCRIPT','REACT','ANGULAR'];

            let seleccionable=document.querySelector('#seleccionable');
            let texto='';
            for (let index = 0; index < tecnologias.length; index++) {
               texto+=tecnologias[index]+', ';
               seleccionable.textContent=texto;
            }
                //========     FOR  -  OF   =================================
                //cada item es cada elemento como el foreach en #
                for(item of tecnologias){
                    console.log(item);
                }
                //========     FOR  -  IN   =================================
                
                const alumno={
                    nombre:'Ricardo',
                    edad:25,
                    tecnologias:['HTML','CSS']
                }
                //Estamos recorriendo las claves de un objeto
                for(const key in alumno){
                    console.log(alumno[key])
                }
                
          //========     FOR  -  EACH   =================================
          
          let numeros=[1,2,3,4,5,6,7,8,9];
          numeros.forEach(numero=>{
              console.log(numero);
            })
            let cards=document.querySelectorAll('.cards');
            cards.forEach(card=>{
                card.addEventListener('click',(e)=>{
                    console.log(e.currentTarget.id)
                })
            })
            
            */


            //==============     SET     Y    MAPS   =====================
