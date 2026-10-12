import { Alumno } from "./alumno.js";
import { promedio } from "./promedio.js";

const alumnos: Alumno[] = [
  { nombre: "Steven", notas: [7, 8, 10] },
  { nombre: "Ana", notas: [4, 5, 4] },
];

alumnos.push({ nombre: "Luis", notas: [9, 9, 10] });

for (let i = 0; i < alumnos.length; i++) {
  const a = alumnos[i];
  const p = promedio(a.notas);
  console.log(a.nombre + ": " + p);
}
