const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias:'listado',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h', {
                        alias:'hasta',
                        type: 'number',
                        demandOption: false,
                        default: 10,
                        describe: 'Hasta que numero se multiplicará la base'
                    })
                    .check((argv, options) => {
                        console.log('yargs', argv);
                        if( isNaN(argv.b) ){
                            throw 'La base tiene que ser un numero'.red
                        }
                        if( isNaN(argv.h) ){
                            throw 'H tiene que ser un numero'.red
                        }
                        return true
                    })
                    .argv;

module.exports = argv;