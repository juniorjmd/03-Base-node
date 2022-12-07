const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw ('la base debe ser un numero')
        } else { return true; }
    })
    .argv

module.exports = argv;