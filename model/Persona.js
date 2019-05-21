const { Model } = require("objection");
const path = require("path");

class Persona extends Model {
  static get tableName() {
    return "personas";
  }

  static get relationMappings() {
    return {
      pasatiempos: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "/Pasatiempo"),
        join: {
          from: "personas.id",
          to: "pasatiempos.persona_id"
        }
      }
    };
  }
}

module.exports = Persona;
