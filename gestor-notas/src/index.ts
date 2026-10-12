import { Alumno } from "./alumno.js";
import { promedio } from "./promedio.js";
import { agregar, buscar, aprobados } from "./gestor.js";

const alumnos: Alumno[] = [
  { nombre: "Steven", notas: [7, 8, 10] },
  { nombre: "Ana", notas: [4, 5, 4] },
];

agregar(alumnos, "Luis", [9, 9, 10]);
agregar(alumnos, "CARLOS", [10, 10, 10]);

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i].nombre + ": " + promedio(alumnos[i].notas));
}

const b = buscar(alumnos, "Ana");
console.log("Buscar Ana:", b ? promedio(b.notas) : "no existe");

const ap = aprobados(alumnos);
console.log("Aprobados: " + ap.length + " de " + alumnos.length);
