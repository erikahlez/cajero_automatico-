// Variables globales
let usuarioLogueado = false;
let usuarioActual = {};

// Arreglo de objetos que simula las cuentas de los usuarios
const cuentas = [
  { nombre: 'Mali', saldo: 200, password: 'helloworld' },
  { nombre: 'Gera', saldo: 290, password: '133t' },
  { nombre: 'Maui', saldo: 67, password: '123' }
];

// Función para realizar el acceso y mostrar el saldo
function realizarAcceso(event) {
  event.preventDefault(); // Evita el envío del formulario

  const nombreUsuario = document.getElementById("nombre").value;
  const passwordUsuario = document.getElementById("pw").value;

  // Aquí realizarías la lógica para validar el acceso del usuario y obtener el saldo correspondiente
  const cuenta = usuarioActual = cuentas.find(cuenta => cuenta.nombre === nombreUsuario && cuenta.password === passwordUsuario);

  // Ejemplo: Validar si el nombre de usuario es "admin" para permitir el acceso
  if (cuenta) {
    usuarioLogueado = true;
    alert("Bienvenido "+ nombreUsuario);
    // Mostrar las opciones solo si el usuario está logueado
    mostrarOpciones();
  } else {
    alert("Acceso denegado. Por favor, ingrese un nombre de usuario válido.");
  }
}

// Función para mostrar las opciones si el usuario está logueado
function mostrarOpciones() {
  const opcionesElemento = document.getElementById("opciones");

  let usuario = document.getElementById("nombreUsuario");
  usuario.textContent = usuarioActual.nombre;


  // Mostrar las opciones solo si el usuario está logueado
  if (usuarioLogueado) {
    opcionesElemento.style.display = "block";
  } else {
    opcionesElemento.style.display = "none";
  }
}

function consultarSaldo() {
  let saldo = document.getElementById("saldoInicial");
  saldo.textContent = "Saldo inicial: $ "+ usuarioActual.saldo;
}

function realizarRetiro() {
  const retiroCantidad = parseInt(document.getElementById("retiro").value);


  if (retiroCantidad ===  0){

    alert("Agregue una cantidad mayor a 0");

  }else if(retiroCantidad > 0 && usuarioActual.saldo - retiroCantidad >= 10){
    // Aquí realizarías la lógica para verificar si el retiro es válido y actualizar el saldo

    usuarioActual.saldo =  usuarioActual.saldo - retiroCantidad;

    // Actualizar el saldo mostrado
    const saldoElemento = document.getElementById("saldoActual");
    saldoElemento.textContent = "Saldo actual: $ " + usuarioActual.saldo;
  }else{
    alert("Haz alcanzado el limite de retiro en tu cuenta");
  }
}

function realizarAbono() {
  const abonoCantidad = parseInt(document.getElementById("abono").value);

  if (abonoCantidad === 0){
    alert("Agregue una cantidad mayor a 0");

  }else if(abonoCantidad > 0 && usuarioActual.saldo + abonoCantidad <= 990){
    // Aquí realizarías la lógica para verificar si el abono es válido y actualizar el saldo

    usuarioActual.saldo = usuarioActual.saldo + abonoCantidad;

    // Actualizar el saldo mostrado
    const saldoElemento = document.getElementById("saldoActual");
    saldoElemento.textContent = "Saldo actual: $ " + usuarioActual.saldo;
  }else{
    alert("Haz alcanzado el limite de abono en tu cuenta");
  }
}
