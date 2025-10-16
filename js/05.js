/*

Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.gast
*/
// El cronómetro debe mostrar horas, minutos, segundos y centésimas de segundo (00:00:00:00)
// El formato de la hora debe ser con dos dígitos (09:05:01:01)
// Referencias a elementos del DOM
// El cronómetro debe actualizarse cada 10 milisegundos (centésimas de segundo)
// Usar let y const en lugar de var
// Usar funciones de flecha (arrow functions) en lugar de funciones tradicionales
// Usar plantillas literales (template literals) en lugar de concatenaciones    
// Usar un IIFE (Immediately Invoked Function Expression) para evitar contaminar el ámbito global
//el cronometro tiene q funcionar al apretar iniciar y pausar al apretar pausar y luego iniciar debe seguir desde donde se quedo
//al apretar reset debe volver a 0
//al apretar iniciar debe iniciar desde 0 si se apreta iniciar luego de reset

// Referencias a elementos del DOM
// que me devuelva la misma hora y fecha en formato local
(function(){
    // Referencias a los elementos del DOM (const)
    const pHoras = document.getElementById('pHoras');    
    const pMinutos = document.getElementById('pMinutos');
    const pSegundos = document.getElementById('pSegundos');
    const pCentesimas = document.getElementById('pCentesimas');
    const btnIniciar = document.getElementById('btnIniciar');
    const btnPausar = document.getElementById('btnPausar');
    const btnReset = document.getElementById('btnReset');   
    
    // Variables de control y tiempo (let)
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let centesimas = 0;
    let intervalo = null; 
    let corriendo = false; 

    const actualizarCronometro = () => {        
        centesimas++;
        if (centesimas >= 100) {
            centesimas = 0;
            segundos++;
        }        
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }   
        if (minutos >= 60) {
            minutos = 0;
            horas++;
        }   
        
        // Actualizar el DOM con formato 00 usando plantillas literales
        pHoras.textContent = `${horas < 10 ? '0' + horas : horas}`;
        pMinutos.textContent = `${minutos < 10 ? '0' + minutos : minutos}`;
        pSegundos.textContent = `${segundos < 10 ? '0' + segundos : segundos}`;
        pCentesimas.textContent = `${centesimas < 10 ? '0' + centesimas : centesimas}`;
    }   
    
    const iniciarCronometro = () => {
        if (!corriendo) { 
            // 10 ms (milisegundos) es la frecuencia para contar centésimas
            intervalo = setInterval(actualizarCronometro, 10); 
            corriendo = true; 
        }    
    }
    
    const pausarCronometro = () => {        
        if (corriendo) { 
            clearInterval(intervalo);
            corriendo = false; 
        }   
    }
    
    const resetCronometro = () => {        
        clearInterval(intervalo);   
        corriendo = false;   
        horas = 0;
        minutos = 0;
        segundos = 0;
        centesimas = 0;     
        
        // Actualizar el DOM a 00:00:00:00
        pHoras.textContent = '00';
        pMinutos.textContent = '00';    
        pSegundos.textContent = '00';
        pCentesimas.textContent = '00';
    }       
    
    // Eventos para los botones
    btnIniciar.addEventListener('click', iniciarCronometro);
    btnPausar.addEventListener('click', pausarCronometro);
    btnReset.addEventListener('click', resetCronometro);   
    
})(); 