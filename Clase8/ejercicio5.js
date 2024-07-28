/*
un programa que pida números hasta que se teclee un 0, mostrar
la suma de todos los números introducidos.
*/
let suma=0;

function sumar(){
    let n1 = prompt("Ingresar un número");
    n1 = Number(n1);
    if(n1!=0){
        suma+=n1;
        sumar();
    }else if(n1==0){

        alert("la suma es: " + suma);
     //   sumar();
    }
}