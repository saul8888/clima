const descripcion = {
    demand: true,
    alias: 'l',
    desc: 'local de la tienda'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}