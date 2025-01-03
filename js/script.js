let ventana = document.querySelector(".pantalla");
let lista = document.querySelector(".lista_info");
let tituloBienvenido = document.querySelector(".titulo_caja");
let nombrePais = document.querySelector(".nombre_pais");
let bandera = document.querySelector(".bandera_pais");
let ubicacion = document.querySelector(".ubicacion");
let usuario = document.querySelector('.caja_nombre_ventana');
let contenedor = document.querySelector('.contenedor');
let nombre = "";

let formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (usuario.value == "") {
    alert("Debe ingresar el nombre");
    usuario.focus();
  } else {
    nombre = usuario.value;
    ventana.classList.add("pantalla_inactiva");
    tituloBienvenido.textContent = "Bienvenido " + nombre;
  }

});

let btnPaises = document.querySelector(".btn_ver_mas");
let cuadroDatos = document.getElementById("caja-datos");
let separador = document.getElementById("separador");
btnPaises.addEventListener("click", verPais);
let cambio = 0;

function verPais() {
  let numA = Math.floor(Math.random() * (8 - 1 + 1));

  while (cambio === numA) {
    numA = Math.floor(Math.random() * (8 - 1 + 1));
  }

  tituloBienvenido.textContent = paises[numA].saludo + nombre;
  nombrePais.textContent = paises[numA].nombre;
  bandera.src = "Banderas/" + paises[numA].nombre + ".png";
  ubicacion.src = "Ubicacion/" + paises[numA].nombre + ".png";
  contenedor.style.backgroundColor = paises[numA].color;


  lista.innerHTML = "";
  lista.innerHTML = `
         <li class="item">Idioma: ${paises[numA].idioma}</li>
         <li class="item">Gentilicio: ${paises[numA].gentilicio}</li>
         <li class="item">Moneda: ${paises[numA].moneda}</li>
         <li class="item">Capital: ${paises[numA].capital}</li>    
    `;

  cambio = numA;
  cuadroDatos.classList.remove('oculto');
  separador.classList.remove('oculto');
}
