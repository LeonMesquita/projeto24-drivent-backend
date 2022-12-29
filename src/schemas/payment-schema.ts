import Joi from 'joi'

const paymentSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.number().required(),
  expiration_date: Joi.date().required(),
  cvc: Joi.string().length(3).required(),
  modality_id: Joi.number().required(),
  hosting_id: Joi.number(),
  price: Joi.number().required()
})

export default paymentSchema
