import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import * as authRepository from '../repositories/auth-repository'
dotenv.config()

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization
  const token: string = authHeader?.split(' ')[1] ?? ''
  const JWT_SECRET: string = process.env.JWT_SECRET ?? ''

  if (token === null) return res.sendStatus(401).send('Authentication failed')
  jwt.verify(token, JWT_SECRET, async (err, user) => {
    if (err) return res.status(401).send('Authentication failed')
    const userId = Number(user)
    const findUser = await authRepository.findById(userId)
    if (!findUser) return res.status(401).send('Authentication failed')
    res.locals.userId = Number(user)
    next()
  })
}

export default validateToken
