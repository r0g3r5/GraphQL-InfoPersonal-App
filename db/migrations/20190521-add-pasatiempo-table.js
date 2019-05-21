exports.up = (knex, Promise) => {
  Promise.all([
    knex.schema.createTable("pasatiempos", table => {
      table
        .increments("id")
        .primary()
        .unsigned();
      table.string("actividad");
      table.string("nivelGusto");
      table.string("persona_id").unsigned();
    })
  ]);
};

exports.down = (knex, Promise) => {
  Promise.all([knex.schema.dropTable("pasatiempos")]);
};
