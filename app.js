const argv = require('./config/yargs').argv;
const weather_list = require('./weather_list/list');
const store = require('./stores/stores');

let comando = argv._[0];

console.log(argv.descripcion);

switch (comando) {
    case 'crear':
        let tarea = weather_list.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = weather_list.getListado();
        for (let tarea of listado) {
            console.log('========wheater list========');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==========================');
        }
        break;

    case 'actualizar':

        let actualizado = weather_list.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = weather_list.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido.');

}
