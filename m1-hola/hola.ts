const nombre: string = "Steven";
const edad: number = 18;
const buscandoLaburo: boolean = true;

let aniosEstudiando: number = 0;
aniosEstudiando = 1;

function presentarse(n: string, e: number): string {
  return `Hola soy ${n}, tengo ${e} años`;
}

console.log(presentarse(nombre, edad));
console.log("Buscando laburo:", buscandoLaburo);
console.log("Años estudiando:", aniosEstudiando);
