import 'colors'
import { Tarea } from "./tarea.js"


export class Tareas {
    _listado = {}

    get listadoArr() {
        const list = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            list.push(tarea)
        });
        return list
    }

    constructor() {
        this._listado = {

        }
    }

    cargarTareasFromArray(tareas) {
        tareas.forEach(t => {
            this._listado[t.id] = t
        })
    }

    crearTarea(desc) {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }

    listadoCompleta() {
        this.listadoArr.forEach((element, index) => {
            const idx = `${index + 1}`.green
            const { desc, completadoEn } = element
            const estadoDeTarea = completadoEn ? "Completada".cyan : "Pendiente".red
            console.log(`${idx}. ${desc} :: ${estadoDeTarea}`);
        });
    }

    taskStatus(completed) {
        const filterFunction = completed
            ? tarea => tarea.completadoEn
            : tarea => !tarea.completadoEn;
    
        let index = 0;
    
        this.listadoArr.filter(filterFunction).forEach(({ desc }) => {
            index++;
            const statusText = completed ? "Completada".cyan : "Pendiente".red;
            const logMessage = completed
                ? `${index.toString().cyan}. ${desc} :: ${statusText}`
                : `${index.toString().red}. ${desc} :: ${statusText}`;
    
            console.log(logMessage);
        });
    }
}