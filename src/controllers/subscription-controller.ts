import { Request, Response } from 'express'
import { addSubscription } from '../services/subscription-service'

export async function subscriptEvent (req: Request, res: Response) {
  await addSubscription()
  return res.sendStatus(201)
}
