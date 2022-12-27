import Joi from 'joi'

const userDataSchema = Joi.object({
  name: Joi.string().required(),
  cpf: Joi.number().required(),
  postal_code: Joi.number().required(),
  phone_number: Joi.number().required(),
  birth_date: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  district: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.number().required(),
  complement: Joi.string()
})

export default userDataSchema
