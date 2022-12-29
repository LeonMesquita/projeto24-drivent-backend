import { Request, Response } from 'express'
import * as subscriptionService from '../services/subscription-service'

export async function subscriptEvent (req: Request, res: Response) {
  const userData = req.body
  const userId = res.locals.userId
  await subscriptionService.addSubscription(userData, userId)
  return res.sendStatus(201)
}

export async function getData (req: Request, res: Response) {
  const userId = res.locals.userId
  const userData = await subscriptionService.getUserData(userId)
  return res.status(200).send(userData)
}

export async function getSubscription (req: Request, res: Response) {
  const userId = res.locals.userId
  const subscription = await subscriptionService.getSubscription(userId)
  return res.status(200).send(subscription)
}
