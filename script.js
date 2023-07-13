// Calculadora de IMC

// 1 Preguntar al usuario su nombre, altura y peso

const nombreUsuario = prompt("Cual es tu nombre?");
alert("Bienvenido " + nombreUsuario);
let usuarioAltura = prompt(nombreUsuario + " Cuál es tu altura en metros?");
let usuarioPeso = prompt(nombreUsuario + " Cuál es tu peso en KG?");

// 2 Calcular su IMC

let usuarioIMC = usuarioPeso / (usuarioAltura * usuarioAltura);
console.log(usuarioIMC);
alert(`${nombreUsuario}, tu Indice de Masa Corporal es ${usuarioIMC}`);

// 3 En base a su IMC, Compararlo con el mío y alertar ese resultado

let imcEmiliano = 71 / (1.75 * 1.75);
console.log(imcEmiliano);

if (usuarioIMC > imcEmiliano) {
  alert(
    `${nombreUsuario} , tu IMC es mayor al de Emiliano (${imcEmiliano}), el creador de este programa`
  );
} else {
  alert(
    `Emiliano, el creador del programa tiene un Indice de masa Corporal mayor al tuyo. Su IMC es ${imcEmiliano}. Deberiamos decirle que deje de comer tanto! `
  );
}
