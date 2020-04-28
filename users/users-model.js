const db = require('../database/dbconfig');

module.exports = {
  add,
  find,
  findBy,
  findByStrand, // is this correct?
};

function find() {
  return db('users').select('id', 'username', 'password', 'department');
}

function findby(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findByStrand(id);
}

function findByStrand(id) {
  return db('users').where({ id }).first();
}