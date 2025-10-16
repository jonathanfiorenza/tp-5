 (function () {
            // Referencias a elementos del DOM para visualización
            const pMinutos = document.getElementById('pMinutos');
            const pSegundos = document.getElementById('pSegundos');
            const pCentesimas = document.getElementById('pCentesimas');

            // Referencias a elementos de entrada
            const inputMinutos = document.getElementById('inputMinutos');
            const inputSegundos = document.getElementById('inputSegundos');

            // Referencias a botones
            const btnIniciar = document.getElementById('btnIniciar');
            const btnPausar = document.getElementById('btnPausar');
            const btnReset = document.getElementById('btnReset');

            // Variables de control y tiempo (let)
            let minutos = 0;
            let segundos = 0;
            let centesimas = 0;
            let intervalo = null;
            let corriendo = false;

            // --- Funciones de Lógica del Temporizador ---

            const actualizarTemporizador = () => {
                // Reducir centésimas
                centesimas--;
                if (centesimas < 0) {
                    centesimas = 99;
                    segundos--;
                }

                // Reducir segundos
                if (segundos < 0) {
                    segundos = 59;
                    minutos--;
                }

                // Revisar si el tiempo ha terminado
                if (minutos < 0) {
                    minutos = 0;
                    segundos = 0;
                    centesimas = 0;
                    clearInterval(intervalo);
                    corriendo = false;
                    pMinutos.textContent = '00';
                    pSegundos.textContent = '00';
                    pCentesimas.textContent = '00';
                    alert("¡Tiempo Finalizado! 🔔");
                    return;
                }

                // Actualizar el DOM con formato 00
                pMinutos.textContent = `${minutos < 10 ? '0' + minutos : minutos}`;
                pSegundos.textContent = `${segundos < 10 ? '0' + segundos : segundos}`;
                pCentesimas.textContent = `${centesimas < 10 ? '0' + centesimas : centesimas}`;
            }

            const iniciarTemporizador = () => {
                if (!corriendo) {
                    // Obtener y establecer el tiempo inicial de las entradas
                    // Esto se hace solo si el temporizador está en 00:00 y no está corriendo
                    if (minutos === 0 && segundos === 0 && !intervalo) {
                        // Asegura que los valores sean números, si están vacíos, usa 0
                        const minInput = parseInt(inputMinutos.value) || 0;
                        const secInput = parseInt(inputSegundos.value) || 0;

                        if (minInput === 0 && secInput === 0) {
                            alert("Por favor, introduce un tiempo mayor a cero.");
                            return;
                        }

                        minutos = minInput;
                        segundos = secInput;
                        centesimas = 0; 

                        // Actualizar el display inicial
                        pMinutos.textContent = `${minutos < 10 ? '0' + minutos : minutos}`;
                        pSegundos.textContent = `${segundos < 10 ? '0' + segundos : segundos}`;
                        pCentesimas.textContent = '00';
                    }

                    // 2. Iniciar el intervalo (10ms para centésimas)
                    intervalo = setInterval(actualizarTemporizador, 10);
                    corriendo = true;
                }
            }

            const pausarTemporizador = () => {
                if (corriendo) {
                    clearInterval(intervalo);
                    corriendo = false;
                }
            }

            const resetTemporizador = () => {
                clearInterval(intervalo);
                corriendo = false;
                minutos = 0;
                segundos = 0;
                centesimas = 0;
                intervalo = null;

                // Actualizar el DOM a 00:00.00
                pMinutos.textContent = '00';
                pSegundos.textContent = '00';
                pCentesimas.textContent = '00';

                // Limpiar los campos de entrada
                inputMinutos.value = '';
                inputSegundos.value = '';
            }

            // --- Eventos para los botones ---
            btnIniciar.addEventListener('click', iniciarTemporizador);
            btnPausar.addEventListener('click', pausarTemporizador);
            btnReset.addEventListener('click', resetTemporizador);

        })();