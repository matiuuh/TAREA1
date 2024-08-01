/*
Crear un array unidimensional llamado numbers que contenga los números del 1 al 5
añade el número 6 al final del array
elimina el primer elemento del array
recorrer el array e imprime cada número en la consola
*/

//se crea el array de 5 espacios
let numbers = [5];

//se llena el array con los números del 1 al 5
numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//se añade el número 6 al final
numbers.push(6);
console.log(numbers);

//se elimina el primer número del array
numbers.shift();
console.log(numbers);

//se itera el array para imprimir su contenido
for(let i = 0; i< numbers.length; i++){
    console.log(" elemento: " + numbers[i])
}