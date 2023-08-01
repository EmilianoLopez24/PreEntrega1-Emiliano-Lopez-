// Calculadora de Indice de Masa Corporal

// Creamos un array para almacenar data del usuario
let usersData = [];

// Funcion para calcular IMC
function calcularimc(peso, altura) {
  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    return "Porfavor introduzca una altura y peso válidos";
  }

  let imc = peso / (altura * altura);
  imc = Math.round(imc * 10) / 10;

  usersData.push(imc);

  return imc;
}
console.log(usersData);

// Ejemplo de uso:
let user1imc = calcularimc(65, 1.75);
let user2imc = calcularimc(70, 1.8);

console.log(user1imc);
console.log(user2imc);

// Ejemplo de uso numero 2: Recibimos data de personas proveniente de algun API en forma de objetos y queremos calcular su IMC

const data1 = {
  nombre: "Emiliano Lopez",
  edad: "19",
  altura: "1.75",
  peso: "70",
};

const data2 = {
  nombre: "Tadeo Ramos",
  edad: "26",
  altura: "1.84",
  peso: "74",
};

const data3 = {
  nombre: "Gabriel Rivero",
  edad: "47",
  altura: "1.66",
  peso: "80",
};

let data1IMC = calcularimc(data1.peso, data1.altura);
console.log(`El IMC de esta persona es ${data1IMC}`);

let data2IMC = calcularimc(data2.peso, data2.altura);
console.log(`El IMC de esta persona es ${data2IMC}`);

let data3IMC = calcularimc(data3.peso, data3.altura);
console.log(`El IMC de esta persona es ${data3IMC}`);
