import { Router } from 'express'
import * as paymentController from '../controllers/payment-controller'
import validateToken from '../middlewares/validateToken'
import validateSchema from '../middlewares/validateSchema'
import paymentSchema from '../schemas/payment-schema'

const paymentRouter = Router()

paymentRouter.get('/modalities', validateToken, paymentController.getModalities)
paymentRouter.get('/hostings', validateToken, paymentController.getHostings)
paymentRouter.post('/payments', validateToken, validateSchema(paymentSchema), paymentController.createPayment)

export default paymentRouter
