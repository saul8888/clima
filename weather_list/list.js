const fs = require('fs');

let wheater = [];

const guardarDB = () => {
    let data = JSON.stringify(wheater);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {
    try {
        wheater = require('../db/data.json');
    } catch (error) {
        wheater = [];
    }

}


const crear = (descripcion) => {
    cargarDB();
    let new_w = {
        descripcion,
        completado: false
    };
    wheater.push(new_w);
    guardarDB();
    return new_w;

}

const getListado = () => {
    cargarDB();
    return wheater;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = wheater.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        wheater[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = wheater.filter(tarea => tarea.descripcion !== descripcion);

    if (wheater.length === nuevoListado.length) {
        return false;
    } else {
        wheater = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}