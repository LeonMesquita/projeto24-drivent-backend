import { AuthBody, AuthData } from '../interfaces/authInterface'
import * as authRepository from '../repositories/authRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from '@prisma/client'
import { incorrectEmailError } from '../errors/incorrect-email-error'
dotenv.config()

export async function createUser (userData: AuthBody) {
  const encryptedPassword = bcrypt.hashSync(userData.password, 10)
  const user: User | null = await authRepository.findByEmail(userData.email)
  if (userData.confirmPassword !== userData.password) throw { type: 'bad_request', message: 'The confirmation password is incorrect' }
  if (user) throw { type: 'conflict', message: 'This user already exists' }
  await authRepository.insert({
    email: userData.email,
    password: encryptedPassword
  })
}

export async function loginUser (userData: AuthData) {
  const user: User | null = await authRepository.findByEmail(userData.email)
  if (!user) throw incorrectEmailError
  const validatePassword = bcrypt.compareSync(userData.password, user.password)
  if (!validatePassword) throw incorrectEmailError
  const secretKey: string = process.env.JWT_SECRET ?? 'secret'
  const token = jwt.sign(user.id.toString(), secretKey)
  return token
}
