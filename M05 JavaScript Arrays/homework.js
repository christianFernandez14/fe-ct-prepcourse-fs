/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {

  return array[0];
}

function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido por parámetro.
  // Tu código:

  // Solucion #2:

  return array[array.length - 1];
  // Solucion #1:

  // const ultimoElm = array.length;
  // return array[ultimoElm - 1];
}

function obtenerLargoDelArray(array) {
  
  return array.length;
}

function incrementarPorUno(array) {
  
  const nuevoArray = array.map((num) => {
    return num + 1;
  });

  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  
  // Solución #2:
  return array.includes(elemento)

  // Solución #1: 
  // if (array.includes(elemento)) return true;
  // else return false;
}

function agregarNumeros(arrayOfNums) {
  
  let total = 0;

  arrayOfNums.forEach((elem) => {
    total += elem;
  });

  return total;
}

function promedioResultadosTest(resultadosTest) {

  // Solución #2:
  // let totalNotas = resultadosTest.fill((cont, elem) => cont += elem);

  // return totalNotas / resultadosTest.length;

  // Solución #1:
  let totalNotas = 0;
  const cantidadNotas = resultadosTest.length;

  for (i = 0; i < cantidadNotas; i++) {
    totalNotas += resultadosTest[i];
  }

  return totalNotas / cantidadNotas;
}

function numeroMasGrande(arrayOfNums) {

  let numeroMayor = arrayOfNums[0];

  arrayOfNums.forEach((elem) => {
    if (numeroMayor < elem) {
      numeroMayor = elem;
    }
  });

  return numeroMayor;
}

function multiplicarArgumentos() {

  let producto = 1;

  if (arguments.length < 1) {
    return 0;
  } else if (arguments.length >= 1) {
    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
    }

    return producto;
  }
}

function cuentoElementos(array) {

  let cont = 0;

  array.forEach((num) => {
    if (num > 18) {
      cont++;
    }
  });

  return cont;
}

function diaDeLaSemana(numeroDeDia) {

  switch (numeroDeDia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia laboral";

    case 1:
    case 7:
      return "Es fin de semana";

    default:
      break;
  }
}

function empiezaConNueve(num) {

  // Solución #2:
  const numStrg = num.toString();
  return numStrg[0] === '9';

  // Solución #1:
  // const numStrg = num.toString();

  // if (numStrg[0] === "9") return true;
  // else return false;
}

function todosIguales(array) {

  const valorInicial = array[0];

  const cumpleCondicion = array.every((num) => {
    return num === valorInicial;
  });

  return cumpleCondicion;
}

function mesesDelAño(array) {


  // Solución #2: Simplificar la busqueda.
  const meses = [];
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "Enero":
      case "Marzo":
      case "Noviembre":
        meses.push(array[i]);
        break;
    }
  }

   return meses.length < 3 
    ? "No se encontraron los meses pedidos"
    : meses;
  
  
  // Solución #1:
  // const meses = [];
  // for (let i = 0; i < array.length; i++) {
  //   switch (array[i]) {
  //     case "Enero":
  //     case "Marzo":
  //     case "Noviembre":
  //       meses.push(array[i]);
  //       break;
  //   }
  // }

  // if (meses.length < 3) return "No se encontraron los meses pedidos";
  // else return meses;
}

function tablaDelSeis() {

  let tablaDelSeis = [];

  for (let i = 0; i < 11; i++) {
    tablaDelSeis.push(i * 6);
  }
  return tablaDelSeis;
}

function mayorACien(array) {

  const nuevoArray = [];

  array.forEach((n) => {
    if (n > 100) {
      nuevoArray.push(n);
    }
  });
  return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {

  const nuevoArray = [];
  let suma = 0;
  let mensaje = `Se interrumpió la ejecución`

  for (let i = 1; i < 11; i++) {
    nuevoArray.push((num += 2));
    suma = nuevoArray.reduce((a, b) => {
      return a + b;
    });

    if (suma === i) {
      return mensaje;
    }
  }
  return nuevoArray;
}

function continueStatement(num) {


  const nuevoArray = [];
  let suma = 0;

  for (let i = 1; i < 11; i++) {
    if (i !== 5) {
      nuevoArray.push((num += 2));
      suma = nuevoArray.reduce((a, b) => {
        return a + b;
      });
    } else {
      continue;
    }
  }
  return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
