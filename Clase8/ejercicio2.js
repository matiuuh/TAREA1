/*
un programa que lea un número e indicar si es postivo o negativo.
el procesoo se repetirá hasta que se introduzca un 0.
*/

function numero(){
    let n1 = prompt("Ingresar número: ");
    N1 = Number(n1);
    if(n1>0){
        alert("el número es positivo");
        numero();
    }else if(n1<0){
        alert("el número es negativo");
        numero();
    }else if(n1==0){
        alert("se ingresó 0 (cero)");
    }
}