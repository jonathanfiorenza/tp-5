//ejercicio 1
/*
 Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

*/

let numeroMagico = null; // Variable para guardar el número a adivinar

// Referencias a elementos del DOM
const btnComenzar = document.getElementById('btnComenzar');
const btnEnviar = document.getElementById('btnEnviar');
const inputAdivinar = document.getElementById('inputAdivinar');
const interfazJuego = document.getElementById('interfazJuego');
const mensajeAyuda = document.getElementById('mensajeAyuda');

// --- Función para comenzar el juego ---
function comenzarJuego() {
    // 1. Generar el número aleatorio (entre 1 y 100)
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    
    // Ocultar el botón de comenzar
    btnComenzar.classList.add('d-none');
    
    // Mostrar la interfaz de juego
    interfazJuego.classList.remove('d-none');
    
    // Limpiar el input y mensaje
    inputAdivinar.value = '';
    mensajeAyuda.textContent = '¡Juego iniciado! Ingresa tu primer intento.';
    console.log("Número Mágico generado:", numeroMagico); // Útil para depuración
}

// --- Función para verificar la adivinanza ---
function verificarAdivinanza() {
    // Obtener el valor ingresado por el usuario y convertirlo a número entero
    const intentoUsuario = parseInt(inputAdivinar.value);
    
    // Validar la entrada
    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
        alert("Por favor, ingresa un número válido entre 1 y 100.");
        return;
    }
    
    // 1. Caso Adivinado
    if (intentoUsuario === numeroMagico) {
        alert("🎉 ¡Felicidades! ¡Adivinaste el Número Mágico!");
        
        // Reiniciar la interfaz
        interfazJuego.classList.add('d-none');
        btnComenzar.classList.remove('d-none');
        mensajeAyuda.textContent = '';
        numeroMagico = null; // Resetear el número
        
    } 
    // 2. Caso No Adivinado (Pista)
    else {
        let pista;
        if (intentoUsuario < numeroMagico) {
            pista = "Tu número es DEMASIADO BAJO. Intenta con uno mayor. ⬆️";
        } else { // intentoUsuario > numeroMagico
            pista = "Tu número es DEMASIADO ALTO. Intenta con uno menor. ⬇️";
        }
        
        alert(`❌ ¡Incorrecto! ${pista}`);
        mensajeAyuda.textContent = pista; // Mostrar la pista también en la interfaz
    }
    
    // Limpiar el input después de cada intento
    inputAdivinar.value = '';
    inputAdivinar.focus(); // Enfocar el input para el siguiente intento
}

// --- Asignación de Eventos ---

// Botón "Comenzar el Juego"
btnComenzar.addEventListener('click', comenzarJuego);

// Botón "Enviar"
btnEnviar.addEventListener('click', () => {
    // Solo permitir enviar si el juego ha comenzado
    if (numeroMagico !== null) {
        verificarAdivinanza();
    } else {
        alert("Presiona 'Comenzar el Juego' primero.");
    }
});

// Permitir presionar Enter en el input
inputAdivinar.addEventListener('keypress', (event) => {
    // Código 13 es la tecla Enter
    if (event.key === 'Enter') {
        if (numeroMagico !== null) {
            verificarAdivinanza();
        }
    }
});