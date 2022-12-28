import * as paymentRepository from '../repositories/payment-repository'

export async function getModalities () {
  return await paymentRepository.getModalities()
}
