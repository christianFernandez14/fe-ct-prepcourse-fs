/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  const arreglo = Object.entries(objeto);

  return arreglo;
}

function numberOfCharacters(string) {
  const mapeoLetra = {};
  const arrayString = string.split("").sort();

  for (letra of arrayString) {
    !mapeoLetra[letra] ? (mapeoLetra[letra] = 1) : mapeoLetra[letra]++;
  }

  return mapeoLetra; 
}

function capToFront(string) {
  const arrayMayus = [];
  const arrayMinus = [];

  for (let letra of string) {
    letra === letra.toUpperCase()
      ? arrayMayus.push(letra)
      : arrayMinus.push(letra);
  }

  return arrayMayus.concat(arrayMinus).join("");
}

function asAmirror(frase) {
  const arrayFrase = frase.split(" ");
  const nuevaFrase = [];

  arrayFrase.forEach((palabra) => {
    nuevaFrase.push(palabra.split("").reverse().join(""));
  });

  return nuevaFrase.join(" ");
}

function capicua(numero) {
  const procesado = numero.toString().split("").reverse().join("");

  return numero === parseInt(procesado) ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  const procesado = string.split("");
  console.log(procesado);

  for (let letra in procesado) {
    if (
      procesado[letra] === "a" ||
      procesado[letra] === "b" ||
      procesado[letra] === "c"
    ) {
      delete procesado[letra];
    }
  }

  return procesado.join("");
}

function sortArray(arrayOfStrings) {
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  let filtrado = array1.filter((elem) => array2.includes(elem));

  return filtrado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
