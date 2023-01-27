class Contador {
    constructor(nombre){
        this.nombre = nombre
        this.contador = 0
    }
    static contadorGlobal = 0

    getResponsable() {
        return this.nombre
    }
    contar() {
        this.contador = this.contador + 1
        Contador.contadorGlobal = Contador.contadorGlobal + 1
    }
    getCuentaIndividual() {
        return this.contador
    }
    getCuentaGlobal() {
        return Contador.contadorGlobal
    }
}

const contadorEze = new Contador('Ezequiel')

console.log(contadorEze.getResponsable())

contadorEze.contar()
contadorEze.contar()
contadorEze.contar()

console.log(contadorEze.getCuentaIndividual())
console.log(contadorEze.getCuentaGlobal())

const contadorAntonia = new Contador('Antonia')

console.log(contadorAntonia.getResponsable())

contadorAntonia.contar()
contadorAntonia.contar()
contadorAntonia.contar()
contadorAntonia.contar()

console.log(contadorAntonia.getCuentaIndividual())
console.log(contadorAntonia.getCuentaGlobal())