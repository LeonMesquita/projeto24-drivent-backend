import prisma from '../config/postgres'
import { AuthData } from '../interfaces/user-interface'
import { User } from '@prisma/client'

export async function insert (authData: AuthData) {
  await prisma.user.create({ data: authData })
}

export async function findByEmail (email: string) {
  const user: User | null = await prisma.user.findUnique({ where: { email } })
  return user
}

export async function findById (id: number) {
  const user = await prisma.user.findUnique({ where: { id } })
  return user
}
