const restarMayoriaEdad = (mayoriaEdad, edadUsuario) => 
  mayoriaEdad - edadUsuario; // si tengo una sola instruccion como es el caso, no es necesario el return ya que lo tiene implicito

const mayoriaEdad = 21;
const edadUsuario = 18;

const resultadoSuma = restarMayoriaEdad(mayoriaEdad, edadUsuario);

console.log(resultadoSuma);
 
function sumar(num1, num2) {
    
    return num1 + num2 // es necesario el return para que vuelva el resultado 

}

const resultado = sumar(4,5)
console.log(resultado)