import supertest from 'supertest'
import prisma from '../../src/config/postgres'
import app from '../../src/index'
import { signupFactory } from '../factories/auth-factory'

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE  users RESTART IDENTITY CASCADE`
})

afterAll(async () => {
  await prisma.$disconnect()
})

describe('SignUp Tests', () => {
  it('Should return 422 if no email is provided', async () => {
    const body = {
      password: 'any_password',
      confirmPassword: 'any_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(422)
  })
  it('Should return 422 if no password is provided', async () => {
    const body = {
      email: 'any_email@mail.com',
      confirmPassword: 'any_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(422)
  })
  it('Should return 422 if no password confirmation is provided', async () => {
    const body = {
      email: 'any_email@mail.com',
      password: 'any_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(422)
  })
  it('Should return 400 if password confirmation fails', async () => {
    const body = {
      email: 'any_email@mail.com',
      password: 'any_password',
      confirmPassword: 'invalid_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(400)
  })
  it('Should return 201 if signup is successful', async () => {
    const body = {
      email: 'any_email@mail.com',
      password: 'any_password',
      confirmPassword: 'any_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(201)
  })
})

describe('SignIn Tests', () => {
  it('Should return 422 if no email is provided', async () => {
    const body = {
      password: 'any_password',
      confirmPassword: 'any_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(422)
  })
  it('Should return 422 if no password is provided', async () => {
    const body = {
      email: 'any_email@mail.com',
      confirmPassword: 'any_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(422)
  })
  it('Should return 401 email is incorrect', async () => {
    const body = await signupFactory()
    const response = await supertest(app).post('/sign-in').send({
      email: 'invalid_email',
      password: body.password
    })
    expect(response.status).toBe(401)
  })
  it('Should return 401 password is incorrect', async () => {
    const body = await signupFactory()
    const response = await supertest(app).post('/sign-in').send({
      email: body.email,
      password: 'invalid_password'
    })
    expect(response.status).toBe(401)
  })
  it('Should return 200 if signin is successful', async () => {
    const body = await signupFactory()
    const response = await supertest(app).post('/sign-in').send(body)
    expect(response.status).toBe(200)
  })
})

// const body = {
//     email: 'any_email@mail.com',
//     password: 'any_password',
//     passwordConfirmation: 'any_password'
//   }
