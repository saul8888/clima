
const argv = require('./config/yargs').argv;
const weather_list = require('./weather_list/list');
const store = require('./stores/stores');
const clima = require('./clima/clima');

let comando = argv._[0];
let tarea = store.Getubi(argv.descripcion);
let listado = store.getStore();

const getInfo = async() => {
    try {
        const temp   = await clima.getClima( listado[tarea].lat, listado[tarea].lon);       
        const tarea1 = await weather_list.crear(argv.descripcion,temp);
        return `El clima de ${ listado[tarea].local } es de ${ temp }.`;

    } catch (e) {
        return `No se pudo determinar el clima`;
    }
}

getInfo()
    .then( console.log )
    .catch( console.log );
