import { Router } from 'express'
import * as subscriptionController from '../controllers/subscription-controller'

const subscriptionRouter = Router()

subscriptionRouter.post('/subscriptions', subscriptionController.subscriptEvent)

export default subscriptionRouter
