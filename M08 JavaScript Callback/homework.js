/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {

   const arrayNombre = nombre.split('');
   const letra = arrayNombre.shift();
   arrayNombre.unshift(letra.toUpperCase())

   return arrayNombre.join('');    
}

function invocarCallback(cb) {

   cb();
}

function operacionMatematica(num1, num2, cb) {

   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {

   cb(arrayOfNumbers.reduce((a, b) => a + b));
}

function forEach(array, cb) {

   array.forEach(elem => cb(elem));
}

function map(array, cb) {

   let nuevoArray = [];

   return nuevoArray = array.map(elem => cb(elem));
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   let nuevoArray = [];

   arrayOfStrings.forEach(elem => {
      if (elem.startsWith('a')) {
         nuevoArray.push(elem)
      }
   })

   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
