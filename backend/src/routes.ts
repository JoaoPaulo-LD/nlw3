import { Router, Request, Response } from 'express'

import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()

routes.post('/orphanages', OrphanagesController.create)

export default routes