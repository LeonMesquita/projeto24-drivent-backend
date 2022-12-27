import { Request, Response } from 'express'
import { addSubscription, getUserData } from '../services/subscription-service'

export async function subscriptEvent (req: Request, res: Response) {
  const userData = req.body
  const userId = res.locals.userId
  await addSubscription(userData, userId)
  return res.sendStatus(201)
}

export async function getData (req: Request, res: Response) {
  const userId = res.locals.userId
  const userData = await getUserData(userId)
  return res.status(200).send(userData)
}
