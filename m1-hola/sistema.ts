type Alumno = {
  nombre: string;
  notas: number[];
};

function promedio(notas: number[]): number {
  let suma: number = 0;
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  return suma / notas.length;
}

const alumnos: Alumno[] = [
  { nombre: "Steven", notas: [7, 8, 10] },
  { nombre: "Ana", notas: [4, 5, 4] },
];

alumnos.push({ nombre: "Luis", notas: [9, 9, 10] });
alumnos.push({ nombre: "Steven2", notas: [6, 7, 8] });
alumnos.push({ nombre: "CARLOS", notas: [10,10,10]})
for (let i = 0; i < alumnos.length; i++) {
  const a = alumnos[i];
  const p = promedio(a.notas);
  console.log(a.nombre + ": " + p);
}
