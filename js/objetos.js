// ejemplo de funciones en objetos
const calculadora = {
    numero: 10,

  // Función 1: sumar
    sumar: function(valor) {
    return this.numero + valor;
    },

  // Función 2: restar
    restar: function(valor) {
        return this.numero - valor;
    },

  // Función 3: multiplicar
    multiplicar: function(valor) {
    return this.numero * valor;
    }
};

console.log(calculadora.sumar(5));     
console.log(calculadora.restar(3));    
console.log(calculadora.multiplicar(2)); 

// ejemplos funciones nativas para objetos

const persona = { nombre: "Ana", edad: 20 };
// keys
console.log(Object.keys(persona));
// values
console.log(Object.values(persona));
// entries
console.log(Object.entries(persona));

// assign
const a = { x: 1 };
const b = { y: 2 };

const resultado = Object.assign({}, a, b);

console.log(resultado);

// frezze
const obj = { nombre: "Luis" };
Object.freeze(obj);

obj.nombre = "Pedro"; 