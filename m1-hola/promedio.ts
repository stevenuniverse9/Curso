const notas: number[] = [7, 8, 10];

let suma: number = 0;

for (let i = 0; i < notas.length; i++) {
  suma = suma + notas[i];
}

const promedio: number = suma / notas.length;

console.log("Suma:", suma);
console.log("Cantidad:", notas.length);
console.log("Promedio:", promedio);

if (promedio >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
