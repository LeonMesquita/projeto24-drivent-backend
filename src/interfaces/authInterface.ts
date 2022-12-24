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
