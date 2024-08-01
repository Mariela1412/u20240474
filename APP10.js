let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    palabra = palabra.toLowerCase().replace(/\s+/g, '')
    const vowels = 'aeiou';
    let count = 0;

   
    for (let char of palabra) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    console.log(`Número de vocales en "${palabra}": ${count}`)
    process.exit()
});