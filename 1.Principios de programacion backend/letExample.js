let i = 0;
function foo() {
    i = 1;
    let j = 2;
    if (true) {
        console.log(i); // 1
        console.log(j); // 2
    }
}

foo();


function fooo() {
    let i = 0;
    if(true) {
        //seria otra variable i solo para el bloque if
        let i = 1;
        console.log(i); // 1

    }
    console.log(i); // 0
}

fooo()

/* EJEMPLO DE LET
Aqui la variable i es global y la variable j es local.
Pero si declaramos una vairable con let dentro un bloque, que a su vez esta dentro de una funcion, la variable
pertenecece solo a este bloque.*/

