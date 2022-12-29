import prisma from '../config/postgres'
import { CreditCard, Payment } from '@prisma/client'
export type CreditCardBody = Omit<CreditCard, 'id' | 'used_credits' | 'total_credits'>
export type PaymentBody = Omit<Payment, 'id' | 'created_at'>

export async function getModalities () {
  return await prisma.modality.findMany()
}

export async function getModalityById (id: number) {
  return await prisma.modality.findFirst({ where: { id } })
}

export async function getHostings () {
  return await prisma.hosting.findMany()
}

export async function getHostingById (id: number) {
  return await prisma.hosting.findFirst({ where: { id } })
}

export async function findCreditCardByNumber (number: string) {
  return await prisma.creditCard.findUnique({ where: { number } })
}

export async function createCreditCard (data: CreditCardBody) {
  return await prisma.creditCard.create({ data })
}

export async function insertPayment (data: PaymentBody) {
  return await prisma.payment.create({ data })
}
