// Comenzamos utilizando la palabra reservada "class"
class nombreDeClase{
    // una clase cuenta con un metodo (funcion) constructor, este se ejecutara cada vez que se instancie un objeto
    constructor(parametrosDeCreacion){
        console.log('Objeto creado');
        this.variableInterna = 2;
        // cada instancia de la clase contara con variables internas, para poder declararlas y utilizarlas necesitamos colocar un this. antes de la variable
    }
    static variableEstatica = 4;
    /*La palabra "static" es una variable que puede utilizarse SIN NECESITAR UNA INSTANCIA , ademas , todas sus instancias pueden acceder a ella de igual manera. SI ALGUNA INSTANCIA CAMBIA LA VARIABLE ESTATICA, todas las instancias se enteran. */
    metodo1() {
        // los metodos son funciones que solo puede utilizar una instancia de la clase 
        console.log('Soy un metodo de la clase!')
    }
    metodo2 = () =>{
        console.log(`Soy una funcion flecha, puedo incrustar variables: ${this.variableInterna}, todo dentro de una clase. Una locura!`)
    }

    
}

/*Una vez que terminamos de definir la clase, es hora de instanciar.

Usaremos el operador "new", el cual crear una instancia de la clase.*/

let instancia = new nombreDeClase(); // se ejecutara el constructor diciendo "Objeto creado" (constructor)

//Nota como ahora la instancia cuenta con las variables y metodos definidos en clase previamente.

console.log(instancia.variableInterna);
instancia.metodo1();
instancia.metodo2();

// Para usar la variable estatica , no es necesaria la instancia, simplemente lo llamamos desde la clase.

nombreDeClase.variableEstatica;

// La magia esta en que como la clase es un molde, se pueden crear multiples instancias de esta.

let instancia2 = new nombreDeClase(); // se ejecutara el constructor diciendo "Objeto creado" (constructor)
let instancia3 = new nombreDeClase(); // se ejecutara el constructor diciendo "Objeto creado" (constructor)

// Cada instancia sera diferente  de las otras en cuanto a sus variables y sus metodos (excepto las static)

