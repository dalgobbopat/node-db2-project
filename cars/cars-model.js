const db = require('../data/db.js');

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db('cars');
}

function getById(id) {
    return db('cars').where({ id: Number(id) });
}

function insert(cars) {
    return db('cars')
    .insert(cars)
    .then(([id]) => getById(id));
}