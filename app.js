import 'colors'
import {
  inquirerMenu,
  nextStep,
  leerInput,
  menuDeleteTasks,
  confirmAction
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
        const desc = await leerInput('descripcion: ')
        tareas.crearTarea(desc)

        break
      }

      case '2':
      {
        tareas.listadoCompleta()
        break
      }
      case '3':
      {
        tareas.taskStatus(true)
        break
      }
      case '4':
      {
        tareas.taskStatus(false)
        break
      }
      case '6':
      {
        if (tareas.listadoArr.length > 0) {
          const id = await menuDeleteTasks(tareas.listadoArr)
          const action = await confirmAction('¿Desea borrar esta tarea?')

          if (action) {
            tareas.deleteTask(id)
            console.log('Tarea eliminada')
          } else {
            console.log('No se eliminó la tarea.')
          }
        } else {
          console.log('No hay ninguna tarea por borrar'.bgMagenta)
        }
        break
      }
    }

    await nextStep()
    saveFile(tareas.listadoArr)
  } while (opt !== '0')
}
main()
