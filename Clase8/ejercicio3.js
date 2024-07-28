/*
un programa que lea números hasta que se introduzca un 0, para cada
uno indicar si es par o impar.
*/

function numero(){
    let n1 = prompt("Ingresar número: ");
    N1 = Number(n1);
    if(n1==0){
        alert("el número es 0 (cero)");
    }else if(n1%2!=0){
        alert("el número es impar");
        numero();
    }else if(n1%2==0){
        alert("el número es par");
        numero();
    }
}