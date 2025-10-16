//ejercicio 3
/*
 Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 

*/

// Referencias a elementos del DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// --- Función para agregar una nueva tarea ---
function addTask() {
    // Obtener y limpiar el texto del input
    const taskText = taskInput.value.trim();

    // Validar que el input no esté vacío
    if (taskText === "") {
        alert("Por favor, ingresa una tarea válida.");
        return;
    }

    // 1. Crear el elemento de la lista (<li>)
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'task-item');
    
    // 2. Crear el texto de la tarea
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // 3. Crear el botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteButton.textContent = 'Eliminar';
    
    // Asignar la funcionalidad de eliminación
    deleteButton.addEventListener('click', function() {
        // Elimina el elemento padre (el <li>) al que pertenece el botón
        listItem.remove();
    });

    // 4. Armar la estructura: <li> contiene <span> y <button>
    listItem.appendChild(taskContent);
    listItem.appendChild(deleteButton);
    
    // 5. Agregar el <li> completo a la lista (<ul>)
    taskList.appendChild(listItem);

    // 6. Limpiar el input para la siguiente tarea
    taskInput.value = '';
    taskInput.focus(); // Devolver el foco al input
}

// --- Asignación de Eventos ---

// 1. Evento para el botón "Agregar Tarea"
addButton.addEventListener('click', addTask);

// 2. Evento para la tecla "Enter" en el input
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});