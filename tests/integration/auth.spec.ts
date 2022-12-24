import supertest from 'supertest'
import prisma from '../../src/config/postgres'
import app from '../../src/index'

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY`
})

afterAll(async () => {
  await prisma.$disconnect()
})

describe('SignUp Controller', () => {
  it('Should return 422 if no email is provided', async () => {
    const body = {
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }

    const response = await supertest(app).post('/sign-up').send(body)
    expect(response.status).toBe(422)
  })
})

// const body = {
//     email: 'any_email@mail.com',
//     password: 'any_password',
//     passwordConfirmation: 'any_password'
//   }
