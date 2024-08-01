let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) =>{
    let palabras = frase.trim().split(/\s+/)
    let numPalabras = palabras.length
    console.log(`El número de palabras en la frase es: ${numPalabras}`)
    process.exit()
})
