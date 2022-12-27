import { Request, Response } from 'express'
import { addSubscription } from '../services/subscription-service'

export async function subscriptEvent (req: Request, res: Response) {
  const userData = req.body
  const userId = res.locals.userId
  await addSubscription(userData, userId)
  return res.sendStatus(201)
}
