const readline = require('readline');

// Crear el tablero de 8x8
let filas = 8;
let columnas = 8;
let tablero = new Array(filas);
for (let i = 0; i < filas; i++) {
    tablero[i] = new Array(columnas);
}

// Función para colocar asteriscos en posiciones aleatorias
function colocarAsteriscos(tablero, filaInicio, filaFin, numAsteriscos) {
    for (let i = filaInicio; i <= filaFin; i++) {
        let posiciones = new Set(); // Usamos un Set para evitar posiciones duplicadas
        while (posiciones.size < numAsteriscos) {
            let columnaRandom = Math.floor(Math.random() * columnas);
            posiciones.add(columnaRandom);
        }
        posiciones.forEach(columna => {
            tablero[i][columna] = '*';
        });
    }
}

// Filas 1 y 2 (índices 0 y 1): 5 posiciones aleatorias con asteriscos
colocarAsteriscos(tablero, 0, 1, 5);

// Filas 3 y 4 (índices 2 y 3): 5 posiciones aleatorias con asteriscos
colocarAsteriscos(tablero, 2, 3, 5);

// Filas 5 a 8 (índices 4 a 7): 3 posiciones aleatorias con asteriscos
colocarAsteriscos(tablero, 4, 7, 3);

// Configuración de readline para solicitar entradas
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para solicitar números al usuario
function obtenerNumerosUsuario(callback) {
    let numeros = [];
    let contador = 0;

    function pedirPosicion() {
        if (contador < 20) {
            rl.question(`Ingrese la fila (0 a 7) para la posición ${contador + 1}: `, fila => {
                rl.question(`Ingrese la columna (0 a 7) para la posición ${contador + 1}: `, columna => {
                    let filaNum = parseInt(fila);
                    let columnaNum = parseInt(columna);
                    
                    // Validar que las entradas sean números válidos
                    if (isNaN(filaNum) || isNaN(columnaNum) || filaNum < 0 || filaNum >= filas || columnaNum < 0 || columnaNum >= columnas) {
                        console.log("Entrada no válida. Intente de nuevo.");
                    } else {
                        numeros.push({ fila: filaNum, columna: columnaNum });
                        contador++;
                    }

                    pedirPosicion();
                });
            });
        } else {
            rl.close();
            callback(numeros);
        }
    }

    pedirPosicion();
}

// Verificar las posiciones ingresadas por el usuario
function verificarPosiciones(tablero, numerosUsuario) {
    numerosUsuario.forEach((pos, index) => {
        if (tablero[pos.fila][pos.columna] === '*') {
            console.log(`Cayó en la trampa en la posición ${index + 1}: fila ${pos.fila}, columna ${pos.columna}`);
        }
    });
}

// Obtener números del usuario y verificar posiciones
obtenerNumerosUsuario(numerosUsuario => {
    verificarPosiciones(tablero, numerosUsuario);

    // Mostrar el tablero (opcional)
    console.log("Tablero final:");
    for (let i = 0; i < filas; i++) {
        let fila = "";
        for (let j = 0; j < columnas; j++) {
            fila += (tablero[i][j] === '*') ? '*' : ' ';
        }
        console.log(fila);
    }
});
