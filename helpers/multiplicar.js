const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 1, listado=false, hasta=10) => {

    return promesa = new Promise((resolve, reject) => {     
    
        let salida, consola = '';
    
        for (let i = 0; i < hasta; i++) {
            salida += `${base} X ${i+1} = ${base*(i+1)}\n`;
            consola += base.toString().red + ' X '.yellow + (i+1).toString().magenta + ' = '.blue + base*(i+1) + '\n';
        }

        if(listado){
            console.log('======================');
            console.log('     Tabla del ', base);
            console.log('======================');
            console.log(consola)
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);

        reject('Error, numero intruducido inválido.')
    })
}

module.exports = {
    crearArchivo
}