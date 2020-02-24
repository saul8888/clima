const fs = require('fs');

const cargarStore = () => {
    try {
        wheater = require('../stores/stores.json');
    } catch (error) {
        wheater = [];
    }
}

const getStore = () => {
    cargarStore();
    return wheater;
}

const actualizar = (descripcion) => {
    cargarStore();
    let index = wheater.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        wheater[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}
