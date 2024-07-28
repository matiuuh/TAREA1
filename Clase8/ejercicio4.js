/*
realizar un juego para adivinar un número, para ello debe pedir
un número N, y luego ir pidiendo números indicados "mayor" o "menor"
con respecto a N. El proceso cuando el usuario acierta
*/

function adivinar(){
    let n1 = prompt("Ingresar un número");
    if(n1>14){
        alert("menor");
        adivinar();
    }else if(n1<14){
        alert("mayor");
        adivinar();
    }else{
        alert("Acertaste")
    }
}