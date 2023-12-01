import 'colors'
import {
  inquirerMenu,
  nextStep,
  leerInput,
  menuDeleteTasks,
  confirmAction,
  checkList
} from './helpers/inquirer.js'
import { Tareas } from './models/tareas.js'
import { saveFile, readFile } from './models/saveFile.js'

const main = async () => {
  let opt = ''

  const tareas = new Tareas()

  const db = readFile()

  if (db) {
    tareas.cargarTareasFromArray(db)
  }
  do {
    opt = await inquirerMenu()

    switch (opt) {
      case '1': {
        const desc = await leerInput('Nueva tarea: ')
        tareas.crearTarea(desc)
        break
      }
      case '2':
      {
        console.clear()
        tareas.listadoCompleta()
        break
      }
      case '3':
      {
        console.clear()
        tareas.taskStatus(true)
        break
      }
      case '4':
      {
        console.clear()
        tareas.taskStatus(false)
        break
      }
      case '5':
      {
        console.clear()
        const checklistId = await checkList(tareas.listadoArr)
        tareas.toggleCompleted(checklistId)
        break
      }
      case '6':
      {
        console.clear()
        if (tareas.listadoArr.length > 0) {
          const id = await menuDeleteTasks(tareas.listadoArr)
          if (id !== '0') {
            const action = await confirmAction('¿Desea borrar esta tarea?')
            const mensaje = action ? 'Tarea eliminada' : 'No se eliminó la tarea.'
            tareas.deleteTask(id)
            console.log(mensaje)
          }
        } else {
          console.log('No hay ninguna tarea por borrar'.green)
        }
        break
      }
    }

    if (opt !== '0') await nextStep()
    saveFile(tareas.listadoArr)
  } while (opt !== '0')
}
main()
