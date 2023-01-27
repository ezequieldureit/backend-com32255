function nombreDeLaFuncion (params){
    /*Cuerpo de la funcion, todas las instrucciones 
    internas que necesitamos que la funcion realice */
    let variableParaMiFuncion = 2;
    return variableParaMiFuncion;
    /*Con la palabra 'return' podemos MANDAR AFUERA DEL SCOPE alguna variable que 
    necesite en otra parte del codigo. */
}
/*EJEMPLO COMPLETO*/
function sumarDosNumeros(num1,num2){
    // resultado solo existe dentro de la funcion
    let resultado;
    resultado = num1 + num2;
    /*Cuando la funcion acabe, 'resultado' muere
    asi que hay qye mandarla afuera */
    return resultado;
}
// Mandamos a llamar la funcion con valores reales
let total = sumarDosNumeros(7,9);
console.log(total) // 16


/*Una funcion flecha es ANONIMA, quiere decir que NO tiene nombre, pero
puede asignarse a una variable para poder identificarse. */
const identificadorDeFuncion = (params) => {
    /*Cuerpo de la funcion, todas las instrucciones internas que necesitamos que la funcion realice */
    let variableParaMiFuncion = 2;
    return variableParaMiFuncion
    /*Con la palabra 'return' podemos MANDAR AFUERA DEL SCOPE alguna variable que necesite en otra parte del codigo.
    La funcion flecha cuenta con un return IMPLICITO.
     */
}
// EJEMPLO COMPLETO
const sumarDosNumero = (numero1, numero2) => {
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

const sumarReturnImplicito = (num1, num2) => num1 + num2;

/*La funcion flecha permite un return implicito, lo cual permite utilizar instrucciones sin llave. Esto solo es posible si la funcion tiene una instruccion. Veras muchas de estas en un ambiente laboral. 
Si la funcion flecha solo tiene un argumento, no es necesario encerrar el parametro en un parentesis. Esto solo es necesario al utilizar dos argumentos o mas. */