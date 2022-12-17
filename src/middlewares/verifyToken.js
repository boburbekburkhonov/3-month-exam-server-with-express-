import jwt, { decode } from 'jsonwebtoken'
import { ErrorHandler } from "../error/error.handler.js";

export const verifyToken = (req, res, next) => {
  const { access_token } = req.headers;

  if(!access_token){
    return next(new ErrorHandler('Provide access token', 400))
  }

  jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
    if(err instanceof jwt.JsonWebTokenError){
      return next(new ErrorHandler('Invalid access token', 401))

    }

    req.password = decode.password;
    next();
  })
}