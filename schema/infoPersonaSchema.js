const { makeExecutableSchema } = require("graphql-tools");
const Persona = require("../model/Persona");
const Pasatiempo = require("../model/Pasatiempo");

const personaSchemaDefs = `type Persona {
                    id:ID!
                    ci:Int!,
                    nombres:String!, 
                    apellidos:String
                    descripcion:String
                    genero:Genero
                    pasatiempos:[Pasatiempo]
                }
                type Pasatiempo {
                    actividad:String,
                    nivelGusto:Int
                }
                enum Genero {
                    MASCULINO
                    FEMENINO
                }
                
                type Query {
                    personas:[Persona]
                    personaById(id:Int):Persona
                }`;

const resolvers = {
  Query: {
    personas: () => Persona.query()     
  },
  Persona: {
    pasatiempos: () => {
      return [
        { actividad: "Desarrollar", nivelGusto: 10 },
        { actividad: "Ver Series", nivelGusto: 8 }
      ];
    }
  }
};

const personSchema = makeExecutableSchema({
  typeDefs: personaSchemaDefs,
  resolvers
});

module.exports = personSchema;
