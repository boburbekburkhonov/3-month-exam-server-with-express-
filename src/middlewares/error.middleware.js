import { ErrorHandler } from "../error/error.handler.js"

export default(err, req, res, next) => {
  if(err instanceof ErrorHandler){
    return res.status(err.status).json({
      message: err.message,
      status: err.status
    })
  }

  res.status(503).json({
    message: err.message,
    status: 503
  })
}