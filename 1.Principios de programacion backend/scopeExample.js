// EJEMPLO DE SCOPE NO VALIDO
function exampleFunction () {
    // x solo se puede utilizar en la funcion exampleFunction
    const x = 'declarada en scope local'
    console.log(x)
}
console.log(x) // ReferenceError: x is not defined.

// EJEMPLO DE SCOPE VALIDO
const x = 'declarada en el scope global';

function example() {
    console.log(x) // x existe aca adentro
}
example() // esto no lanza error

console.log(x) // x existe aca afuera tambien.