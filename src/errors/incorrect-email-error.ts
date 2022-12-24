export class IncorrectEmailError extends Error {
  constructor () {
    super('Incorrect email or password')
    this.name = 'IncorrectEmailError'
  }
}

export const incorrectEmailError = {
  type: 'unauthorized',
  message: 'Incorrect email or password'
}
