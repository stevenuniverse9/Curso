import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Alumno } from "./alumno.js";
import { promedio } from "./promedio.js";
import { agregar, buscar, aprobados } from "./gestor.js";

async function main(): Promise<void> {
const alumnos: Alumno[] = [
  { nombre: "Steven", notas: [7, 8, 10] },
  { nombre: "Ana", notas: [4, 5, 4] },
];

const rl = readline.createInterface({ input, output });

let salir: boolean = false;
while (salir === false) {
  console.log("1 listar | 2 agregar | 3 buscar | 4 aprobados | 0 salir");
  const opcion = await rl.question("Elige: ");

  switch (opcion) {
    case "1": {
      for (let i = 0; i < alumnos.length; i++) {
        console.log(alumnos[i].nombre + ": " + promedio(alumnos[i].notas));
      }
      break;
    }
    case "2": {
      const nombre = await rl.question("Nombre: ");
      const texto = await rl.question("Notas con comas ej 7,8,10: ");
      const notas = texto.split(",").map((x: string) => Number(x));
      agregar(alumnos, nombre, notas);
      console.log("Agregado");
      break;
    }
    case "3": {
      const nombre = await rl.question("Buscar nombre: ");
      const b = buscar(alumnos, nombre);
      console.log(b ? b.nombre + ": " + promedio(b.notas) : "no existe");
      break;
    }
    case "4": {
      const ap = aprobados(alumnos);
      console.log("Aprobados: " + ap.length + " de " + alumnos.length);
      break;
    }
    case "0": {
      salir = true;
      break;
    }
    default: {
      console.log("Opción inválida");
      break;
    }
  }
}

rl.close();
}

void main();
