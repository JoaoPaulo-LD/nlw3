import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/Orphanage'

import '../database/connection'

export default {
  async create(req: Request, res: Response) {
    console.log(req.files)

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = req.body

    const orphanagesRepository = getRepository(Orphanage)

    const requestImages = req.files as Express.Multer.File[]
    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    try {
      const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images
      })

      await orphanagesRepository.save(orphanage)

      return res.status(201).json(orphanage)
    } catch (e) {
      console.log(e)
    }
  },

  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage)

    const orphanages = await orphanagesRepository.find()

    return res.status(202).json(orphanages)
  },

  async show(req: Request, res: Response) {
    const { id } = req.params

    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = await orphanagesRepository.findOneOrFail(id)

    return res.status(202).json(orphanage)
  }
}