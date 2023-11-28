
import { Tarea } from "./tarea.js"


export class Tareas {
    _listado = {}

    get listadoArr(){
        const list = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            list.push (tarea)
        });
        return list
    }

    constructor(){
        this._listado= {
            
        }
    }

    cargarTareasFromArray(tareas){
       tareas.forEach( t => {
        this._listado[t.id] = t
       })
    }

    crearTarea(desc){
        const tarea = new Tarea (desc)
        this._listado[tarea.id] = tarea
    }
}