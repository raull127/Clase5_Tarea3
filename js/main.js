///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

document.querySelector("#entrada-establecimiento").onsubmit = function () {
  const primerNombre = document.querySelector("#primer-nombre").value;
  const segundoNombre = document.querySelector("#segundo-nombre").value;
  const apellido = document.querySelector("#tus-apellidos").value;
  const edad = document.querySelector("#edad").value;
  const textoDiv = document.querySelector("#texto-div1");
  const textoH1 = document.querySelector("h1");

  textoDiv.innerText = `Datos del Usuario: \n\n Nombres: ${primerNombre} ${segundoNombre} \n Apellidos: ${apellido} \n Edad: ${edad}`;
  textoH1.innerText = `Bienvenido, ${primerNombre} ${apellido}!`;

  return false;
}

//TAREA3: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!