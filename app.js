const cuadro1 = document.getElementById("Cuadro1");
const cuadro2 = document.getElementById("Cuadro2");


function sumar(){
    let num1 = parseFloat(cuadro1.value);
    let num2 = parseFloat(cuadro2.value);
    let resultado = num1 + num2;
    if(!(isNaN(resultado))){
        alert("El resultado es "+resultado);
    }
}
function restar(){
    let num1 = parseFloat(cuadro1.value);
    let num2 = parseFloat(cuadro2.value);
    let resultado = num1 - num2;
    if(!(isNaN(resultado))){
        alert("El resultado es "+resultado);
    }
}
function multiplicar(){
    let num1 = parseFloat(cuadro1.value);
    let num2 = parseFloat(cuadro2.value);
    let resultado = num1 * num2;
    if(!(isNaN(resultado))){
        alert("El resultado es "+resultado);
    }
}
function dividir(){
    let num1 = parseFloat(cuadro1.value);
    let num2 = parseFloat(cuadro2.value);
    let resultado = num1 / num2;
    if(!(isNaN(resultado))){
        alert("El resultado es "+resultado);
    }
}