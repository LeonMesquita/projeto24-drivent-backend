import { Router } from 'express'
import authRouter from './authRouter'
import subscriptionRouter from './subscription-router'

const router = Router()

router.use(authRouter)
router.use(subscriptionRouter)

export default router
