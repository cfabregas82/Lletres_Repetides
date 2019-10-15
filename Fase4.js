//exercici 8//
function calculadora(operador, valor1, valor2){
if (operador == "suma"){
    return "El resultado de la suma entre " +valor1+ " y " +valor2+ " da como resultado " +(parseInt(valor1) + parseInt(valor2));
} 
else if (operador == "resta"){
    return "El resultado de la resta entre " +valor1+ " y " +valor2+ " da como resultado " +(parseInt(valor1)-parseInt(valor2));
}    
else if (operador == "multipl"){
    return "El resultado de la multiplicación entre " +valor1+ " y " +valor2+ " da como resultado " +valor1*valor2;
}
}
alert (calculadora("resta",20,5))