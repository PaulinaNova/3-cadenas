function palindromo(cadena){
  cadena = cadena.toLowerCase();
  cadena=cadena.replace(/ /g, "");
	for (var i=0;i<cadena.length;i++){
		if(cadena[i]!=cadena[cadena.length-i-1]){
			return "Falso";
		}
	}
	return "Verdadero";
}

function palabras(cadena){
	cadena = cadena.split (" ");
	return cadena.length;
}

function letras(cadena){
  cadena=cadena.replace(/ /g, "");
  return cadena.length;
}

function vocales(cadena){
  return cadena.match(/[aeiou]/gi).length;
}

function consonantes(cadena){
  cadena=cadena.replace(/ /g, "");
  var consonantes = cadena.match(/[aeiou]/gi).length;
  return cadena.length - consonantes;
}

module.exports.palindromo = palindromo;

module.exports.palabras = palabras;

module.exports.letras = letras;

module.exports.vocales = vocales;

module.exports.consonantes = consonantes;
