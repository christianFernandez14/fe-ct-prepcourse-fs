/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
  class Usuario {
    constructor(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }

    saludar() {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  }

  return Usuario;
}

function agregarMetodoPrototype(Usuario) {

  Usuario.prototype.saludar = function () {
    
   return `Hello World!`;
  };

}

function agregarStringInvertida() {

  String.prototype.reverse = function () {

   let invertido = '';

   for (let i = 0; i < this.length; i++) {
      invertido = this[i] + invertido;
   }

   return invertido;
  }

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
};
