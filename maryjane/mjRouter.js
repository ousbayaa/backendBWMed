//   .createTable('results', tbl => {
//     tbl.integer('search_id')
//       .unsigned()
//       .notNullable()
//       .references('id')
//       .inTable('searches')
//       .onUpdate('CASCADE')
//       .onDelete('CASCADE')
//     tbl.integer('result_number', 5).notNullable().unsigned()
//     tbl.string('strain_name')
//       .notNullable()
//       .references('strain')
//       .inTable('strains')
//       .onUpdate('CASCADE')
//       .onDelete('CASCADE')
//   })