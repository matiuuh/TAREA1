/*
Elaborar un programa que permita, trabajar con los saldos de 2 cuentas bancarias,
permitirá sumar valores a los saldos y deberá desplegar consulta de saldos.
*/

class Cuenta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    sumarSaldo() {
        let abono = prompt("Ingrese abono: ");
        abono = Number(abono);
        if (!isNaN(abono)) {
            this.saldo += abono;
            alert("El nuevo saldo es de " + this.saldo);
        } else {
            alert("Por favor ingrese un número válido.");
        }
    }

    consultaSaldo() {
        alert("Saldo de la cuenta: " + this.saldo);
    }
}

function obtenerSaldoInicial(mensaje) {
    let saldo = prompt(mensaje);
    saldo = Number(saldo);
    if (isNaN(saldo)) {
        alert("Por favor ingrese un número válido.");
        return 0;  // Default to 0 if input is invalid
    }
    return saldo;
}

let saldoInicialCuenta1 = obtenerSaldoInicial("Ingrese un saldo para la cuenta 1: ");
let cuenta1 = new Cuenta(saldoInicialCuenta1);

let saldoInicialCuenta2 = obtenerSaldoInicial("Ingrese un saldo para la cuenta 2: ");
let cuenta2 = new Cuenta(saldoInicialCuenta2);

cuenta1.sumarSaldo();
cuenta1.consultaSaldo();
cuenta2.sumarSaldo();
cuenta2.consultaSaldo();
