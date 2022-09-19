//Throw error

const throwError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  console.warn(error);
  throw error;
};

//Handle error
const handleValidationErrors = async (toValidate, schema) => {
  const { error, value } = await schema.validate(toValidate, {
    abortEarly: false,
  });
  if (error) {
    console.warn("Validation error", error.message);
    throwError(error.message, 400);
  }
};

module.exports = {
  throwError,
  handleValidationErrors,
};
