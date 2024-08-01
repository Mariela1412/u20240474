let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una cadena: ', (cadena) => {
    rl.question('Ingrese el índice de inicio para la subcadena: ', (inicio) => {
        rl.question('Ingrese la longitud de la subcadena: ', (longitud) => {
            inicio = parseInt(inicio)
            longitud = parseInt(longitud)
            const subcadena = cadena.substring(inicio, inicio + longitud)
            console.log(`La subcadena es: ${subcadena}`)
            process.exit()
        })
    })
})