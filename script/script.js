let contenedor = document.querySelector('div');



// ******** CONDICIONALES IF/ELSE **************

// let nota = Number(prompt("Ingresa tu calificación"));

// if ((nota >= 3) && (nota <= 5)) {
//     alert("Estas aprobado");
// } else if((nota >= 0) && nota <= 2.99 ){
//     alert("Estas reprobado");
// } else {
//     alert("Datos inválidos")
// }




// ******** CONDICIONAL SWITCH CASE  **************

// let mes = Number(prompt("Ingresa el numero de un mes"));

// switch(mes){
//     case 1:
//         alert("Enero");
//         break;

//     case 2: 
//         alert("Febrero");
//         break;

//     case 3:
//          alert("Marzo");
//         break;

//         default: 
//         alert("Opcion invalida")

// }



// ******** BUCLE WHILE  **************

// let contador = 1;
// let estudiantes = Number(prompt("Ingresa el numero de estudiantes"))

// while (contador <= estudiantes) {
//     let edad = Number(prompt("Ingresa tu edad"));

//     console.log("Edad del estudiante numero " + contador + ", " + edad);

//     contador = contador + 1
// }




// ******** BUCLE FOR  **************

// for(let i = 1; i<=10; i++  ){
//     console.log("Esta es la iteración n° " + i);
// }


// ******** EJERCICIO CON BUCLES  **************

// EJERCICIO 1 Escribir un programa que pregunte al usuario su edad y muestre por. 
// pantalla todos los años que ha cumplido (desde 1 hasta su edad).
// let edad = Number(prompt("Por favor ingresa tu edad"));

// for (let i = 1; i <= edad; i++) {

//     contenedor.innerHTML += `
//        <h2>Cumpleaños n° ${i}</h2>
//     `
// }



// EJERCICIO 2 Escribir un programa que pida al usuario un número 
// positivo y muestre por pantalla la cuenta atrás desde ese
// número hasta cero.

// let num = Number(prompt("Ingresa un número"));

// while(num <= 0){
//     alert("Numero invalido");
//     num = Number(prompt("Ingresa otro número"));
// }

// for(let i = num; i >= 0; i-- ){
//     let tag = document.createElement('h2');
//     tag.textContent = i;
//     contenedor.appendChild(tag) 
// }



// EJERCICIO 3 Escribir un programa que muestre lo que el usuario ingresó
// mediante el promt hasta que el usuario escriba “salir”.
// let palabra = prompt("Ingresa una palabra");

// while(palabra !== "salir"){
//    contenedor.innerHTML += `
//      <h2>${palabra}</h2>
//    `
//     palabra = prompt("Ingresa una palabra");
// }


// EJERCICIO 4 Escribir un programa que muestre por pantalla la tabla de
// multiplicar del 1 al 10.

// for(let i = 1; i<=10; i++){
//    let resultado = 1*i;
//     contenedor.innerHTML += `
//         <h2>1 x ${i} = ${resultado}</h2>
//     `
// }



//        ************* FUNCIONES ******************

// function sumarNums(a,b){
//    let resultado = a + b;
//    return resultado;
// }

// let funcionConRetorno = sumarNums(1, 3);

// console.log(sumarNums(1, 3))


// function showName(lastNameU, nameU){
//     alert("Hola, mi nombre es  " + nameU + " y mi apellido es " + lastNameU);
// }


// sumarNums(15, 9);
// sumarNums(10, 20);

// showName("Tovar", "Gustavo");

// ******** EJERCICIO BUCLES Y FUNCIONES  **************

// for(let i = 1; i<=10; i++){
//     let casa = prompt("Por favor ingresa tu nombre");
//     let perro = prompt("Por favor ingresa tu apellido");

//     showName(casa, perro)
// }

// ******** EJERCICIO DE LA GUÍA  ************** 

// let hora = Number(prompt("Por ingresa el número de horas que trabajaste"));
// let totalPagar = 0;
// let horasExtra = 0
// let VALOR_HORA= 16000;

// if(hora > 40){
//     horasExtra = hora-40;
//     totalPagar = (horasExtra*20000) + (40*VALOR_HORA);
 
// } else {
//     totalPagar = hora * VALOR_HORA;
// }

// contenedor.innerHTML = `
//     <h1>El total a pagar es de ${totalPagar}</h1>
// `










