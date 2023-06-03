/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {

   // Solucion #2:
   return true ? x === y : false;

   // Solucion #1:
   // if (x === y) {
   //    return true;
   // }else {
   //    return false;
   // }
}

function tienenMismaLongitud(str1, str2) {

   // Solucion #2:
      return true ? str1.length === str2.length : false;

   // Solucion #1:
   // if (str1.length === str2.length) {
   //    return true;
   // }else {
   //    return false;
   // }
}

function menosQueNoventa(num) {

   // Solución #2:
   return (num < 90);

   // Solución #1:
   // if (num < 90 ) {
   //    return true;
   // }else return false;
}

function mayorQueCincuenta(num) {
   
   // Solución #2:
   return num > 50;

   // Solución #1:
   // if (num > 50) {
   //    return true;
   // }else return false;
   
}

function esPar(num) {

   // Solución #2:
   return num % 2 === 0;
   
   // Solución #1:
   // if (num % 2 === 0){
      //    return true;
      // } else return false;
   }
   
function esImpar(num) {

   // Solución #2:
   return num % 2 !== 0;
   
   // Solución #1:
   // if (num % 2 !== 0){
   //    return true;
   // } else return false;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
