const casual = require("casual");
exports.seed = (knex, Promise) => {
  return knex("personas")
    .del()
    .then(() => {
      const promises = Array(10)
        .fill()
        .map((_, i) => {
          return knex("personas").insert([
            {
              id: i + 1,
              ci: casual.integer(100, 500),
              nombres: casual.name,
              apellidos: casual.city,
              descripcion: casual.sentences(2),
              genero: casual.random_element(["MASCULINO", "FEMENINO"])
            }
          ]);
        });
      return Promise.all(promises);
    });
};
