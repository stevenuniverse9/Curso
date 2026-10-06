type Persona = {
  nombre: string;
  edad: number;
  buscandoLaburo: boolean;
};

const yo: Persona = { nombre: "Steven", edad: 18, buscandoLaburo: true };

const skills: string[] = ["git", "typescript", "nest", "react"];
const notas: number[] = [7, 8, 10];

function esMayorDeEdad(e: number): boolean {
  if (e >= 18) {
    return true;
  } else {
    return false;
  }
}

function enUnAnio(e: number): number {
  return e + 1;
}

console.log("Mayor de edad:", esMayorDeEdad(yo.edad));
console.log("En 1 año tendré:", enUnAnio(yo.edad));

for (let i = 0; i < notas.length; i++) {
console.log(`nota ${i}:`, notas[i]);
}
