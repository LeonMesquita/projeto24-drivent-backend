import { Request, Response } from 'express'
import * as authService from '../services/authService'

export async function signupUser (req: Request, res: Response) {
  await authService.createUser(req.body)
  res.sendStatus(201)
}

export async function signinUser (req: Request, res: Response) {
  const token = await authService.loginUser(req.body)
  res.status(200).send(token)
}
