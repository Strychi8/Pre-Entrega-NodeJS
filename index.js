import { handleCommand } from './commands.js'

const argumentos = process.argv.slice(2)
console.log("Argumentos recibidos: ", argumentos, "\n")

handleCommand(argumentos)
