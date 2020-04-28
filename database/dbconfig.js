require('dotenv').config();

const knex = require('knex');

const environment = process.env.DB_CONNECT || 'development';

const knexConfig = require('../knexfile');

module.exports = knex(knexConfig[environment]);