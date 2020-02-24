const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    /*
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima'//,
            //demand: true
        }
    })
    */
    .help()
    .argv;


module.exports = {
    argv
}