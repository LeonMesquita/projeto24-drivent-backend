import { Router } from 'express'
import authRouter from './authRouter'
import subscriptionRouter from './subscription-router'
import paymentRouter from './payment-router'

const router = Router()

router.use(authRouter)
router.use(subscriptionRouter)
router.use(paymentRouter)

export default router
