import 'dotenv/config'
import { graphqlHTTP } from "express-graphql";
import express from "express";
import cors from "cors";
import {BuildSchema} from "./modules/banner/banner.schema.js"
import { router } from './routes.js';

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(cors())
app.use(router)

app.use('/graphql', graphqlHTTP({
  schema: BuildSchema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`Servidor rodnando na porta ${PORT}`)
})