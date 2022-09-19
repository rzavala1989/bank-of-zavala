const Joi = require("joi");

//allow lowercase and uppercase letters, and space
const nameRegex = /^[a-zA-Z ]+$/;

//allow lowercase and uppercase letters, numbers, and space
const addressRegex = /^[a-zA-Z0-9 ]+$/;

module.exports = Joi.object({
  payee_name: Joi.string().regex(nameRegex).min(2).max(50).trim().required(),
  amount: Joi.number().precision(2).positive().required(),
  memo: Joi.string().min(2).max(60).trim().required(),
  source_account: Joi.number()
    .regex(/^[0-9]+$/)
    .max(30)
    .required(),
  payee_account_number: Joi.number()
    .regex(/^[0-9]+$/)
    .max(30)
    .required(),
  payee_addr: Joi.string()
    .regex(addressRegex)
    .min(8)
    .max(100)
    .trim()
    .required(),
  method: Joi.string().valid("normal", "instant").required(),
  type: Joi.string().valid("send", "receive").required(),
});
