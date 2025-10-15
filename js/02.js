//ejercicio 2
/**
 * Clase Persona
 * Contiene propiedades básicas y métodos para verificar generación, mayoría de edad y mostrar datos.
 */
/**
 * Clase Persona
 * Propiedades: nombre, edad, DNI, sexo (H/M), peso, altura, añoNacimiento.
 */
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo; // H: Hombre, M: Mujer
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    // --- Métodos Requeridos ---

    /**
     * Muestra la generación a la que pertenece la persona utilizando la tabla proporcionada.
     * @returns {string} Mensaje con la generación y su rasgo característico.
     */
    mostrarGeneracion() {
        let generacion = "";
        let rasgo = "";
        let anio = this.anioNacimiento;

        if (anio >= 1994 && anio <= 2010) {
            generacion = "Generación Z";
            rasgo = "Irreverencia";
        } else if (anio >= 1981 && anio <= 1993) {
            generacion = "Generación Y (Millennials)";
            rasgo = "Frustración";
        } else if (anio >= 1969 && anio <= 1980) {
            generacion = "Generación X";
            rasgo = "Obsesión por el éxito";
        } else if (anio >= 1949 && anio <= 1968) {
            generacion = "Baby Boom";
            rasgo = "Ambición";
        } else if (anio >= 1930 && anio <= 1948) {
            generacion = "Silent Generation (Los niños de la posguerra)";
            rasgo = "Austeridad";
        } else {
            generacion = "Generación no definida en la tabla";
            rasgo = "N/A";
        }

        return `✅ Generación: ${generacion}. Rasgo característico: "${rasgo}".`;
    }

    /**
     * Indica si la persona es mayor de edad (>= 18 años).
     * @returns {string} Mensaje indicando si es o no mayor de edad.
     */
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `🎉 ¡${this.nombre} es mayor de edad! (Tiene ${this.edad} años).`;
        } else {
            return `🚫 ${this.nombre} NO es mayor de edad (Tiene ${this.edad} años).`;
        }
    }

    /**
     * Devuelve toda la información de la persona en un formato legible.
     * @returns {string} Toda la información del objeto formateada.
     */
    mostrarDatos() {
        return `
            <strong>Nombre:</strong> ${this.nombre}<br>
            <strong>Edad:</strong> ${this.edad} años<br>
            <strong>DNI:</strong> ${this.dni}<br>
            <strong>Sexo:</strong> ${this.sexo} (${this.sexo === 'H' ? 'Hombre' : 'Mujer'})<br>
            <strong>Peso:</strong> ${this.peso} kg<br>
            <strong>Altura:</strong> ${this.altura} m<br>
            <strong>Año de Nacimiento:</strong> ${this.anioNacimiento}
        `;
    }
}

// --- Lógica de la Interfaz (Igual a la versión anterior) ---

let personaActual = null;

const formulario = document.getElementById('formularioPersona');
const controles = document.getElementById('controlesPersona');
const datosDiv = document.getElementById('datosPersona');

// Evento: Crear Persona
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const anioNacimiento = parseInt(document.getElementById('nacimiento').value);

    personaActual = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);

    controles.classList.remove('d-none');
    datosDiv.innerHTML = personaActual.mostrarDatos();
    alert(`¡Persona ${nombre} creada con éxito! Ahora puedes probar los métodos.`);
});

// Evento: Mostrar Generación
document.getElementById('btnGeneracion').addEventListener('click', () => {
    if (personaActual) {
        alert(personaActual.mostrarGeneracion());
    }
});

// Evento: Es Mayor de Edad
document.getElementById('btnMayorEdad').addEventListener('click', () => {
    if (personaActual) {
        alert(personaActual.esMayorDeEdad());
    }
});

// Evento: Mostrar Datos Completos
document.getElementById('btnMostrarDatos').addEventListener('click', () => {
    if (personaActual) {
        datosDiv.innerHTML = personaActual.mostrarDatos();
    }
});