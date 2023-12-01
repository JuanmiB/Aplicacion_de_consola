import 'colors'
import { Tarea } from './tarea.js'

export class Tareas {
  _listado = {}

  get listadoArr () {
    const list = []
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key]
      list.push(tarea)
    })
    return list
  }

  constructor () {
    this._listado = {}
  }

  cargarTareasFromArray (tareas) {
    tareas.forEach(t => {
      this._listado[t.id] = t
    })
  }

  crearTarea (desc) {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  deleteTask (id) {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }

  listadoCompleta () {
    console.log('================='.green)
    console.log('Todas las tareas'.green)
    console.log('=================\n'.green)
    this.listadoArr.forEach((element, index) => {
      const idx = `${index + 1}`.green
      const { desc, completadoEn } = element
      const estadoDeTarea = completadoEn ? 'Completada'.cyan : 'Pendiente'.red
      console.log(`${idx}. ${desc} :: ${estadoDeTarea}`)
    })
  }

  taskStatus (completed) {
    const filterFunction = completed
      ? tarea => tarea.completadoEn
      : tarea => !tarea.completadoEn

    let index = 0
    // eslint-disable-next-line no-unused-expressions
    completed
      ? (
          console.log('==================='.cyan),
          console.log('Tareas completadas'.cyan),
          console.log('===================\n'.cyan)
        )
      : (
          console.log('==================='.red),
          console.log('Tareas pendientes'.red),
          console.log('===================\n'.red)
        )
    this.listadoArr.filter(filterFunction).forEach(({ desc, completadoEn }) => {
      index++
      const statusText = completed ? 'Completada'.cyan : 'Pendiente'.red
      const logMessage = completed
        ? `${index.toString().cyan}. ${desc} :: ${completadoEn.green}`
        : `${index.toString().red}. ${desc} :: ${statusText}`

      console.log(logMessage)
    })
  }

  toggleCompleted (ids = []) {
    ids.forEach(id => {
      const task = this._listado[id]
      if (!task.completadoEn) {
        task.completadoEn = new Date().toISOString()
      }
    })

    this.listadoArr.forEach(tarea => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null
      }
    })
  }
}
