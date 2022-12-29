import * as paymentRepository from '../repositories/payment-repository'
import { CreditCardBody, PaymentBody } from '../repositories/payment-repository'
import * as subscriptionRepository from '../repositories/subscription-repository'

export async function getModalities () {
  return await paymentRepository.getModalities()
}

export async function getHostings () {
  return await paymentRepository.getHostings()
}

export async function createPayment (user_id: number, paymentBody: PaymentRequisition) {
  await checkModalityInformarions(paymentBody.modality_id, paymentBody.hosting_id)
  const creditCardBody: CreditCardBody = {
    name: paymentBody.name,
    number: paymentBody.number,
    expiration_date: String(paymentBody.expiration_date),
    cvc: paymentBody.cvc,
    user_id
  }
  let creditCard = await paymentRepository.findCreditCardByNumber(paymentBody.number)
  if (!creditCard) creditCard = await paymentRepository.createCreditCard(creditCardBody)
  const payment: PaymentBody = {
    user_id,
    modality_id: paymentBody.modality_id,
    hosting_id: paymentBody.hosting_id ?? null,
    price: paymentBody.price
  }
  await checkPaymentPrice(payment)
  const createdPayment = await paymentRepository.insertPayment(payment)
  await checkSubscriptionStatus(user_id)
  await subscriptionRepository.updateSubscription(user_id, createdPayment.id)
}

export interface PaymentRequisition {
  name: string
  number: string
  expiration_date: Date
  cvc: string
  modality_id: number
  hosting_id: number | undefined
  price: number
}

async function checkModalityInformarions (modality_id: number, hosting_id: number | undefined) {
  const modality = await paymentRepository.getModalityById(modality_id)
  if (modality?.name === 'Online' && hosting_id !== undefined) throw { type: 'bad_request', message: 'This modality does not accept hosting' }
  else if (modality?.name === 'Presencial' && hosting_id === undefined) throw { type: 'bad_request', message: 'ta errado fiote' }
}

async function checkSubscriptionStatus (user_id: number) {
  const subscription = await subscriptionRepository.getSubscriptionByUserId(user_id)
  console.log(subscription)
  if (subscription?.payment_id !== null) throw { type: 'bad_request', message: 'This subscription is already paid' }
}

async function checkPaymentPrice (paymentBody: PaymentBody) {
  let totalPrice = 0
  const modality = await paymentRepository.getModalityById(paymentBody.modality_id)
  totalPrice += modality?.price ?? 0
  if (paymentBody.hosting_id) {
    const hosting = await paymentRepository.getHostingById(paymentBody.hosting_id)
    totalPrice += hosting?.price ?? 0
  }
  if (paymentBody.price !== totalPrice) throw { type: 'bad_request', message: 'The payment value is incorrect' }
}
