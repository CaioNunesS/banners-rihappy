import { buildSchema} from "graphql";

export const BuildSchema = buildSchema(`
type Query{
    bannerName: Image

},
    type Image{
        title: String,
        label: String
        url: String,
    }
`)