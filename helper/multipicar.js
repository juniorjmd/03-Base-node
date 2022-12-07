const fs = require('fs');

const crearArchivo = async(base, listar = false, hasta = 10) => {
    console.clear();
    // const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let salida = `=============================================
                Tabla del  ${base} 
============================================= `;
    /*   forEach((i) => {
           salida += ` \n ${base} x ${i} = ${ i * base }`;
       })*/


    for (let i = 1; i <= hasta; i++) {
        salida += ` \n ${base} x ${i} = ${ i * base }`;
    }
    if (listar) console.log(salida);

    try {
        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;

    } catch (e) {
        throw (e);

    }

}

module.exports = {
    crearArchivo
}