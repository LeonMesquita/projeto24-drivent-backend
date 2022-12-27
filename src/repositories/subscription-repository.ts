import prisma from '../config/postgres'
import { Address } from '@prisma/client'
export type AddressData = Omit<Address, 'id' | 'user_id'>

export async function findAddressByUserId (user_id: number) {
  const address = await prisma.address.findFirst({
    where: { user_id }
  })
  return address
}

export async function findPhoneByUserId (user_id: number) {
  const phoneNumber = await prisma.phoneNumber.findFirst({
    where: { user_id }
  })
  return phoneNumber
}

export async function updateAddress (user_id: number, addressId: number | undefined, addressData: AddressData) {
  const data = {
    user_id,
    ...addressData
  }
  const id = addressId ?? -1
  const upsertUser = await prisma.address.upsert({
    where: {
      id
    },
    update: data,
    create: data
  })
  return upsertUser
}

export async function updatePhoneNumber (user_id: number, phoneId: number | undefined, number: string) {
  const data = {
    user_id,
    number
  }
  const id = phoneId ?? -1
  const upsertPhone = await prisma.phoneNumber.upsert({
    where: {
      id
    },
    update: data,
    create: data
  })
  return upsertPhone
}

export async function updateUserData (id: number, name: string, birth_date: string, cpf: string) {
  const data = {
    name,
    birth_date: new Date(birth_date),
    cpf
  }
  const upsertUser = await prisma.user.update({
    where: {
      id
    },
    data
  })
  return upsertUser
}

export async function createSubscription (user_id: number) {
  await prisma.subscription.create({ data: { user_id } })
}
