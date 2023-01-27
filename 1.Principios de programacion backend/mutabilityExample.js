const user = { name: 'Eze'};
user.name = 'Modifique el valor del elemento name del objeto user a Manuel';
console.log(user.name) // Manuel

/*
- Mientras que con let una variable puede ser reasignada, con const no es posible.
- Si se intenta reasignar una constante se pbtendra un error typo TypeError.
- Pero que no se puedan reasignar no significa que sean inmutables.
- Si el valor de una constante es algo 'mutable', como un array o un objeto, se pueden cambiar los valores internos de sus elementos. 
NO REASIGNABLE ≠ INMUTABLE
*/