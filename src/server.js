require("dotenv").config();
import { graphqlHTTP } from "express-graphql";
import express from "express";
import cors from "cors";

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(cors())

application.use('/graphql', graphqlHTTP({
  schema: mySchema,
  graphiql: true
}))

application.listen(PORT, () => {
  console.log(`Servidor rodnando na porta ${PORT}`)
})