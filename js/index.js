// ./js/index.js
// https://codesandbox.io/s/brave-almeida-lxs3m6

// VARIABLES
const mike = "Mike";

const saludar = () => {
  return "Hola!";
};

const resultado = saludar();

console.log(resultado);

if (1 === 1) {
  console.log("Son iguales");
}

switch ("México") {
  case "México":
    console.log("Es México");
    break;
  default:
    console.log("No es México");
}

const sumar = (numero1, numero2) => numero1 + numero2;

sumar(1, 5);

const word = "corta";
// CONCATENACIÓN
const str1 = "Esta es" + " " + "una oración" + " " + word + ".";
console.log(str1);

// INTERPOLACIÓN
const str2 = `Esta es una oración ${word}.`;
console.log(str2);

// MÉTODOS DE ARREGLO

// REDUCE
const numeros = [2, 3, 5, 9];

const sumarNumeros = numeros.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 10);

console.log(sumarNumeros);
