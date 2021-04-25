let cad = require("./cadena");

let pd = cad.palindromo("Amad a la dama");
let pl = cad.palabras("Paulina Alejandra Nova Ramírez");
let l = cad.letras("Una nueva noche");
let v = cad.vocales("La escuela de verano");
let c = cad.consonantes("Un tarde de abril");

console.log("¿La cadena es palindromo? "+ pd);
console.log("Esta cadena tiene: "+pl+" palabras");
console.log("Esta cadena tiene: "+l+" letras");
console.log("Esta cadena tiene: "+v+" vocales");
console.log("Esta cadena tiene: "+c+" consonantes");