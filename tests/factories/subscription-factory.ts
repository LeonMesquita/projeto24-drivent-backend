import { UserInformations } from '../../src/interfaces/user-interface'

export function userInformationsFactory (): UserInformations {
  const body: UserInformations = {
    name: 'any_name',
    cpf: '77766655543',
    postal_code: '64207065',
    birth_date: '12/30',
    phone_number: '00000000000',
    city: 'any_city',
    state: 'any_state',
    district: 'any_district',
    street: 'any_street',
    number: 0,
    complement: 'any_complement'
  }
  return body
}
