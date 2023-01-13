const persona = {
  name: "Eze", //clave: valor
  lastname: "Dure",  //clave: valor
  edad: 3,  //clave: valor
  country: "Argentina",  //clave: valor
};

console.log(persona); // imprime el objeto persona en si

console.log(Object.keys(persona)); // imprime las claves del objeto

console.log(Object.values(persona)); // imprime los valores de los valores del objeto

console.log(Object.entries(persona)); // imprime un nuevo array con las claves/valores por separado

const campeonesDelMundo = [
  {
    argentina: 3,
    brasil: 5,
    uruguay: 2,
  },
  {
    inglaterra: 2,
    italia: 3,
    alemania: 4,
  },
];


const nombresDeEquipo = campeonesDelMundo.map((campeonesDelMundo) => Object.keys(campeonesDelMundo))
console.log(`Nombre de equipos: ${nombresDeEquipo}`)

const totalCopas = campeonesDelMundo
.map((campeonesDelMundo) => Object.values(campeonesDelMundo))
.flat()
.reduce((acc, cur) => acc + cur, 0);
console.log(`Total copas: ${totalCopas}`)






