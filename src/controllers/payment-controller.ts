import { Request, Response } from 'express'
import * as paymentService from '../services/payment-service'

export async function getModalities (req: Request, res: Response) {
  const modalities = await paymentService.getModalities()
  return res.status(200).send(modalities)
}
