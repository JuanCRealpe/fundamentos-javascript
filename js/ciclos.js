// ejemplo 1 sumar elementos
const numeros = [10, 20, 30, 40];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma es:", suma);

// ejemplo 2 filtrar numeros 
const valores = [10, 20, 30, 40, 15, 50];
const mayores = [];

for (let numero of valores) {
    if (numero > 25) {
    mayores.push(numero);
    }
}

console.log(mayores);