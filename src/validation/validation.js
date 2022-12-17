import Joi from "joi";


// ! COMPANY
export const validationCompany = Joi.object({
  name: Joi.string().required(),
  imgUrl: Joi.string().required()
}).required()

// ! COMPLEX
export const validationComplex = Joi.object({
  complexName: Joi.string().required(),
  company: Joi.string().required()
}).required()

// ! ROOMS
export const validationRooms = Joi.object({
  count: Joi.number().required(),
  size: Joi.number().required(),
  price: Joi.string().required(),
  complex: Joi.string().required()
}).required()

// ! BANKS
export const validationBanks = Joi.object({
  name: Joi.string().required(),
  money: Joi.number().required(),
  term: Joi.number().required(),
  percentage: Joi.number().required()
}).required()