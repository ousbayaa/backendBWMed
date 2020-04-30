const db = require('../database/dbconfig');

module.exports = {
    getStrains,
    addStrain,
    getStrainById,
    updateStrain,
    deleteStrain
}

function getStrains(){
    return db('strains');
}

function addStrain(strain) {
    return db('strains').insert(strain).then((id) => {
        return getStrainById(id[0]);
    });
}

function getStrainById(id) {
    return db('strains').where({id}).first();
}

function updateStrain(strain, id) {
    return db('strains').where({id}).update(strain).then(()=> {
        return getStrainById(id);
    })
}

function deleteStrain(id) {
    return db('strains').where({id}).del();
}