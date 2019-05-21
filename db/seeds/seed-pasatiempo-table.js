const casual = require("casual");
exports.seed = (knex, Promise) => {
  return knex("pasatiempos")
    .del()
    .then(() => {
      const promises = Array(40).fill().map((_, id) => {
        return (
          knex("pasatiempos").
          insert([
            {
              id,
              actividad: casual.name,
              nivelGusto: casual.integer(1, 10),
              persona_id: casual.integer(1, 10)
            }
          ])
        );
      });
      return Promise.all(promises);
    });
};
