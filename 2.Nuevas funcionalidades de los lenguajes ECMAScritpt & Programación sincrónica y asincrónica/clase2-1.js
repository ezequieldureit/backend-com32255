const number = [2,4,6,8]

const cuadrados = number.map(numero => numero**2) // eleva al cuadrado

console.log(cuadrados)

const incluye = cuadrados.includes(5)  // si se incluye el numero 5 en la constante cuadrado va a ser igual a true  

console.log(incluye)

const numeroABuscar = 6

const incluyeNumber = number.includes(numeroABuscar) // si se incluye el numero 6 en la constante number va a ser igual a true

console.log(`el valor ${numeroABuscar} se esta buscando en el array ${number} y el resultado es ${incluyeNumber}`)

