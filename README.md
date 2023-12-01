# Notas
TODO de consola utilizando Node.js

```
Creación de Tareas (Opción '1'): 
Permite al usuario agregar nuevas tareas a la lista. Solicita al usuario una descripción para la nueva tarea y la añade a la lista de tareas.

Listado Completo (Opción '2'): 
Muestra todas las tareas en la lista, proporcionando una visión general de todas las tareas existentes.

Mostrar Tareas Completadas (Opción '3'): 
Filtra y muestra solo las tareas completadas en la lista.

Mostrar Tareas Pendientes (Opción '4'): 
Filtra y muestra solo las tareas pendientes (no completadas) en la lista.

Toggle de Estado de Tarea (Opción '5'): 
Permite al usuario marcar o desmarcar una tarea como completada. Muestra una lista de tareas y permite al usuario seleccionar la tarea que desea modificar.

Eliminar Tarea (Opción '6'): 
Permite al usuario eliminar una tarea de la lista. Muestra una lista de tareas y solicita al usuario seleccionar la tarea que desea eliminar. Pide confirmación antes de la eliminación.

La aplicación utiliza una instancia de la clase Tareas para gestionar la lista de tareas y las operaciones asociadas, y persiste los cambios en un archivo para que los datos estén disponibles en sesiones futuras.

El flujo principal del programa se ejecuta en un bucle (do...while) que continúa hasta que el usuario elige salir (opción '0'). La interfaz de usuario se gestiona mediante las funciones de inquirer, proporcionando una experiencia interactiva y fácil de usar en la línea de comandos.
  ```