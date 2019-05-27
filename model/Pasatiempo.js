const { Model } = require("objection");
const path = require("path");

class Pasatiempo extends Model {
  static get tableName() {
    return "pasatiempos";
  }
  static get relationMappings() {
    
    return {
      persona: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "/Persona"),
        join: {
          from: "pasatiempos.persona_id",
          to: "personas.id"
        }
      }
    };
  }
}
module.exports = Pasatiempo;
