import { Router } from 'express'
import validateSchema from '../middlewares/validateSchema'
import validateToken from '../middlewares/validateToken'
import userDataSchema from '../schemas/user-data-schema'
import * as subscriptionController from '../controllers/subscription-controller'

const subscriptionRouter = Router()

subscriptionRouter.post('/subscriptions', validateToken, validateSchema(userDataSchema), subscriptionController.subscriptEvent)
subscriptionRouter.get('/subscriptions', validateToken, subscriptionController.getSubscription)
subscriptionRouter.get('/informations', validateToken, subscriptionController.getData)

export default subscriptionRouter
