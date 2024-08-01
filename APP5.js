let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra que desea reemplazar: ', (palabraAReemplazar) => {
        rl.question('Ingrese la nueva palabra: ', (nuevaPalabra) => {
            const fraseModificada = frase.replace(new RegExp(palabraAReemplazar, 'g'), nuevaPalabra)
            console.log(`Frase modificada: ${fraseModificada}`)
            process.exit()
        });
    });
});
