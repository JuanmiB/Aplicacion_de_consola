import inquirer from "inquirer";
import "colors"

const questions = [
  {
    type: 'list',
    name: 'test',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: "1",
        name: `${'1.'.cyan} Crear tarea`,
      },
      {
        value: "2",
        name: `${'2.'.cyan} Listar tareas`,
      },
      {
        value: "3",
        name: `${'3.'.cyan} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${'4.'.cyan} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${'5.'.cyan} Completar tarea(s)`,
      },
      {
        value:" 6",
        name: `${'6.'.cyan} Borrar tarea`,
      },
      {
        value: "0",
        name: `${'0.'.red} Salir \n`
      }
    ]
  }
]


export const inquirerMenu = async () => {
console.clear()
  console.log('======================'.green);
  console.log('Seleccione una opción'.green);
  console.log('======================\n'.green);

  const { test } = await inquirer
    .prompt(questions)
    .then((answers) => {
      console.log('\nOrder receipt:');
      console.log(JSON.stringify(answers, null, '  '))
      return answers
    })
  
  return test 
}

export const nextStep = async() => {
  const question = [  {
    type: 'input',
    name: 'enter',
    message: `Presione ${'ENTER'.green} para continuar`
  }]
await inquirer.prompt(question)
}
