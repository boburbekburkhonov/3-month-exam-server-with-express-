import {sign} from "../../utils/jwt.js";
import { ErrorHandler } from "../../error/error.handler.js";

export default (req, res, next) => {
  const { name, password } = req.body;

  if(name.toLowerCase() != 'admin' || password != '161901'){
    return next(new ErrorHandler('Admin not found', 404))
  }

  res.json({
    message: 'Succesfully',
    access_token: sign({admin_password: password})
  })
}