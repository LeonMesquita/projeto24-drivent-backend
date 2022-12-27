// import users from '@prisma/client'

export interface AuthBody {
  email: string
  password: string
  confirmPassword: string
}

export interface AuthData {
  email: string
  password: string
}

export interface UserData {
  id: number
  email: string
  password: string
}

export interface UserInformations {
  name: string
  cpf: string
  postal_code: string
  birth_date: string
  city: string
  state: string
  district: string
  street: string
  number: number
  phone_number: string
  complement: string | null
}
