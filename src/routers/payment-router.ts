import { Router } from 'express'
import * as paymentController from '../controllers/payment-controller'
import validateToken from '../middlewares/validateToken'

const paymentRouter = Router()

paymentRouter.get('/modalities', validateToken, paymentController.getModalities)

export default paymentRouter
