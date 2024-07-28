
/**
un programa que lea y muestre un cuadrado , repetir el proceso hasta que
se introduzco un número negativo
 */


function elevar(){
    let n1 = prompt("Ingresar primer número");
    if(n1>=0){
        alert(n1**2);
        elevar();
    }else{
        alert("Se ingresó un negativo");
    }
}