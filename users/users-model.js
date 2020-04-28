const db = require('../database/dbconfig');

module.exports = {
  add,
  find,
  findBy,
  findByStrandId, // is this correct?
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user, 'id');

  return findByStrandId(id);
}

function findByStrandId(id) {
  return db('users').where({ id }).first();
}