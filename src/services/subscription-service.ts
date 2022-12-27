import { UserInformations } from '../interfaces/user-interface'
import * as subscriptionRepository from '../repositories/subscription-repository'
import { AddressData } from '../repositories/subscription-repository'
export async function addSubscription (userData: UserInformations, userId: number) {
  const addressData: AddressData = {
    number: userData.number,
    street: userData.street,
    district: userData.district,
    city: userData.city,
    state: userData.state,
    complement: userData.complement,
    postal_code: userData.postal_code
  }
  const address = await subscriptionRepository.findAddressByUserId(userId)
  const phoneNumber = await subscriptionRepository.findPhoneByUserId(userId)
  await subscriptionRepository.updateAddress(userId, address?.id, addressData)
  await subscriptionRepository.updatePhoneNumber(userId, phoneNumber?.id, userData.phone_number)
  await subscriptionRepository.updateUserData(userId, userData.name, userData.birth_date, userData.cpf)
  await subscriptionRepository.createSubscription(userId)
}
