import 'colors'
import { inquirerMenu,
   nextStep,
  leerInput,
  } from './helpers/inquirer.js';

import { Tareas } from './models/tareas.js';
import { saveFile, readFile } from './models/saveFile.js';

const main = async () => {
  let opt = ''

  const tareas = new Tareas()

  const db = readFile()
  
  if (db){
     tareas.cargarTareasFromArray(db)
  }
  do {
    opt = await inquirerMenu()

    switch (opt) {
      case '1':{

        const desc = await leerInput("descripcion: ")
        tareas.crearTarea(desc)
        
        break;
      }
    
      case '2':
      {

        console.log(tareas.listadoArr) 
        break;
      }
    }
    
    await nextStep()
    // saveFile(tareas.listadoArr)
    } while (opt !== '0')
}
main()