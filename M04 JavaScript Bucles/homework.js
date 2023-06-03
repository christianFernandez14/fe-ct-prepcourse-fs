/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
  // Solución # 3:
  return x >= y ? x : y;

  // Solución # 2:
  // switch (true) {
  //    case (x >= y):
  //       return x;

  //    default:
  //       return y
  // }
  // Solución # 1:
  // if (x >= y ) return x;
  // else return y;
}

function mayoriaDeEdad(edad) {
  // Solución # 2:
  return edad >= 18 ? `Allowed` : `Not allowed`;

  // Solución # 1:
  // if (edad >= 18) {
  //    return `Allowed`;
  // }else return `Not allowed`;
}

function conection(status) {
  // solución #2:
  let estado = "";
  switch (status) {
    case 1:
      estado = "Online";
      break;
    case 2:
      estado = "Away";
      break;

    default:
      estado = `Offline`;
      break;
  }
  return estado;

  // Solución #1:
  // if (status === 1) return `Online`;
  // else if (status === 2) return `Away`;
  // else return `Offline`;
}

function saludo(idioma) {
  // Solución # 2:
  let saludo = "";

  switch (idioma) {
    case "aleman":
      saludo = "Guten Tag!";
      break;

    case "mandarin":
      saludo = "Ni Hao!";
      break;

    case "ingles":
      saludo = "Hello!";
      break;

    default:
      saludo = "Hola!";
      break;
  }

  return saludo;
  // Solución # 1:
  //if (idioma === `aleman`) return `Guten Tag!`;
  //else if (idioma === `mandarin`) return `Ni Hao!`;
  //else if (idioma === `ingles`) return `Hello!`;
  //else return `Hola!`;
}

function colors(color) {
  switch (color) {
    case "blue":
      salida = `This is blue`;
      break;
    case "red":
      salida = `This is red`;
      break;
    case "green":
      salida = `This is green`;
      break;
    case "orange":
      salida = `This is orange`;
      break;
    default:
      salida = `Color not found`;
      break;
  }

  return salida;
}

function esDiezOCinco(num) {
  // Solución # 2:
  return num === 10 || num === 5;

  // Solución # 1:
  //   if (num === 10 || num === 5) return true;
  //   else return false;
}

function estaEnRango(num) {
  // Solución # 2:
  return num > 20 && num < 50;

  // Solución # 1:
  // if (num > 20 && num < 50) return true;
  // else return false;
}

function esEntero(num) {
  //   Solución # 2:
  return num % 1 === 0;

  //   Solución # 1:
  //   if (num % 1 === 0) return true;
  //   else return false;
}

function fizzBuzz(num) {


  // Solución # 2:
  let salida = "";
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      salida = "fizzbuzz";
      salida = "fizzbuzz";
      break;

    case num % 3 === 0:
      salida = "fizz";
      break;

    case num % 5 === 0:
      salida = "buzz";
      break;

    default:
      salida = false;
      break;
  }

  return salida;

  // Solución # 1:
  //   if (num % 3 === 0 && num % 5 === 0) {
  //     return `fizzbuzz`;
  //   } else if (num % 3 === 0) {
  //     return `fizz`;
  //   } else if (num % 5 === 0) {
  //     return `buzz`;
  //   } else return false;
}

function operadoresLogicos(num1, num2, num3) {

//   Solución # 2:

//   Solución # 1:
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return `Numero 1 es mayor y positivo`;
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return `Hay negativos`;
  } else if (num3 > num1 && num3 > num2) {
    num3 += 1;
    return num3;
  } else if ((num1, num2, num3 === 0)) {
    return `Error`;
  } else return false;
}

function esPrimo(num) {

  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

function esVerdadero(valor) {

  if (valor) {
    return `Soy verdadero`;
  }
  return `Soy falso`;
}

function tieneTresDigitos(num) {

  if (num > 99 && num < 1000) return true;
  else return false;
}

function doWhile(num) {

  let limite = 0;

  do {
    limite += 1;
    num += 5;
  } while (limite < 8);

  return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile,
};
