import supertest from 'supertest'
import prisma from '../../src/config/postgres'
import app from '../../src/index'
import { UserInformations } from '../../src/interfaces/user-interface'
import { signinFactory } from '../factories/auth-factory'
import { userInformationsFactory } from '../factories/subscription-factory'

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE  users RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE  subscriptions RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE  payments RESTART IDENTITY CASCADE`
})

afterAll(async () => {
  await prisma.$disconnect()
})

describe('Subscription Tests', () => {
  it('Should return 400 if no email is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { name, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no cpf is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { cpf, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no postal code is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { postal_code, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if birth date is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { birth_date, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no phone number is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { phone_number, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no city is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { city, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no state is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { state, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no district is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { district, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no street is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { street, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })

  it('Should return 400 if no number is provided', async () => {
    const token: string = await signinFactory()
    const userInformations: UserInformations = userInformationsFactory()
    const { number, ...body } = userInformations

    const response = await supertest(app).post('/subscriptions').send(body).set('Authorization', 'Bearer ' + token)
    expect(response.status).toBe(400)
  })
})
