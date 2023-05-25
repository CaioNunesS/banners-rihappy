import {Routes} from 'express'
import { carousel } from './slider-layout.jsonc'

const carouselRoutes = Routes()

carouselRoutes.post('/', carousel)

export {carouselRoutes}