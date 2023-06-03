/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {

   // Solución #2:
   let resultado = '';
   switch (true) {
      case (num === 0):
         resultado = false;
         break;         
      case (num > 0):
         resultado = 'Es positivo'
         break;
      default:
         resultado = 'Es negativo';
         break;
   }   
   return resultado;

   // Solución #1:
   // if (num > 0) {
   //    return `Es positivo`;
   // } else if (num < 0) {
   //    return `Es negativo`;
   // } else return false;
}

function agregarSimboloExclamacion(str) {

   return `${str}!`;
}

function combinarNombres(nombre, apellido) {

   return `${nombre} ${apellido}`;
}

function obtenerSaludo(nombre) {
   
   return `Hola ${nombre}!`;

}

function obtenerAreaRectangulo(alto, ancho) {

   return alto * ancho;
}

function retornarPerimetro(lado) {

   return lado + lado + lado + lado;
}

function areaDelTriangulo(base, altura) {

   return base * altura / 2;
}

function deEuroAdolar(euro) {
   
   return euro * 1.20;
}

function esVocal(letra) {
   // Solución #3: Revisar con expresión regular.

   // Solución #2:
   resultado = '';
   switch (letra) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
         resultado = 'Es vocal'
         break;
         
      default:
         resultado = 'Dato incorrecto'
         break;
   }

   return resultado;
   // Solución #1:
   // if ((letra === 'a') || (letra === 'e') || (letra === 'i') || (letra === 'o') || (letra === 'u')) {
   //    return `Es vocal`;
   // } else return `Dato incorrecto`;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
