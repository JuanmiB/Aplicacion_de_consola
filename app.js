import 'colors'
import { inquirerMenu, nextStep } from './inquirer.js';


const main = async () => {
  console.log(" Hola mundo ");
  let opt = ''

  do {
    opt = await inquirerMenu ()
    
    await nextStep()

    } while (opt !== '0')
}
main()