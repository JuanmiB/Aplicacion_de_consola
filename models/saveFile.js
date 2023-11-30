import fs from 'fs'
const archivo = './tareas/tarea.json'

export const saveFile = (data) =>{
;
    fs.writeFileSync(archivo, JSON.stringify(data))
}

export const readFile = () => {
if (!fs.existsSync(archivo)) {
    return null;
}
    const info = fs.readFileSync(archivo, 'utf-8')
    const parseInfo = JSON.parse(info)
    return parseInfo
}