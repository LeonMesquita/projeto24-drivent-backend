import { Request, Response } from 'express'
import * as paymentService from '../services/payment-service'

export async function getModalities (req: Request, res: Response) {
  const modalities = await paymentService.getModalities()
  return res.status(200).send(modalities)
}

export async function getHostings (req: Request, res: Response) {
  const modalities = await paymentService.getHostings()
  return res.status(200).send(modalities)
}

export async function createPayment (req: Request, res: Response) {
  const userId: number = res.locals.userId
  const paymentBody = req.body
  const modalities = await paymentService.createPayment(userId, paymentBody)
  return res.status(200).send(modalities)
}
