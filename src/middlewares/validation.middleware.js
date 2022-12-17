import { ErrorHandler } from "../error/error.handler.js";

export default schema => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if(error){
      return next(new ErrorHandler(error.message, 422))
    }

    req.filtered = value;
    next()
  }
}