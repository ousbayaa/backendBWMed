
exports.up = function(knex) {
  return knex.schema.createTable('strains', tbl => {
        tbl.increments();
        tbl.string('strain').notNullable().primary();
        tbl.string('type').notNullable()
        tbl.float('rating', 5).notNullable();
        tbl.string('effects').notNullable();
        tbl.string('flavour').notNullable();
        tbl.text('description', 2000).notNullable();
      })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('strains')
};
