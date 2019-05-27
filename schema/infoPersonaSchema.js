const { makeExecutableSchema } = require("graphql-tools");
const Persona = require("../model/Persona");
const Pasatiempo = require("../model/Pasatiempo");

const personaSchemaDefs = `type Persona {
                    id:ID!
                    ci:String!,
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
    personas: () => Persona.query().eager("pasatiempos"),
    personaById: (rootValue, args) =>
      Persona.query()
        .findById(args.id)
        .eager("pasatiempos")
  }
};

const personSchema = makeExecutableSchema({
  typeDefs: personaSchemaDefs,
  resolvers
});

module.exports = personSchema;
