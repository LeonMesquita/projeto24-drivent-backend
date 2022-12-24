import { AuthData } from '../interfaces/authInterface'
// import * as authRepository from '../repositories/authRepository'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export async function createUser (userData: AuthData) {
  // const encryptedPassword = bcrypt.hashSync(userData.password, 10);
  // const user = await authRepository.findByEmail(userData.email);
  // if(user) throw{type: "conflict", message: "This user already exists"}

  // await authRepository.insert({
  //     ...userData,
  //     password: encryptedPassword
  // });
}

export async function loginUser (userData: AuthData) {
  // const user = await authRepository.findByEmail(userData.email);
  // const validatePassword = bcrypt.compareSync(userData.password, user!.password);
  // if(!user || !validatePassword) throw{type: "unauthorized", message: "Incorrect email or password"}
  // const secretKey: string = process.env.JWT_SECRET!;
  // const token = jwt.sign(user.id.toString(), secretKey);
  // return token;
}
