const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const personaSchema = require("./schema/infoPersonaSchema");

require("./db/setup");

const app = express();

app.use(
  "/gql-personainfo",
  bodyParser.json(),
  graphqlExpress({ schema: personaSchema })
);

app.use(
  "/giql-personainfo",
  graphiqlExpress({ endpointURL: "/gql-personainfo" })
);

const port = 5678;

app.listen(port, () => {
  console.log("Servidor GraphQl corriendo OK");
});
