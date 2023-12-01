import inquirer from 'inquirer'
import 'colors'

const questions = [
  {
    type: 'list',
    name: 'optionMenu',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.cyan} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.cyan} Listar tareas`
      },
      {
        value: '3',
        name: `${'3.'.cyan} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.cyan} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.cyan} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.cyan} Borrar tarea`
      },
      {
        value: '0',
        name: `${'0.'.red} Salir \n`
      }
    ]
  }
]

export const inquirerMenu = async () => {
  console.clear()
  console.log('======================'.green)
  console.log('Seleccione una opción'.green)
  console.log('======================\n'.green)

  const { optionMenu } = await inquirer.prompt(questions)

  return optionMenu
}

export const nextStep = async () => {
  const question = [{
    type: 'input',
    name: 'enter',
    message: `Presione ${'ENTER'.green} para continuar`
  }]
  await inquirer.prompt(question)
}

export const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate (value) {
        if (value.length === 0) {
          return 'Por favor, ingrese un caracter'
        }
        return true
      }
    }
  ]
  console.clear()
  console.log('================='.green)
  console.log('Escriba su tarea'.green)
  console.log('=================\n'.green)
  const { desc } = await inquirer.prompt(question)
  return desc
}

export const menuDeleteTasks = async (tasks = []) => {
  const choices = tasks.map((task, index) => {
    const idx = `${index + 1}.`.green
    return {
      value: task.id,
      name: `${idx} ${task.desc}`
    }
  })
  choices.unshift({
    value: '0',
    name: '0.'.red + ' Cancelar'
  })

  const question = [
    {
      type: 'list',
      name: 'deleteTask',
      message: '¿Qué tarea desea eliminar?',
      choices
    }
  ]

  console.clear()
  console.log('==================='.red)
  console.log('Elimine una opción'.red)
  console.log('===================\n'.red)

  const { deleteTask } = await inquirer.prompt(question)

  return deleteTask
}

export const confirmAction = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]

  const { ok } = await inquirer.prompt(question)
  return ok
}

export const checkList = async (tasks = []) => {
  const choices = tasks.map((task) => {
    return {
      value: task.id,
      name: ` ${task.desc}`,
      checked: !!(task.completadoEn)
    }
  })
  const question = [
    {
      type: 'checkbox',
      name: 'checklist',
      message: 'Seleccione lo que quiere',
      choices
    }
  ]
  console.log('=============================='.green)
  console.log('Marque o desmarque sus tareas'.green)
  console.log('==============================\n'.green)
  const { checklist } = await inquirer.prompt(question)
  return checklist
}
