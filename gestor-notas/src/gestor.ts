import { Alumno } from "./alumno.js";
import { promedio } from "./promedio.js";

export function agregar(alumnos: Alumno[], nombre: string, notas: number[]): void {
  alumnos.push({ nombre, notas });
}

export function buscar(alumnos: Alumno[], nombre: string): Alumno | undefined {
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nombre === nombre) {
      return alumnos[i];
    }
  }
  return undefined;
}

export function aprobados(alumnos: Alumno[]): Alumno[] {
  const lista: Alumno[] = [];
  for (let i = 0; i < alumnos.length; i++) {
    if (promedio(alumnos[i].notas) >= 6) {
      lista.push(alumnos[i]);
    }
  }
  return lista;
}
