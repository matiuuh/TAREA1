/*Pedir tres números y mostrarlos ordenados de mayor a menor
*/

    // Pedir dos números al usuario
    let numeros = new Array(3);
    let aux=0;

    numeros[0] = parseFloat(prompt("Introduce el primer número:"));
    numeros[1] = parseFloat(prompt("Introduce el segundo número:"));
    numeros[2] = parseFloat(prompt("Introduce el tercer número:"));
    
    for(let i=0; i < numeros.length; i++){
        for(let j=0;j< numeros.length;j++){
            if(numeros[j] < numeros[j+1]){
                aux = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = aux;
            }
        }
    }

// Mostrar los números ordenados
console.log("Números ordenados de mayor a menor: " + numeros.join(", "));

for(let i=0; i< numeros.length;i++){
    console.log(numeros[i])
}