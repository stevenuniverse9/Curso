export function promedio(notas: number[]): number {
  let suma: number = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  return suma / notas.length;
}
