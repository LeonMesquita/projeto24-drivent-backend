import prisma from '../config/postgres'

export async function getModalities () {
  return await prisma.modality.findMany()
}
