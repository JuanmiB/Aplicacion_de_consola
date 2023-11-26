require('colors')
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')

const mostrarMenu = () => {
    return new Promise((resolve, reject) => {
        console.clear()
        console.log('======================'.green);
        console.log('Seleccione una opción'.green);
        console.log('======================\n'.green);

        console.log(`${'1.'.cyan} Crear tarea`)
        console.log(`${'2.'.cyan} Listar tareas`)
        console.log(`${'3.'.cyan} Listar tareas completadas`)
        console.log(`${'4.'.cyan} Listar tareas pendientes`)
        console.log(`${'5.'.cyan} Completar tarea(s)`)
        console.log(`${'6.'.cyan} Borrar tarea`)
        console.log(`${'0.'.red} Salir \n`)

        const rl = readline.createInterface({ input, output });

        rl.question('Seleccione una opción: ', (opt) => {
            rl.close();
            resolve(opt)
        })

    })
}

const pausa = () => {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({ input, output })
        rl.question(`\nPresione ${'ENTER'.green} para continuar\n`, ()=>{
            rl.close()
            resolve()
        })
    })
}



module.exports = {mostrarMenu , pausa}