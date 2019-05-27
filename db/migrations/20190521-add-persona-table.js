exports.up = (knex, Promise) => {
  Promise.all([
    knex.schema.createTable("personas", table => {
      table
        .increments("id")
        .primary()
        .unsigned();
      table.string("ci");
      table.string("nombres");
      table.string("apellidos");
      table.string("descripcion");
      table.string("genero");
    })
  ]);
};

exports.down = (knex, Promise) => {
  Promise.all([knex.schema.dropTable("personas")]);
};
