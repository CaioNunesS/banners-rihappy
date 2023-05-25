import { Router} from "express"
import { carusel, createUrl } from "./modules/controllers/index.controller.js";

const router = Router();

router.post("/graphql/:title", createUrl)
router.post("/graphql/:title", carusel)

export {router}
