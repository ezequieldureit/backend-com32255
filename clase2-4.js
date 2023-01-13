const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },

    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:2,
        panes:4
    }
]

const [primerObjeto, segundoObjeto] = objetos.map(carrito => Object.keys(carrito))
const todos = [...primerObjeto,...segundoObjeto]
console.log(segundoObjeto)
console.table(todos)

const valores = objetos.map(carrito => Object.values(carrito))
const valoresASumar = valores.flat()
const totalProductos = valoresASumar.reduce((acc, current) => acc + current)

console.log(totalProductos)
