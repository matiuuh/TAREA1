/*Pedir dos números y mostrarlos ordenados de mayor a menor
*/
    // Pedir dos números al usuario
    let numero1 = parseFloat(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número:"));

    // Verificar si los números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, introduce números válidos.");
    } else {
        // Mostrar los números ordenados de mayor a menor
        if (numero1 > numero2) {
            console.log("Números ordenados: " + numero1 + ", " + numero2);
        } else {
            console.log("Números ordenados: " + numero2 + ", " + numero1);
        }
}