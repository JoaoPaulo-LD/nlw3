import { Router, Request, Response } from 'express'
import multer from 'multer'

import OrphanagesController from './controllers/OrphanagesController'

import uploadConfig from './config/upload'
const upload = multer(uploadConfig)

const routes = Router()

routes.post('/orphanages', OrphanagesController.create)
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', upload.array('images'),OrphanagesController.show)

export default routes