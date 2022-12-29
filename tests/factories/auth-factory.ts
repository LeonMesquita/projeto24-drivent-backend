import supertest from 'supertest'
import app from '../../src/index'
import { AuthBody, AuthData } from '../../src/interfaces/user-interface'

export async function signupFactory (): Promise<AuthData> {
  const body: AuthBody = {
    email: 'any_email@mail.com',
    password: 'any_password',
    confirmPassword: 'any_password'
  }
  await supertest(app).post('/sign-up').send(body)
  return ({
    email: body.email,
    password: body.password
  })
}

export async function signinFactory () {
  const body = await signupFactory()
  const response = await supertest(app).post('/sign-in').send(body)
  return response.body.token
}
