import fs from 'fs'
const archivo = './tareas/tarea.json'

export const saveFile = (data) =>{
    console.log(data);
    fs.writeFileSync(archivo, JSON.stringify(data))
}

export const readFile = () => {
if (!archivo) {
    return null, console.log("no");
}
    const info = fs.readFileSync(archivo, 'utf-8')
    const parseInfo = JSON.parse(info)
    console.log( parseInfo );
    return parseInfo
}