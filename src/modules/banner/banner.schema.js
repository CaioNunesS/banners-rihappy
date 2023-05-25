import { buildSchema} from "graphql";

export const BuildSchema = buildSchema(`
type Query{
    bannerName: Image

},
    type Image{
        Id: Int,
        ArchiveId: Int,
        Title: String,
        Label: String
        Url: String,
    }
`)