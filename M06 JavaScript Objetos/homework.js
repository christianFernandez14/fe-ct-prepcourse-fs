/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {

  const gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return `Meow!`;
    },
  };

  return gato;
}

function nuevoUsuario(nombre, email, password) {

  const usuario = {
    nombre: nombre,
    email: email,
    password: password,
  };

  return usuario;
}

function agregarPropiedad(objeto, propiedad) {

  objeto[propiedad] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {

   objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {

  return objetoMisterioso.numeroMisterioso * 5;
}

function eliminarPropiedad(objeto, propiedad) {

  delete objeto[propiedad];
  return objeto;
}

function tieneEmail(objetoUsuario) {

  return !!objetoUsuario.email;
}

function tienePropiedad(objeto, propiedad) {

  return objeto.hasOwnProperty(propiedad);
}

function verificarPassword(objetoUsuario, password) {
 
  return objetoUsuario["password"] === password;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {

  objetoUsuario["password"] = nuevaPassword;

  return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {

  objetoUsuario['amigos'].push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {

  for (let elem of objetoMuchosUsuarios) {
    elem.esPremium = true;
  }

  return objetoMuchosUsuarios;
}

function sumarLikesDeUsuario(objetoUsuario) {

  sumaLikes = 0;
  for (let elem of objetoUsuario["posts"]) {
    sumaLikes += elem["likes"];
  }

  return sumaLikes;
}

function agregarMetodoCalculoDescuento(objetoProducto) {

  objetoProducto['calcularPrecioDescuento'] = () => {
   let descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   let total = objetoProducto.precio - descuento;

   return total;
 } 

 return objetoProducto;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
