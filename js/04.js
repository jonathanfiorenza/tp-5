// programa q tenga un reloj q muestre la hora actual con segundos, dia de la semana, dia del mes, mes y año
// la informacion debe actualizarse cada segundo que pasa
// el formato de la hora debe ser con dos digitos (09:05:01)
// el dia de la semana y el mes deben mostrarse en castellano
// Referencias a elementos del DOM
// que me devuelva la misma hora y fecha en formato local

(function(){
    // Arrays de nombres de días y meses (usamos const porque no cambian)
    const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // Referencias a los elementos del DOM (usamos const porque la referencia al elemento no cambia)
    const pHoras = document.getElementById('horas');
    const pMinutos = document.getElementById('minutos');
    const pSegundos = document.getElementById('segundos');
    const pDiaSemana = document.getElementById('diaSemana');
    const pDia = document.getElementById('dia');
    const pMes = document.getElementById('mes');
    const pYear = document.getElementById('year');
    const pAMPM = document.getElementById('ampm'); // Es constante incluso si no lo usamos

    const actualizarHora = function(){
        // Usamos const para el objeto Date, ya que no se reasigna
        const fecha = new Date();
        
        // Usamos let para las variables que modificaremos (formato 00)
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();
        
        // Usamos const para las variables que se leen y no se modifican
        const diaSemana = fecha.getDay();
        const dia = fecha.getDate();
        const mes = fecha.getMonth();
        const year = fecha.getFullYear();

        // --- FECHA (en Castellano) ---
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        // --- HORA (Formato 24 Horas HH:MM:SS) ---

        // 1. Aplicar formato 00 a las Horas (la variable 'horas' debe ser let)
        if (horas < 10){
             horas = '0' + horas;
        }
        pHoras.textContent = horas;

        // 2. Aplicar formato 00 a Minutos y Segundos (las variables deben ser let)
        if (minutos < 10){ minutos = "0" + minutos; }
        if (segundos < 10){ segundos = "0" + segundos; }

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        
        // 3. Limpiar AM/PM si existe el elemento en el HTML (para mantener 24h)
        if (pAMPM) {
            pAMPM.textContent = ''; 
        }
    };

    // Inicialización y Loop
    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000); // El intervalo también es una constante
}())