 const { number } = require('yargs');
 const { crearArchivo } = require('./helper/multipicar');
 const argv = require('./config/yars.js')
 console.log(argv.b);

 crearArchivo(argv.b, argv.l, argv.h).then(nombreArchivo => { console.log(nombreArchivo, 'creado'); })
     .catch(err => console.log(err));